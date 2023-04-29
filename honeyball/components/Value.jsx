export default function Value({ i, j, value, stellation, onChange }) {
  return (
    <div
      className={
        'coxeter-value' +
        (typeof stellation !== 'undefined' ? ' stellated' : '')
      }
    >
      <input
        type="number"
        name={`coxeter-${i}-${j}`}
        min="2"
        step="1"
        value={value}
        onChange={onChange}
      />
      {typeof stellation !== 'undefined' && (
        <div>
          <span className="stellation-divisor">/</span>
          <input
            type="number"
            className="stellation"
            name={`stellation-${i}-${j}`}
            min="1"
            step="1"
            value={stellation}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  )
}
