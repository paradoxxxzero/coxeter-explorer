import { useEffect } from 'react'
import { changeAmbiance, render, show, updateCamera } from '../render'
import refreshTextures from '../textures'

export const useRender = (runtime, setRuntime) => {
  useEffect(() => {
    setRuntime(runtime => {
      updateCamera(runtime, runtime.zoom)
      return runtime
    })
  }, [runtime.zoom, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      updateCamera(runtime)
      return runtime
    })
  }, [runtime.fov3, runtime.camera, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      runtime.meshes.updateGeometries(runtime)
      return runtime
    })
  }, [
    runtime.space,
    runtime.curve,
    runtime.segments,
    runtime.detail,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      runtime.meshes.changeArity(runtime.dimensions)
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
      runtime.meshes.recompilePrograms(runtime)
      return runtime
    })
  }, [
    runtime.ambiance,
    runtime.curve,
    runtime.dimensions,
    runtime.easing,
    runtime.detail,
    runtime.segments,
    runtime.projection3,
    runtime.projection4,
    runtime.projection5,
    runtime.projection6,
    runtime.projection7,
    runtime.projection8,
    runtime.projection9,
    runtime.space,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      // Full plot
      try {
        if (runtime.visit.length) {
          runtime.meshes.plot(runtime)
        }
        return runtime
      } catch (e) {
        console.error(e)
        return {
          ...runtime,
          error: e.message,
        }
      }
    })
  }, [
    runtime.ambiance,
    runtime.showEdges,
    runtime.showFaces,
    runtime.showVertices,
    runtime.visit,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      runtime.meshes.updateUniforms(runtime)
      return runtime
    })
  }, [
    runtime.ambiance,
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
    runtime.detail,
    runtime.matrix,
    runtime.projection3,
    runtime.projection4,
    runtime.projection5,
    runtime.projection6,
    runtime.projection7,
    runtime.projection8,
    runtime.projection9,
    runtime.segments,
    runtime.vertexThickness,
    runtime.space,
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
    runtime.camera,
    runtime.centered,
    // runtime.controls,
    runtime.coxeter,
    runtime.curve,
    runtime.dimensions,
    runtime.easing,
    runtime.edge,
    runtime.edgeThickness,
    runtime.error,
    // runtime.extended,
    runtime.face,
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
    runtime.iteration,
    runtime.detail,
    runtime.matrix,
    // runtime.meshes,
    // runtime.mirrors,
    // runtime.rootNormals,
    runtime.msaa,
    runtime.msaaSamples,
    // runtime.passes,
    // runtime.processing,
    runtime.projection3,
    runtime.projection4,
    runtime.projection5,
    runtime.projection6,
    runtime.projection7,
    runtime.projection8,
    runtime.projection9,
    runtime.ranges,
    // runtime.rb,
    // runtime.rootVertex,
    runtime.segments,
    runtime.showEdges,
    runtime.showFaces,
    runtime.showVertices,
    runtime.space,
    runtime.stellation,
    runtime.subsampling,
    runtime.vertexThickness,
    runtime.vertex,
    runtime.visit, // FIXME : only for dimension 1-3
    runtime.zoom,
  ])
}
