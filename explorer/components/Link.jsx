export default function Link({ type }) {
  return (
    <svg className="coxeter-link" viewBox="0 0 24 16">
      <path
        d="M 0 8 L 24 8"
        strokeWidth={type === 'bold' ? 3 : 1}
        stroke="currentColor"
        strokeDasharray={type === 'dashed' ? '1 1' : ''}
      />
    </svg>
  )
}
