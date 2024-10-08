// ===== CREATING REACT COMPONENT =====
function App() {
  return <h1>Hello World</h1>;
}

// ===== CREATING AND REUSING A COMPONENT =====
function App() {
  return (
    <div>
      <h1>React App</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" />
      <h4>Pizza Prosciutto</h4>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    </div>
  );
}
