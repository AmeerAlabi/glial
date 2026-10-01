/** Renders plain text from content files, splitting paragraphs on blank lines. */
export default function Paragraphs({ text, className = 'prose-glial' }) {
  if (!text) return null
  const paragraphs = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
  return (
    <div className={className}>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}
