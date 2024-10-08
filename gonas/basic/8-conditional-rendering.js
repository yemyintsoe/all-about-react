// &&
const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
};

// Ternaries
const Menu2 = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>No Data Found!</p>
      )}
    </main>
  );
};

// Multiple Return
const Menu3 = () => {
  if (pizzaData.length <= 0) return <p>No Data Found</p>;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizza={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
};
