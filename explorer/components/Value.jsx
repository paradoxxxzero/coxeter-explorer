import Number from './Number'

export default function Value({ i, j, value, stellation, onChange }) {
  return (
    <div className="coxeter-value">
      <Number
        name={`coxeter-${i}-${j}`}
        value={value}
        onChange={onChange}
        coxeter
        fraction={stellation}
        fractionName={`stellation-${i}-${j}`}
      />
    </div>
  )
}
