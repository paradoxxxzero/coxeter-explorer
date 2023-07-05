export default function Space({ type, dimensions }) {
  return (
    <>
      <span className="space">
        {type === null || type === 'indefinite'
          ? '𝕏'
          : type === 'affine'
          ? '𝔼'
          : type === 'finite'
          ? '𝕊'
          : 'ℍ'}
      </span>
      {dimensions ? <sup>{dimensions - 1}</sup> : null}
      {type?.startsWith('hyperbolic') ? (
        <sub>
          {{ compact: ' ', paracompact: '*' }[
            type.replace(/^hyperbolic-/, '')
          ] ||
            (type.startsWith('hyperbolic-lorentzian')
              ? `L${type.replace(/^hyperbolic-lorentzian-level-/, '')}`
              : null)}
        </sub>
      ) : null}
    </>
  )
}
