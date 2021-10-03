import InfoBlob from './InfoBlob'

const CardFooter = ({ fotterProps }) => (
  <footer className="flex justify-between px-2 py-4">
    {Object.keys(fotterProps).map((prop, i) => (
      <InfoBlob key={i} props={fotterProps[prop]} />
    ))}
  </footer>
)

export default CardFooter
