import ClosableModal from "./ClosableModal";
import { useState } from "react";

const ConceptsModal = () => {
  const videosrcs = [
    "/3d_product_concept.mp4",
    "/fluid_sim.mp4",
    "/img_gallery_1.mp4",
    "/img_gallery_2.mp4",
  ];
  const [isModal, setModal] = useState(true);
  return (
    <div className="">
      {isModal && (
        <ClosableModal
          isOpen={isModal}
          onClose={() => setModal(false)}
          videos={videosrcs}
        />
      )}
    </div>
  );
};

export default ConceptsModal;
