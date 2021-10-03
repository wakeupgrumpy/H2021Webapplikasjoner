const InfoBlob = ({ props }) => {
  const { color, content, link, Icon } = props
  return (
    <div>
      <Icon className="h-4 xl:inline-block hidden mr-2" />
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-1 bg-yellow-300 hover:bg-yellow-400 text-black rounded-full font-bold tracking-wide text-xs"
        >
          {content}
        </a>
      ) : (
        <span
          className={`px-4 py-1 bg-${color}-200 rounded-full font-semibold uppercase tracking-wide text-xs`}
        >
          {content}
        </span>
      )}
    </div>
  )
}
export default InfoBlob
