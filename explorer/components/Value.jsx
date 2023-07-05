import Number from './Number'

export default function Value({ i, j, value, stellation, onChange }) {
  return (
    <div className="coxeter-value">
      <Number
        name={`coxeter-${i}-${j}`}
        min={2}
        step={1}
        value={value}
        onChange={onChange}
        allowInfinity
        fraction={stellation}
        fractionName={`stellation-${i}-${j}`}
      />
    </div>
  )
}
