import { MdOutlineClose, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useRef, useState , useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LazyVideo from "./LazyVideo";

const ClosableModal = ({ videos, isOpen, onClose }) => {
    const [current, setCurrent] = useState(0);
    const containerRef = useRef(null);

    const OuterContainerRef = useRef(null)

    if (!isOpen) return null;

    const scrollToVideo = (idx) => {
        setCurrent(idx);
        const container = containerRef.current;
        const videoEl = container?.children[idx];
        if (videoEl) {
            container.scrollTo({
                left: videoEl.offsetLeft,
                behavior: "smooth",
            });
        }
    };

    const prevVideo = () => {
        const idx = current === 0 ? videos.length - 1 : current - 1;
        scrollToVideo(idx);
    };

    const nextVideo = () => {
        const idx = current === videos.length - 1 ? 0 : current + 1;
        scrollToVideo(idx);
    };

    const closeModal = ()=>{
        gsap.to(OuterContainerRef.current , {opacity:0 , scale:0 , duration:0.3 , ease:"power1.inOut" , onComplete:onClose})
    }

    useGSAP(()=>{
        if(OuterContainerRef.current){
            gsap.from(OuterContainerRef.current , {opacity:0 , scale:0 , duration:0.3 , ease:"power1.inOut"})
        }
    }, [])
    useEffect(() => {
        scrollToVideo(current);
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeModal();
            } else if (e.key === "ArrowLeft") {
                prevVideo();
            } else if (e.key === "ArrowRight") {
                nextVideo();
            }
        });
        return () => {
            window.removeEventListener("keydown", closeModal);
        }; 
    }, [isOpen]);

    return (
        <div ref={OuterContainerRef} className="[&_button]:cursor-pointer scale-100 opacity-100 fixed inset-0 z-50 flex items-center justify-center bg-background bg-opacity-80">
            <button
                className="absolute bottom-8 outline-2 outline-muted rounded-full p-2  right-6 text-destructive-foreground text-3xl z-10 hover:bg-destructive hover:outline-0 transition"
                onClick={closeModal}
                aria-label="Close"
            >
                <MdOutlineClose />
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
                <button
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-400 transition"
                    onClick={prevVideo}
                    aria-label="Previous"
                >
                    <MdArrowBackIos />
                </button>
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto scroll-smooth w-[100vw] h-[100vh]  items-center"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {videos.map((src, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-[100vw] h-[100vh] flex items-center justify-center"
                            style={{ scrollSnapAlign: "center" }}
                        >
                            <div className="h-fit lg:w-[60vw] w-screen   flex items-center justify-center rounded-2xl overflow-hidden bg-black">
                                <LazyVideo
                                    src={src}
                                    type="video/mp4"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        borderRadius: "1rem"
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-400 transition"
                    onClick={nextVideo}
                    aria-label="Next"
                >
                    <MdArrowForwardIos />
                </button>
                {/* Dots indicators */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center space-x-2">
                    {videos.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-3 h-3 rounded-full transition ${
                                idx === current ? "bg-foreground" : "bg-muted-foreground"
                            }`}
                            style={{ outline: "none", border: "none" }}
                            onClick={() => scrollToVideo(idx)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClosableModal;