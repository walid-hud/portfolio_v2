import { useState } from "react"
import Modal from "./Modal"
import Terminal from "./Terminal"

const App = () => {
  const [modal, setModal] = useState(true)
  return (
    <main className="w-screen bg-black h-screen text-foreground font-mono overflow-x-hidden overscroll-none">
      <Modal setModalVisible={setModal}/>
      {!modal && <Terminal />}
    </main>
  )
}

export default App
