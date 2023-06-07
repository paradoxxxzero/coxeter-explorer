import { useEffect } from 'react'
import { size } from '../event'
import {
  changeAmbiance,
  initEdge,
  initFace,
  initVertex,
  plot,
  resetComposerTarget,
  show,
  updateCameraFov,
  updateMaterials,
} from '../render'

export const useRender = (runtime, setRuntime) => {
  useEffect(() => {
    setRuntime(runtime => {
      resetComposerTarget(runtime.composer, runtime.msaa, runtime.msaaSamples)
      return runtime
    })
  }, [runtime.msaa, runtime.msaaSamples, runtime.composer, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      updateCameraFov(runtime.composer, runtime.camera, runtime.fov3)
      return runtime
    })
  }, [runtime.fov3, runtime.camera, runtime.composer, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      initVertex(runtime)
      initEdge(runtime)
      initFace(runtime)
      return runtime
    })
  }, [runtime.dimensions, runtime.curve, runtime.segments, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.vertices.length) {
        console.warn(`Extending vertex buffer to ${runtime.vertices.length}`)
        initVertex(runtime)
      }
      return runtime
    })
  }, [runtime.maxVertices, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.edges.length) {
        console.warn(`Extending edge buffer to ${runtime.edges.length}`)
        initEdge(runtime)
      }
      return runtime
    })
  }, [runtime.maxEdges, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      changeAmbiance(runtime)
      return runtime
    })
  }, [runtime.ambiance, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      show(runtime, 'vertex')
      show(runtime, 'edge')
      show(runtime, 'face')
      return runtime
    })
  }, [runtime.showVertices, runtime.showEdges, runtime.showFaces, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      // Order plot
      if (runtime.currentOrder < 0) {
        return
      }
      plot(runtime, runtime.currentOrder - 1)
      return runtime
    })
  }, [
    runtime.currentOrder,
    runtime.vertices,
    runtime.edges,
    runtime.ranges,
    runtime.showVertices,
    runtime.showEdges,
    runtime.showFaces,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      // Full plot
      plot(runtime)
      return runtime
    })
  }, [
    runtime.ambiance,
    runtime.showVertices,
    runtime.showEdges,
    runtime.showFaces,
    runtime.maxVertices,
    runtime.maxEdges,
    runtime.curve,
    runtime.segments,
    runtime.matrix,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      updateMaterials(runtime)
      runtime.composer.render()
      return runtime
    })
  }, [
    runtime.fov4,
    runtime.fov5,
    runtime.fov6,
    runtime.fov7,
    runtime.fov8,
    runtime.fov9,
    runtime.vertexThickness,
    runtime.edgeThickness,
    runtime.projection,
    runtime.curvature,
    runtime.dimensions,
    runtime.curve,
    runtime.segments,
    runtime.maxVertices,
    runtime.maxEdges,
    runtime.matrix,
    setRuntime,
  ])

  useEffect(() => {
    const onSize = () => {
      size(runtime)
    }
    window.addEventListener('resize', onSize)
    window.addEventListener('orientationchange', onSize)
    return () => {
      window.removeEventListener('resize', onSize)
      window.removeEventListener('orientationchange', onSize)
    }
  }, [runtime])
}
