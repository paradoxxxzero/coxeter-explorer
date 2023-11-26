export const xdot = (v1, v2, curvature) => {
  let sum = 0
  for (let i = 0; i < v1.length; i++) {
    sum += v1[i] * v2[i] * (i === v1.length - 1 ? curvature || 1 : 1)
  }
  return sum
}

export const xdot2 = (x, curvature) => xdot(x, x, curvature)

const proj = (a, b, curvature) => {
  const result = []
  const dot = xdot(a, b, curvature)
  for (let i = 0; i < a.length; i++) {
    result[i] = dot * b[i]
  }
  return result
}
const sub = (a, b) => {
  const result = []
  for (let i = 0; i < a.length; i++) {
    result[i] = a[i] - b[i]
  }
  return result
}

export const gramSchmidt = (vectors, curvature) => {
  const basis = [normalize(vectors[0], curvature)]
  for (let i = 1; i < vectors.length; i++) {
    let projection = vectors[i]
    for (let j = 0; j < i; j++) {
      projection = sub(projection, proj(vectors[i], basis[j], 1))
    }
    basis[i] = normalize(projection, curvature)
  }
  return basis
}

export const coxeterPlane = (spaceType, rootNormals, dimensions) => {
  const { curvature } = spaceType

  const eigens = spaceType.eigens
  const eigenVecs = transpose(eigens.vectors)
  const biggestEigenValue = max(...eigens.values)
  const biggestEigenValueIndex = eigens.values.indexOf(biggestEigenValue)
  const biggestEigenVector = eigenVecs[biggestEigenValueIndex]

  const smallestEigenValue = min(...eigens.values)
  const smallestEigenValueIndex = eigens.values.indexOf(smallestEigenValue)

  const smallestEigenVector = eigenVecs[smallestEigenValueIndex]

  biggestEigenVector[biggestEigenVector.length - 1] *= curvature
  smallestEigenVector[smallestEigenVector.length - 1] *= curvature

  const tr = transpose(rootNormals)
  const u = normalize(multiplyVector(tr, biggestEigenVector), curvature)
  const v = normalize(multiplyVector(tr, smallestEigenVector), curvature)

  const id = ident(dimensions)
  const basis = [u, v]
  for (let i = 2; i < dimensions; i++) {
    basis.push(id[i])
  }
  const matrix = gramSchmidt(basis, curvature)

  return matrix
}
