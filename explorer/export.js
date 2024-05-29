import { ceil, min } from './math'
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

  const data = new Uint8ClampedArray(width * height * 4)
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
  return new ImageData(data, width, height)
}

export const iterateChunks = async (
  runtime,
  width,
  height,
  chunkWidth,
  chunkHeight,
  progress,
  combinedCtx,
  margin = 0
) => {
  const total = ceil(width / chunkWidth) * ceil(height / chunkHeight)
  let i = 0
  for (let chunkY = 0; chunkY < height; chunkY += chunkHeight) {
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

      combinedCtx.putImageData(data, chunkX, height - chunkY - localHeight)

      progress.innerHTML = `${((++i / total) * 100).toFixed(0)}%`

      await wait()
    }
  }
}

export async function makeBigPng(runtime, width, height) {
  const chunkWidth = 1000
  const chunkHeight = 1000
  const margin = 100

  const progress = document.createElement('div')
  progress.className = 'export-progress'
  document.body.appendChild(progress)

  const combinedCanvas = document.createElement('canvas')
  combinedCanvas.width = width
  combinedCanvas.height = height
  const combinedCtx = combinedCanvas.getContext('2d')

  try {
    await iterateChunks(
      runtime,
      width,
      height,
      chunkWidth,
      chunkHeight,
      progress,
      combinedCtx,
      margin
    )
  } finally {
    document.body.removeChild(progress)
  }

  render(runtime)

  return combinedCanvas.toDataURL('image/png')
}
