// Passing Props by Parent Component
const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        imgSrc="pizzas/focaccia.jpg"
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price="10"
      />
      <Pizza
        imgSrc="pizzas/photo2.jpg"
        name="Pizza Expresso"
        ingredients="Potato, mozarella, ham, aragula, and burrata cheese"
        price="20"
      />
    </main>
  );
};

// Receiving Props from Child Component
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.imgSrc} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <p>{props.price}</p>
    </div>
  );
}
