import { useState } from "react";
import Modal from "./Modal";
import Terminal from "./Terminal";
import { LanguageProvider } from "./LanguageContext";

const App = () => {
  const [modal, setModal] = useState(true);
  return (
    <main className="w-screen  h-screen text-foreground text-xl font-mono overflow-x-hidden overscroll-none">
      <LanguageProvider>
        <Modal setModalVisible={setModal} />
        {!modal && <Terminal />}
      </LanguageProvider>
    </main>
  );
};

export default App;
