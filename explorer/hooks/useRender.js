import { useEffect } from 'react'
import { changeAmbiance, render, updateCamera } from '../render'
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
      refreshTextures(runtime)
      return runtime
    })
  }, [runtime.envmap, runtime.skybox, runtime.texture, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      changeAmbiance(runtime)
      refreshTextures(runtime)
      return runtime
    })
  }, [runtime.ambiance, runtime.msaa, runtime.msaaSamples, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      runtime.meshes.recompilePrograms(runtime)
      return runtime
    })
  }, [
    runtime.ambiance,
    runtime.curve,
    runtime.dimensions,
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
      runtime.meshes.changeArity(runtime.dimensions)
      return runtime
    })
  }, [runtime.dimensions, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      runtime.meshes.updateGeometries(runtime)
      return runtime
    })
  }, [runtime.space, runtime.curve, runtime.detail, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      runtime.meshes.updateUniforms(runtime)
      return runtime
    })
  }, [
    runtime.ambiance,
    runtime.curve,
    runtime.dimensions,
    runtime.sizeVertex,
    runtime.sizeEdge,
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
  }, [runtime.gl.canvas])

  useEffect(() => {
    setRuntime(runtime => {
      render(runtime)
      return runtime
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    runtime.ambiance,
    runtime.camera,
    runtime.centered,
    runtime.coxeter,
    runtime.crosssection,
    runtime.curve,
    runtime.dimensions,
    runtime.edge,
    runtime.error,
    runtime.face,
    runtime.fov3,
    runtime.fov4,
    runtime.fov5,
    runtime.fov6,
    runtime.fov7,
    runtime.fov8,
    runtime.fov9,
    runtime.hidden,
    runtime.iteration,
    runtime.detail,
    runtime.matrix,
    runtime.msaa,
    runtime.msaaSamples,
    runtime.projection3,
    runtime.projection4,
    runtime.projection5,
    runtime.projection6,
    runtime.projection7,
    runtime.projection8,
    runtime.projection9,
    runtime.processing,
    runtime.ranges,
    runtime.space,
    runtime.section,
    runtime.stellation,
    runtime.subsampling,
    runtime.sizeVertex,
    runtime.sizeEdge,
    runtime.polytope,
    runtime.vertex,
    runtime.zoom,
  ])
}
