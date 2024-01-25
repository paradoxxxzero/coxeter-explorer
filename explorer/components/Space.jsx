export default function Space({ type, subtype, order, dimensions }) {
  return (
    <span
      className="space"
      title={`${type} ${subtype}${order > 1 ? `of order ${order}` : ''}`}
    >
      {type === null || type === 'indefinite' || type === 'empty'
        ? '𝕏'
        : type === 'affine'
        ? '𝔼'
        : type === 'finite'
        ? '𝕊'
        : 'ℍ'}
      {dimensions !== null ? (
        <sup>
          {dimensions - 1}
          {order > 1 ? <sup>{order}</sup> : null}
        </sup>
      ) : null}
      {type === 'hyperbolic' ? (
        <sub>
          {
            {
              compact: ' ',
              paracompact: '*',
              hypercompact: '+',
            }[subtype]
          }
        </sub>
      ) : null}
    </span>
  )
}
