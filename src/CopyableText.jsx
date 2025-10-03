import { BiCopy, BiCheck , BiLinkExternal} from "react-icons/bi"
import { useState } from "react"

const CopyableText = ({text , lang , link}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  return (
    <div className="flex gap-x-4 cursor-pointer items-center text-xl w-fit  *:not-first:hover:text-accent-foreground *:transition-all *:duration-200 *:ease-in-out" onClick={handleCopy}  >
      <p>{text}</p> 
      <span onClick={handleCopy} className=" relative inline-block text-foreground/60" title={lang === "en" ? "Click to copy": "Cliquez pour copier"}>
        <BiCopy className={`transition-all duration-300 ${copied ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
        <BiCheck className={`text-green-500 absolute inset-0 transition-all duration-300 ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
      </span>
      <span className=" relative inline-block text-foreground/60" onClick={() => window.open(link, "_blank")}
      title={lang === "en" ? "Click to open link": "Cliquez pour ouvrir le lien"}
      >
        <BiLinkExternal />
      </span>
    </div>
  )
}

export default CopyableText