# Before Context API
Before Context API, we need to pass prop from parents to child, step by step.
In this example, ```setIsModalOpen``` prop has to be passed from App.jsx->Modal.jsx->ModalCloseBtn.jsx
**App.jsx**
```jsx
import { useState } from "react";
import { Modal } from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="container mx-auto p-5">
        <div className="mb-5">
          <p>This is CONTEXT API app</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-2 bg-emerald-300 hover:bg-emerald-400 rounded-lg"
        >
          Open Modal
        </button>
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </div>
    </>
  );
}

export default App;
```

**Modal.jsx**
```jsx
import { ModalCloseBtn } from "./ModalCloseBtn";

export const Modal = ({ setIsModalOpen }) => {
  return (
    <div>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50"></div>
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-white p-5 rounded-lg shadow-lg w-96">
          <div className="mb-5">
            <h1 className="text-xl font-bold">Modal</h1>
            <p>This is a modal</p>
          </div>
          <ModalCloseBtn setIsModalOpen={setIsModalOpen} />
        </div>
      </div>
    </div>
  );
};
```

**ModalCloseBtn.jsx**
```jsx
export const ModalCloseBtn = ({ setIsModalOpen }) => {
  return (
    <div>
      <button
        onClick={() => setIsModalOpen(false)}
        className="p-2 bg-rose-300 rounded-lg"
      >
        Close
      </button>
    </div>
  );
};
```
