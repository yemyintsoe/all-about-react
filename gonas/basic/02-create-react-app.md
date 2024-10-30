React App can be created or installed using ```create-react-app```


# INSTALLATION
```
$ npx create-react-app simple-app
```

If ```create-react-app`` does not work, just create "npm" folder in this folder

```
C:\Users\AsRock\AppData\Roaming\
```

# FIRST index.js in React App 18
```js
// index.js
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>React App</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
