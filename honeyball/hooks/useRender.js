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

export const useRender = runtime => {
  useEffect(() => {
    resetComposerTarget(runtime.composer, runtime.msaa, runtime.msaaSamples)
  }, [runtime.msaa, runtime.msaaSamples, runtime.composer])

  useEffect(() => {
    updateCameraFov(runtime.composer, runtime.camera, runtime.fov3)
  }, [runtime.fov3, runtime.camera, runtime.composer])

  useEffect(() => {
    initVertex(runtime)
    initEdge(runtime)
    initFace(runtime)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runtime.dimensions, runtime.curve, runtime.segments])

  useEffect(() => {
    if (runtime.vertices.length) {
      console.warn(`Extending vertex buffer to ${runtime.vertices.length}`)
      initVertex(runtime)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runtime.maxVertices])

  useEffect(() => {
    if (runtime.edges.length) {
      console.warn(`Extending edge buffer to ${runtime.edges.length}`)
      initEdge(runtime)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runtime.maxEdges])

  useEffect(() => {
    changeAmbiance(runtime)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runtime.ambiance])

  useEffect(() => {
    show(runtime, 'vertex')
    show(runtime, 'edge')
    show(runtime, 'face')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runtime.showVertices, runtime.showEdges, runtime.showFaces])

  useEffect(() => {
    // Order plot
    if (runtime.currentOrder < 0) {
      return
    }
    plot(runtime, runtime.currentOrder - 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    runtime.currentOrder,
    runtime.vertices,
    runtime.edges,
    runtime.ranges,
    runtime.showVertices,
    runtime.showEdges,
    runtime.showFaces,
  ])

  useEffect(() => {
    // Full plot
    plot(runtime)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  ])

  useEffect(() => {
    updateMaterials(runtime)
    runtime.composer.render()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
