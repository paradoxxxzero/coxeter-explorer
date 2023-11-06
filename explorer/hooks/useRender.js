import { useEffect } from 'react'
import {
  changeAmbiance,
  plot,
  recompilePrograms,
  render,
  show,
  updateCameraFov,
  updateUniforms,
} from '../render'
import refreshTextures from '../textures'

export const useRender = (runtime, setRuntime) => {
  useEffect(() => {
    setRuntime(runtime => {
      updateCameraFov(runtime)
      return runtime
    })
  }, [runtime.fov3, runtime.camera, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      Object.values(runtime.meshes).forEach(mesh => {
        mesh.updateGeometry(runtime)
      })
      return runtime
    })
  }, [runtime.dimensions, runtime.curve, runtime.segments, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.vertices.length) {
        console.warn(`Extending vertex buffer to ${runtime.maxVertices}`)
        runtime.meshes.vertex.extendAttributes(runtime, runtime.maxVertices)
      }
      return runtime
    })
  }, [runtime.maxVertices, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.edges.length) {
        console.warn(`Extending edge buffer to ${runtime.maxEdges}`)
        runtime.meshes.edge.extendAttributes(runtime, runtime.maxEdges)
      }
      return runtime
    })
  }, [runtime.maxEdges, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.faces.length) {
        console.warn(`Extending edge buffer to ${runtime.maxFaces}`)
        runtime.meshes.face.extendAttributes(runtime, runtime.maxFaces)
      }
      return runtime
    })
  }, [runtime.maxFaces, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      runtime.meshes.vertex.extendAttributes(runtime, runtime.maxVertices)
      runtime.meshes.edge.extendAttributes(runtime, runtime.maxEdges)
      runtime.meshes.face.extendAttributes(runtime, runtime.maxFaces)
      return runtime
    })
  }, [runtime.dimensions, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      changeAmbiance(runtime)
      return runtime
    })
  }, [runtime.ambiance, runtime.msaa, runtime.msaaSamples, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      refreshTextures(runtime)
      return runtime
    })
  }, [runtime.ambiance, runtime.msaa, runtime.msaaSamples, setRuntime])

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
      recompilePrograms(runtime)
      return runtime
    })
  }, [
    runtime.ambiance,
    runtime.spaceType, // For easing auto
    runtime.easing,
    runtime.projection,
    runtime.dimensions,
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
      updateUniforms(runtime)
      return runtime
    })
  }, [
    runtime.ambiance,
    runtime.spaceType,
    runtime.easing,
    runtime.projection,
    runtime.dimensions,
    runtime.ambiance,
    runtime.fov4,
    runtime.fov5,
    runtime.fov6,
    runtime.fov7,
    runtime.fov8,
    runtime.fov9,
    runtime.vertexThickness,
    runtime.edgeThickness,
    runtime.curvature,
    runtime.curve,
    runtime.segments,
    runtime.maxVertices,
    runtime.maxEdges,
    runtime.matrix,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      render(runtime)
      return runtime
    })
  }, [runtime, setRuntime])

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => render(runtime))
    resizeObserver.observe(runtime.gl.canvas, { box: 'content-box' })

    return () => resizeObserver.disconnect()
  }, [runtime])
}
