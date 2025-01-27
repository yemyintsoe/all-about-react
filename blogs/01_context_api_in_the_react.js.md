# Context API in the React.js
ဘယ် Project ပဲရေးရေး Data (သို့) State တွေကို  Manage လုပ်ရပါတယ်။ ဒီ Blog မှာ Data အစား State လို့ပဲ သုံးလိုက်ပါမယ်။ 

React Application ဆိုတာ Component base ဖြစ်ပါတယ်။ ဆိုတော့... State တွေဟာ Component တစ်ခုတည်းမှာပဲ ဖန်တီးတယ်၊ အဲ့ဒီမှာပဲ ပြန်သုံးတယ်ဆိုရင် ဘာမှမဖြစ်သေးပါဘူး။

တစ်ချို့ အခြေအနေမှာ Component တစ်ခုမှာ ဖန်တီးလိုက်တဲ့ State တစ်ခုတည်းကိုပဲ Project တစ်ခုလုံးရဲ့ Component တော်တော်များများမှာ အသုံးပြုရဖို့ လိုအပ်တတ်ပါတယ်။ ပုံမှန်ဆိုရင်တော့ Passing Prop ဆိုတဲ့ နည်းလမ်းကိုသုံးပါတယ်။

Passing Prop ဆိုတာ Component တစ်ခုကနေ နောက် Component တစ်ခုကို Pass လုပ်တာဖြစ်ပါတယ်။ ဒီနည်းလမ်းက State တစ်ခုကို Component တစ်ခု နစ်ခုလောက်မှာပဲ သုံးဖို့လိုနေတာ (သို့) Parent -> child Step တစ်ခုလောက်ပဲ ကွာနေတဲ့ အခြေအနေမှာ အဆင်ပြေပါတယ်။

State တစ်ခုကို Component အများကြီးမှာ သုံးဖို့လိုတယ် (သို့) Parent -> Child -> Child -> Child -> ... ဆိုပြီး Parent to child တွေကအများကြီး ကွာဟနေတယ်ဆိုရင် Passing Prop နည်းလမ်းနဲ့ လုံးဝအဆင်မပြေတော့ပါဘူး။ Step တွေများနတော့ Application ကနှေးသွားနိုင်တယ်၊ ပြုပြင်ရ ခက်ခဲသွားနိုင်တယ်။ ဒါကြောင့် Context API ကိုအသုံးပြုဖို့ လိုအပ်လာပါတယ်။

ကဲ... Why ကိုသိပြီဆိုတော့ How ကိုသွားကြရအောင် - 

Code Example ကို Modal Box - Show/Hide လုပ်တာနဲ့ ဖော်ပြပေးပါမယ်။

Component အစိတ်အပိုင်းနဲ့ အထားအသိုက ဒီလိုဖြစ်ပါမယ် - 
1. App.jsx - Main component
2. Modal.jsx - Child component
3. ModalCloseBtn.jsx - Nested child component


## Using Passing Prop (Before Context API)
Context API မသုံးဘဲ Passing Prop နည်းလမ်းနဲ့ ဆို Code တွေကဒီလိုဖြစ်ပါမယ်။

**1. App.jsx**
```jsx
import { useState } from "react";
import { Modal } from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
     <button onClick={openModal}> Open Modal </button>
     {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
}

export default App;
```
- Modal Show/Hide လုပ်ဖို့ isModalOpen ဆိုတဲ့ Boolean State တစ်ခုဖန်တီးလိုက်တယ်
- Model Show/Hide လုပ်ဖို့ openModal/closeModal ဆိုပြီး Function ၂ခု တည်ဆောက်ထားတယ် 
- Open Modal button နှိပ်လိုက်ရင် openModal ကို Invoke ပေးလိုက်တယ်
- Child component ဖြစ်တဲ့ Modal component ကို isModalOpen State ပေါ်မှာ မူတည်ပြီး Show/Hide လုပ်လိုက်တယ် အဲ့ Component မှာပဲ တစ်ခါတည်း closeModal ဆိုတဲ့ Function ကို Prop အနေနဲ့ Child Component တွေ ကနေ ယူသုံးလို့ရအောင် Pass လိုက်တယ်။

**2. Modal.jsx**
```jsx
import { ModalCloseBtn } from "./ModalCloseBtn";

export const Modal = ({ closeModal }) => {
  return (
        <div>
          <div>
            <h1>Modal title</h1>
            <p>This is a modal content</p>
          </div>
          <ModalCloseBtn closeModal={closeModal} />
        </div>
  );
};
```
- ဒီ Modal Component မှာက closeModal ဆိုတဲ့ Function ကိုမသုံးရပေမယ့် သူ့ ရဲ့ Child (App.jsx ရဲ့ Nested Child) ဖြစ်တဲ့ ModalCloseBtn.jsx ကနေ အသုံးပြုလို့ရအောင် လက်ခံပြီး ပြန် Pass ပေးရပါတယ်။


**3. ModalCloseBtn.jsx**
```jsx
export const ModalCloseBtn = ({ closeModal }) => {
  return (
     <button
        onClick={closeModal} >
        Close
      </button>
  );
};
```
- closeModal function (State) ကို လက်ခံတယ်၊ ပြီးရင် သုံးလိုက်တယ်။

ဒါကတော့ Passing Prop ကိုသုံးပြီး State တစ်ခုကို Step by step pass လုပ်လိုက်တာပါ။ App.jsx->Modal.jsx->ModalCloseBtn.jsx ဒီလိုမျိုး Step ၃ခုလောက်မလို့သာ သိပ်မသိသာတာ။ သုံးမယ့် နေရာအရမ်းများရင် မကောင်းတော့ပါဘူး။ 


## Using Context API (After Context API)
Context API  နဲ့ဆို Code တွေကဒီလိုဖြစ်ပါမယ်။
Context API နဲ့ State တွေကို Manage လုပ်ဖို့ Step ၃ခု ရှိပါမယ်။ 

1. Context: A React object that holds the shared data.
2. Provider: A component that supplies the context to its child components.
3. Consumer: A component (or hook) that consumes the context data.


**1. ModalContext.js**
```js
import { createContext } from "react";
export const ModalContext = createContext();
```
- createContext function သုံးပြီး Context ကိုဖန်တီးလိုက်ပါပြီ

**2. App.jsx**
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
- Code တွေအကုန်လုံးလိုလိုက Passing Prop တုန်းက ဖော်ပြခဲ့တာ Code တွေနဲ့ အတူတူပါပဲ။ 
- မတူတော့တာကတော့  <ModalContext.Provider value={{ closeModal }}></ModalContext.Provider>
- Component ကနေ တိုက်ရိုက် pass မလုပ်တော့ဘဲ ModalContext ကို import လုပ်ပြီး ModalContext.Provider နဲ့ closeModal function (State) ကို Pass ထားလိုက်ပါတယ်။
- ModalContext.Provider ကနေ Provide လိုက်တဲ့ State ကို သူ့ရဲ့ အောက်မှာ ရောက်နေတဲ့ (သို့) ရှိနေတဲ့ ဘယ် Component (Modal.jsx၊ ModalCloseBtn.jsx) မှာမဆို ယူသုံးလို့ရပါမယ်။

**3. Modal.jsx**
```jsx
import { ModalCloseBtn } from "./ModalCloseBtn";

export const Modal = () => {
  return (
    <div style={{ border: "1px solid gray", padding: "1rem" }}>
      <div>
        <h1>Modal title</h1>
        <p>This is a modal content</p>
      </div>
      <ModalCloseBtn />
    </div>
  );
};
```
- ဒီမှာက closeModal function (State) သုံးစရာမလိုတော့ ဘာမှကို ယူစရာမလိုနေဘူး။

**4. ModalCloseBtn.jsx**
```jsx
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export const ModalCloseBtn = () => {
  const { closeModal } = useContext(ModalContext);
  return <button onClick={closeModal}>Close</button>;
};
```
- ModalContext ကို import လိုက်တယ်၊  useContext ကိုသုံးပြီး closeModal ဆိုတဲ့ State ကို Consume (အသုံးပြု) လိုက်ပါတယ်။

ကဲ... ဒီလောက်ဆိုရင် Context API ကိုဘယ်လိုမျိုး အသုံးပြုမလဲဆိုတာ နားလည်ကြလောက်ပြီလို့ထင်ပါတယ်။ 







