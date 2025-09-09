const CommandLabel = ({command , dir}) => {
  return (
    <>
    <span>guest<span className="text-lime-400">@walid</span></span><span>:<span>{dir}</span>$ <span>{command}</span></span>
    </>
  )
}

export default CommandLabel
