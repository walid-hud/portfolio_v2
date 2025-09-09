import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useState , useRef} from "react"
import { MdTerminal } from "react-icons/md"
import { PiQuestionFill } from "react-icons/pi"



const Modal = ({setModalVisible}) => {
  const modalRef = useRef(null)
  const [showModal, setModal] = useState(true)
  const closeModal = ()=>{
    gsap.to(modalRef.current , {scale:0 , opacity:0 , duration:0.6 , ease:"expo.inOut" , onComplete:()=>{setModal(false); setModalVisible(false)}})
  }
  useGSAP(()=>{
    if(modalRef.current){
      gsap.from(modalRef.current , {scale:0 , opacity:0 , duration:0.6 , ease:"expo.inOut" , delay:0.1})
    }
  })
  return ( 
    showModal &&
    <div className="fixed top-0 right-0 backdrop-brightness-0  z-[1] w-screen scale-100 opacity-100 h-screen flex items-center justify-center font-sans text-foreground" translate="yes">
      <div ref={modalRef}  className=" overflow-hidden w-full md:w-1/4 outline-1 outline-muted bg-background rounded-xl  flex flex-col ">
        <div className="flex items-center gap-2 text-xl overflow-hidden border-b-1 border-muted  py-4 mb-4 px-4">
          <MdTerminal className="text-2xl " />
          <h1 className="">
            start a terminal session ?
          </h1>
        </div>
        <div className="text-sm  *:py-1 *:outline-1  *:outline-muted text-foreground *:rounded-md flex px-4 gap-x-2 w-full
         my-4  *:cursor-pointer *:hover:opacity-90">
          <button className="bg-foreground text-background outline-accent-foreground px-4" onClick={closeModal}>yes</button>
          <button className="px-2 whitespace-nowrap" onClick={() => window.location.replace("https://walidoumoulilte.vercel.app/")}>I don't know what a terminal is</button>
        </div>
        <div className="flex items-baseline text-xs gap-x-1 text-foreground/50 font-thin  mb-6">
          <span className="px-4">
            <span>
              <PiQuestionFill className="text-xs inline mr-1" />

            </span>clicking the second option will redirect you to a more friendly portfolio, I still encourage you to stay and explore this one
          </span>
        </div>
      </div>

    </div>
  )
}

export default Modal
