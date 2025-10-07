import { BiCopy, BiCheck, BiLinkExternal } from "react-icons/bi"
import { useState } from "react"

const CopyableText = ({text, lang, link}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text)
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        textArea.remove()
      }
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  return (
    <div className="flex items-center text-[1.1rem]  min-w-[200px] max-w-/5 *:transition-all *:duration-200 *:ease-in-out">
      <p className="mr-auto lg:mr-0 cursor-pointer" title={lang === "en" ? "Click to copy": "Cliquez pour copier"} onClick={handleCopy}>{text}</p>
      <div className="flex gap-x-4 ml-4">
        <button 
          onClick={handleCopy} 
          onTouchStart={handleCopy}
          className="relative inline-block text-foreground/60 cursor-pointer hover:text-accent-foreground border-none bg-transparent p-0"
          title={lang === "en" ? "Click to copy": "Cliquez pour copier"}
        >
          <BiCopy className={`transition-all duration-300 ${copied ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
          <BiCheck className={`text-green-500 absolute inset-0  transition-all duration-300 ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
        </button>
        <span className="relative inline-block text-foreground/60 cursor-pointer hover:text-accent-foreground" onClick={() => window.open(link, "_blank")}
          title={lang === "en" ? "Click to open link": "Cliquez pour ouvrir le lien"}
        >
          <BiLinkExternal />
        </span>
      </div>
    </div>
  )
}

export default CopyableText