# Installation
```
npm install react-router
```

# Setup basic route
**App.jsx**
```js
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="container mx-auto mb-5 px-12 py-3">
          <ul className="flex gap-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```

## Sidenote
- Link, NavLink will not work outside of the BrowserRouter, so that it's required to be wrapped by BrowserRouter
- Use NavLink instead of Link if you want automatic 'active' class at the link when it's visited

# Nested Route
**App.jsx**
```js
<BrowserRouter>
  ....
  <Routes>
    ...
    <Route path="contact" element={<Contact />} />
    <Route path="course" element={<Course />}>
      <Route index element={<Description />} />
      <Route path="content" element={<Content />} />
      <Route path="review" element={<Review />} />
    </Route>
  </Routes>
</BrowserRouter>
```

**Course.jsx**
```jsx
import React from "react";
import { Outlet } from "react-router";

export const Course = () => {
  return (
    <div className="container mx-auto px-12">
      ...
      <Outlet />
    </div>
  );
};
```

## Sidenote
Outlet works for nested routes components (Just like vue.js slot)


# Dynamic Route with URL Parameters
## Route
```js
<Route path="courses" element={<Courses />} />
<Route path="courses/:id" element={<Course />} />
```

## Link
```html
<Link to={`/courses/${id}`}>Go to course</Link>
```

## In the Component
```jsx
import {useParams} from "react-router-dom"

const Course = () => {
  const {id} = useParams()
}
```
## Sidenote
- if ```:id```, must be ```const {id} = useParams()```
- if ```:course```, must be ```const {course} = useParams()```
