import { useEffect } from 'react'
import { changeAmbiance, plot, render, show, updateCameraFov } from '../render'
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
      runtime.meshes.updateGeometries(runtime)
      return runtime
    })
  }, [runtime.curve, runtime.segments, setRuntime])

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
      // Order plot
      if (runtime.currentOrder < 0) {
        return
      }
      plot(runtime, runtime.currentOrder - 1)
      return runtime
    })
  }, [
    runtime.currentOrder,
    runtime.edge,
    runtime.face,
    runtime.ranges,
    runtime.showEdges,
    runtime.showFaces,
    runtime.showVertices,
    runtime.vertex,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      runtime.meshes.recompilePrograms(runtime)
      return runtime
    })
  }, [
    runtime.ambiance,
    runtime.dimensions,
    runtime.easing,
    runtime.projection3,
    runtime.projection4,
    runtime.projection5,
    runtime.projection6,
    runtime.projection7,
    runtime.projection8,
    runtime.projection9,
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
    runtime.segments,
    runtime.showEdges,
    runtime.showFaces,
    runtime.showVertices,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      runtime.meshes.updateUniforms(runtime)
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
    runtime.projection3,
    runtime.projection4,
    runtime.projection5,
    runtime.projection6,
    runtime.projection7,
    runtime.projection8,
    runtime.projection9,
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
    runtime.matrix,
    // runtime.meshes,
    // runtime.mirrors,
    // runtime.mirrorsPlanes,
    runtime.msaa,
    runtime.msaaSamples,
    // runtime.order,
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
    runtime.vertex,
    runtime.zoom,
  ])
}
