/*
===== WHAT IS JSX =====

Before this, let's talk about -
# WHAT IS A COMPONENT?
Component is a pieace of User Interface that contains
1. Data
2. Logic
3. Appearence

# For this JSX comes in handy - 
- JSX is a declarative syntax to describe what components look like and how they work.
- Each component must return a block of JSX 
- Extension of JavaScript that allows us to embed 'Html', 'CSS', 'JavaScript' and 'React Component'
- Each JSX is converted to React.createElement to function call
*/

// Eg.1
<div>
  <h1 style={{ color: "red" }}>Hello World</h1>
</div>;
// is converted to this
React.createElement(
  "div",
  null,
  React.createElement("h1", { style: { color: red } }, "Hello World")
);
