// App.js
const App = () => {
  return (
    <div style={{ color: "red", fontSize: "48px" }}>
      <h1>Hello App</h1>
      <p>lorem ...</p>
    </div>
  );
};

// OR - Using External CSS
import "./app.css";
const App2 = () => {
  return (
    <div className="container">
      <h1>Hello App</h1>
      <p>lorem ...</p>
    </div>
  );
};
