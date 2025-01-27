**1. App.jsx**
```jsx
import { useState } from "react";
import { Modal } from "./components/Modal";
import { ModalContext } from "./contexts/ModalContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ closeModal }}>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <Modal />}
    </ModalContext.Provider>
  );
}

export default App;
```

**2. Modal.jsx**
```jsx
import { useState } from "react";
import { Modal } from "./components/Modal";
import { ModalContext } from "./contexts/ModalContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ closeModal }}>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <Modal />}
    </ModalContext.Provider>
  );
}

export default App;
```

**3. ModalCloseBtn**
```jsx
import { useState } from "react";
import { Modal } from "./components/Modal";
import { ModalContext } from "./contexts/ModalContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ closeModal }}>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <Modal />}
    </ModalContext.Provider>
  );
}

export default App;
```
