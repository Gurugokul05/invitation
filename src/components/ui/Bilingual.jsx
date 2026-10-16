/**
 * Renders a { tamil, english } pair — Tamil first, English underneath in a
 * muted smaller style. Any missing half is simply skipped.
 */
export default function Bilingual({
  value,
  tamilClassName = '',
  englishClassName = '',
  className = '',
  showEnglish = true,
  as: TamilTag = 'span',
}) {
  if (!value) return null;
  if (typeof value === 'string') {
    return <TamilTag className={`${className} ${tamilClassName}`}>{value}</TamilTag>;
  }

  const { tamil, english } = value;

  return (
    <span className={`block ${className}`}>
      {tamil && <TamilTag className={`block font-tamil ${tamilClassName}`}>{tamil}</TamilTag>}
      {showEnglish && english && (
        <span className={`block font-display ${englishClassName}`}>{english}</span>
      )}
    </span>
  );
}
