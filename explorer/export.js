import { PNGRGBAWriter } from 'dekapng'
import { Vector2 } from 'three'

function wait() {
  return new Promise(resolve => {
    setTimeout(resolve)
  })
}

export const renderChunk = (
  runtime,
  width,
  height,
  chunkX,
  chunkY,
  chunkWidth,
  chunkHeight
) => {
  const { camera, composer } = runtime
  composer.renderer.setSize(chunkWidth, chunkHeight)
  composer.renderer.setPixelRatio(1)
  composer.setSize(chunkWidth, chunkHeight)
  composer.setPixelRatio(1)

  camera.aspect = chunkWidth / chunkHeight
  camera.setViewOffset(width, height, chunkX, chunkY, chunkWidth, chunkHeight)
  camera.updateProjectionMatrix()
  composer.passes.forEach(pass => {
    if (pass.material?.uniforms?.['resolution']) {
      let cw = chunkWidth
      let ch = chunkHeight
      if (pass.material.uniforms['resolution'].value.x <= 1) {
        cw = 1 / cw
        ch = 1 / ch
      }
      pass.material.uniforms['resolution'].value.x = cw
      pass.material.uniforms['resolution'].value.y = ch
    }
    if (pass.resolution) {
      pass.resolution = new Vector2(width, height)
    }
  })

  composer.render()

  const data = new Uint8Array(chunkWidth * chunkHeight * 4)
  const gl = composer.renderer.getContext()
  gl.readPixels(0, 0, chunkWidth, chunkHeight, gl.RGBA, gl.UNSIGNED_BYTE, data)

  // swap lines (should probably just fix code in makeBigPng to read backward
  const lineSize = chunkWidth * 4
  const line = new Uint8Array(lineSize)
  const numLines = (chunkHeight / 2) | 0
  for (let i = 0; i < numLines; ++i) {
    const topOffset = lineSize * i
    const bottomOffset = lineSize * (chunkHeight - i - 1)
    line.set(data.slice(topOffset, topOffset + lineSize), 0)
    data.set(data.slice(bottomOffset, bottomOffset + lineSize), topOffset)
    data.set(line, bottomOffset)
  }
  return {
    width: chunkWidth,
    height: chunkHeight,
    data: data,
  }
}

export async function makeBigPng(runtime, width, height) {
  const pngRGBAWriter = new PNGRGBAWriter(width, height)

  const chunkWidth = 1000
  const chunkHeight = 1000

  // const progress = document.querySelector('#progress')
  function setProgress(p) {
    // progress.textContent = `${(p * 100) | 0}%`
    console.log(`${(p * 100) | 0}%`)
  }

  setProgress(0)

  for (let chunkY = 0; chunkY < height; chunkY += chunkHeight) {
    const rowChunks = []
    const localHeight = Math.min(chunkHeight, height - chunkY)

    for (let chunkX = 0; chunkX < width; chunkX += chunkWidth) {
      const localWidth = Math.min(chunkWidth, width - chunkX)

      const data = renderChunk(
        runtime,
        width,
        height,
        chunkX,
        chunkY,
        localWidth,
        localHeight
      )
      if (!data) {
        return
      }
      rowChunks.push(data)
    }

    for (let row = 0; row < localHeight; ++row) {
      rowChunks.forEach(chunk => {
        const rowSize = chunk.width * 4
        const chunkOffset = rowSize * row
        pngRGBAWriter.addPixels(chunk.data, chunkOffset, chunk.width)
      })
    }

    setProgress(Math.min(1, (chunkY + chunkHeight) / height))
    await wait()
  }

  return pngRGBAWriter.finishAndGetBlob()
}
