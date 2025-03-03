function Pizza({ pizza }) {
  return (
    <div className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </div>
  );
}


/*
// Class
className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}

// Text
 <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
*/
