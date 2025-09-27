import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useRef, useContext } from "react";
import { MdLanguage } from "react-icons/md";
import { LanguageContext } from "./LanguageContext";

const Modal = ({ setModalVisible }) => {
  const modalRef = useRef(null);
  const { lang, setLang } = useContext(LanguageContext);

  const [showModal, setShowModal] = useState(true);
  const [selectedLang, setSelectedLang] = useState(lang);

  // Animate in on mount
  useGSAP(() => {
    if (modalRef.current) {
      gsap.from(modalRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "expo.inOut",
        delay: 0.1,
      });
    }
  });

  // Animate out and close modal
  const closeModal = () => {
    gsap.to(modalRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "expo.inOut",
      onComplete: () => {
        setShowModal(false);
        setModalVisible(false);
      },
    });
  };

  const handleConfirm = () => {
    if (lang !== selectedLang) {
      setLang(selectedLang);
    }
    closeModal();
  };

  return (
    showModal && (
      <div className="fixed inset-0 z-10 flex items-center justify-center backdrop-brightness-0 font-sans text-foreground">
        <div
          ref={modalRef}
          className="w-full md:w-1/4 bg-background rounded-xl overflow-hidden flex flex-col outline-1 outline-accent"
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b border-accent py-4 px-4">
            <div>
              <h1 className="text-md font-medium">Choose language</h1>
              <p className="text-sm text-muted-foreground">
                Choisissez la langue
              </p>
            </div>
            <MdLanguage className="text-2xl" />
          </div>

          {/* Language Selection */}
          <div className="flex gap-4 px-4 py-4">
            <div
              className="w-18 h-12 bg-cover rounded-md relative cursor-pointer bg-[url('/flag_fr.png')]"
              onClick={() => setSelectedLang("fr")}
            >
              <input
                type="radio"
                checked={selectedLang === "fr"}
                onChange={() => setSelectedLang("fr")}
                className="absolute top-1 right-1 size-4 rounded-full"
              />
            </div>

            <div
              className="w-18 h-12 bg-cover rounded-md relative cursor-pointer bg-[url('/flag_en.png')]"
              onClick={() => setSelectedLang("en")}
            >
              <input
                type="radio"
                checked={selectedLang === "en"}
                onChange={() => setSelectedLang("en")}
                className="absolute top-1 right-1 size-4 rounded-full"
              />
            </div>
          </div>

          {/* Confirm Button */}
          <div className="flex justify-end px-4 pb-4">
            <button
              onClick={handleConfirm}
              className="bg-background text-foreground px-4 py-2 rounded-md  cursor-pointer hover:opacity-60 transition-all duration-200 ease-in-out outline-1 outline-accent"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
