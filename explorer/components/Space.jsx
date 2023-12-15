export default function Space({ type, subtype, level, dimensions }) {
  return (
    <span className="space">
      {type === null || type === 'indefinite'
        ? '𝕏'
        : type === 'affine'
        ? '𝔼'
        : type === 'finite'
        ? '𝕊'
        : 'ℍ'}
      {dimensions ? <sup>{dimensions - 1}</sup> : null}
      {type === 'hyperbolic' ? (
        <sub>
          {
            {
              compact: ' ',
              paracompact: '*',
              lorentzian: 'L',
              superhyperbolic: '**',
            }[subtype]
          }
          {level}
        </sub>
      ) : null}
    </span>
  )
}
