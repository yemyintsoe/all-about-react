// React Fragment
/*
Multiple elements cannot be placed, so that we have to use React Fragment
*/

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 ? (
        <React.Fragment>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rerum in
            asperiores animi quam laboriosam dolorum unde porro numquam
            deleniti, dolores sunt iusto quasi odio voluptate vel totam hic.
            Perferendis!
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>No Data Found</p>
      )}
    </main>
  );
};

// Syntax
<React.Fragment> ... <React.Fragment>

// or

<> ... </>


// Sidenote - We have to use <React.Fragment> if we have to use some statement in it like key=""
