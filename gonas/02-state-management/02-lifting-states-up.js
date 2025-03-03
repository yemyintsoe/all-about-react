/*
# This title also known as "Sharing State Between Components" in official doc

Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do writing React code.

# This is the complete code example for lifting states up
App.js
*/

import { useState } from "react";

const App = () => {
  // Packages
  const [packages, setPackages] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: true },
  ]);
  // Create package
  const handleAddPackage = (newPackage) => {
    setPackages((packages) => [...packages, newPackage]);
  };
  // Delete package
  const handleDeletePackage = (id) => {
    setPackages((packages) => packages.filter((p) => p.id != id));
  };
  // Check package
  const handleCheckPackage = (id) => {
    setPackages((packages) =>
      packages.map((pkg) => {
        return pkg.id === id ? { ...pkg, packed: !pkg.packed } : pkg;
      })
    );
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddPackage={handleAddPackage} />
      <PackageList
        packages={packages}
        onDeletePackage={handleDeletePackage}
        onCheckPackage={handleCheckPackage}
      />
      <Stats />
    </div>
  );
};

const Logo = () => {
  return <h1>🌴Far Away 🎂 </h1>;
};

const Form = ({ onAddPackage }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPackage = {
      id: Math.floor(Math.random() * 1000),
      description,
      quantity,
      packed: false,
    };

    onAddPackage(newPackage);

    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

const PackageList = ({ packages, onDeletePackage, onCheckPackage }) => {
  return (
    <div className="list">
      <ul>
        {packages.map((item) => (
          <Item
            item={item}
            onDeletePackage={onDeletePackage}
            onCheckPackage={onCheckPackage}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item, onDeletePackage, onCheckPackage }) => {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => onCheckPackage(item.id)}
        value={item.packed}
        checked={item.packed ? "checked" : ""}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeletePackage(item.id)}>❌</button>
    </li>
  );
};

const Stats = () => {
  return (
    <footer className="stats">
      <em>You have x items on your list, and you already packed x (x%)</em>
    </footer>
  );
};

export default App;

/*
In this example, all data and functions are placed in the nearest parent to be able to access from childs and grandsons. But there is something to remember that in the Form() component, "description" and "quantity" are just declear in its own component instead of Parent component because those variable are not required to access from any siblings and any other components  
*/
