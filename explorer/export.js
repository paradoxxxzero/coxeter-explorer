import { PNGRGBAWriter } from 'dekapng'
import { min } from './math'
import { render } from './render'

function wait() {
  return new Promise(resolve => {
    setTimeout(resolve, 100)
  })
}

export const renderChunk = (
  runtime,
  fullWidth,
  fullHeight,
  x,
  y,
  width,
  height,
  margin = 0
) => {
  const { gl } = runtime
  const margins = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }

  margins.left = min(margin, x)
  margins.top = min(margin, y)
  margins.right = min(margin, fullWidth - x - width)
  margins.bottom = min(margin, fullHeight - y - height)

  render(runtime, {
    height: height + margins.top + margins.bottom,
    width: width + margins.left + margins.right,
    x: x - margins.left,
    y: y - margins.top,
    fullWidth,
    fullHeight,
  })

  const data = new Uint8Array(width * height * 4)
  gl.bindFramebuffer(gl.FRAMEBUFFER, null)
  gl.readPixels(
    margins.left,
    margins.bottom,
    width,
    height,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    data
  )
  const lineSize = width * 4
  const line = new Uint8Array(lineSize)
  const numLines = (height / 2) | 0
  for (let i = 0; i < numLines; ++i) {
    const topOffset = lineSize * i
    const bottomOffset = lineSize * (height - i - 1)
    line.set(data.slice(topOffset, topOffset + lineSize), 0)
    data.set(data.slice(bottomOffset, bottomOffset + lineSize), topOffset)
    data.set(line, bottomOffset)
  }
  return {
    width,
    height,
    data: data,
  }
}

export const iterateChunks = async (
  runtime,
  width,
  height,
  chunkWidth,
  chunkHeight,
  progress,
  pngRGBAWriter,
  margin = 0
) => {
  for (let chunkY = 0; chunkY < height; chunkY += chunkHeight) {
    const rowChunks = []
    const localHeight = min(chunkHeight, height - chunkY)

    for (let chunkX = 0; chunkX < width; chunkX += chunkWidth) {
      const localWidth = min(chunkWidth, width - chunkX)

      const data = renderChunk(
        runtime,
        width,
        height,
        chunkX,
        chunkY,
        localWidth,
        localHeight,
        margin
      )
      if (!data) {
        return
      }
      rowChunks.push(data)

      progress.innerHTML = `${(
        ((chunkY + chunkHeight * (chunkX / width)) / height) *
        100
      ).toFixed(0)}%`

      await wait()
    }

    for (let row = 0; row < localHeight; ++row) {
      rowChunks.forEach(chunk => {
        const rowSize = chunk.width * 4
        const chunkOffset = rowSize * row
        pngRGBAWriter.addPixels(chunk.data, chunkOffset, chunk.width)
      })
    }
  }
}

export async function makeBigPng(runtime, width, height) {
  const pngRGBAWriter = new PNGRGBAWriter(width, height)

  const chunkWidth = 1000
  const chunkHeight = 1000
  const margin = 100

  const progress = document.createElement('div')
  progress.className = 'export-progress'
  document.body.appendChild(progress)

  try {
    await iterateChunks(
      runtime,
      width,
      height,
      chunkWidth,
      chunkHeight,
      progress,
      pngRGBAWriter,
      margin
    )
  } finally {
    document.body.removeChild(progress)
  }
  render(runtime)

  return pngRGBAWriter.finishAndGetBlob()
}
