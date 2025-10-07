import ClosableModal from "./ClosableModal";
import { useState } from "react";

const ConceptsModal = ({lang}) => {
  const videosrcs = [
    "/3d_product_concept.mp4",
    "/fluid_sim.mp4",
    "/img_gallery_1.mp4",
    "/img_gallery_2.mp4",
  ];
  const [isModal, setModal] = useState(true);
  return (
    <>
      {isModal && (
        <ClosableModal
          isOpen={isModal}
          onClose={() => setModal(false)}
          videos={videosrcs}
          lang={lang}
        />
      )}
      {!isModal && lang === "en" && <p>need a project similar to this ?<br/> lets talk  (type <span className="text-muted-foreground bg-indigo-950 rounded-md px-2">links</span>) </p>}
      {!isModal && lang === "fr" && <p>besoin d'un projet similaire ?<br/> parlons-en (tapez <span className="text-muted-foreground bg-indigo-950 rounded-md px-2">links</span>) </p>}
    </>
  );
};

export default ConceptsModal;
