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
      runtime.meshes.vertex.extendAttributes(
        runtime,
        runtime.maxVertices,
        false
      )
      runtime.meshes.edge.extendAttributes(runtime, runtime.maxEdges, false)
      runtime.meshes.face.extendAttributes(runtime, runtime.maxFaces, false)
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
    runtime.edges,
    runtime.ranges,
    runtime.showEdges,
    runtime.showFaces,
    runtime.showVertices,
    runtime.vertices,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      recompilePrograms(runtime)
      return runtime
    })
  }, [
    runtime.ambiance,
    runtime.dimensions,
    runtime.easing,
    runtime.projection,
    runtime.spaceType, // For easing auto
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
    runtime.curve,
    runtime.maxEdges,
    runtime.maxVertices,
    runtime.segments,
    runtime.showEdges,
    runtime.showFaces,
    runtime.showVertices,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      updateUniforms(runtime)
      return runtime
    })
  }, [
    runtime.ambiance,
    runtime.ambiance,
    runtime.curvature,
    runtime.curve,
    runtime.dimensions,
    runtime.easing,
    runtime.edgeThickness,
    runtime.fov4,
    runtime.fov5,
    runtime.fov6,
    runtime.fov7,
    runtime.fov8,
    runtime.fov9,
    runtime.matrix,
    runtime.maxEdges,
    runtime.maxVertices,
    runtime.projection,
    runtime.segments,
    runtime.spaceType,
    runtime.vertexThickness,
    setRuntime,
  ])

  useEffect(() => {
    // Resize observer calls render on setup
    const resizeObserver = new ResizeObserver(() => {
      render(runtime)
    })
    resizeObserver.observe(runtime.gl.canvas, { box: 'content-box' })

    return () => resizeObserver.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    runtime.ambiance,
    // runtime.askedOrder,
    runtime.camera,
    runtime.centered,
    // runtime.controls,
    runtime.coxeter,
    runtime.currentOrder,
    runtime.curvature,
    runtime.curve,
    runtime.dimensions,
    runtime.easing,
    runtime.edges,
    runtime.edgeThickness,
    runtime.error,
    // runtime.extended,
    runtime.faces,
    // runtime.fb,
    runtime.fov3,
    runtime.fov4,
    runtime.fov5,
    runtime.fov6,
    runtime.fov7,
    runtime.fov8,
    runtime.fov9,
    // runtime.gl,
    runtime.grouper,
    runtime.matrix,
    runtime.maxEdges,
    runtime.maxFaces,
    runtime.maxVertices,
    // runtime.meshes,
    // runtime.mirrors,
    // runtime.mirrorsPlanes,
    runtime.msaa,
    runtime.msaaSamples,
    // runtime.order,
    // runtime.passes,
    // runtime.processing,
    runtime.projection,
    runtime.ranges,
    // runtime.rb,
    runtime.renderError,
    // runtime.rootVertex,
    runtime.segments,
    runtime.showEdges,
    runtime.showFaces,
    runtime.showVertices,
    runtime.spaceType,
    runtime.stellation,
    runtime.subsampling,
    runtime.vertexThickness,
    runtime.vertices,
    runtime.zoom,
  ])
}
