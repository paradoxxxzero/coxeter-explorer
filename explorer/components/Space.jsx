export default function Space({ type, dimensions }) {
  return (
    <>
      <span className="space">
        {type === null || type.type === 'indefinite'
          ? '𝕏'
          : type.type === 'affine'
          ? '𝔼'
          : type.type === 'finite'
          ? '𝕊'
          : 'ℍ'}
      </span>
      {dimensions ? <sup>{dimensions - 1}</sup> : null}
      {type && type.type === 'hyperbolic' ? (
        <sub>
          {
            {
              compact: ' ',
              paracompact: '*',
              lorentzian: 'L',
              superhyperbolic: '**',
            }[type.subtype]
          }
          {type.level}
        </sub>
      ) : null}
    </>
  )
}
