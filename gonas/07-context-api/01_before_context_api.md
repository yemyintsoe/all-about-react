# Before Context API
Before Context API, we need to pass prop from parents to child, step by step.
In this example, ```setIsModalOpen``` prop has to be passed from App.jsx->Modal.jsx->ModalCloseBtn.jsx

**1. App.jsx**
```jsx
import { useState } from "react";
import { Modal } from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
     <button onClick={() => setIsModalOpen(true)}> Open Modal </button>
     {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

export default App;
```

**2. Modal.jsx**
```jsx
import { ModalCloseBtn } from "./ModalCloseBtn";

export const Modal = ({ setIsModalOpen }) => {
  return (
        <div>
          <div>
            <h1>Modal title</h1>
            <p>This is a modal content</p>
          </div>
          <ModalCloseBtn setIsModalOpen={setIsModalOpen} />
        </div>
  );
};
```

**3. ModalCloseBtn.jsx**
```jsx
export const ModalCloseBtn = ({ setIsModalOpen }) => {
  return (
     <button
        onClick={() => setIsModalOpen(false)} >
        Close
      </button>
  );
};
```
