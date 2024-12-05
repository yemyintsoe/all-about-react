# CSS Modules
```css
// components/Navbar.module.css
.nav { ... }
.nav ul { ... }
```
This are for local use. For global use just use css file just we did early. or we can do like the following
```css
:global(.nav) { ... }
```

```html
// pages/Navbar.jsx
import styles from './components/Navbar.module.css'

<nav className={styles.nav}> ... </nav>
```

# Description
Every class is unique even the same class name is exist in another css modules file.

# Ref
https://medium.com/@gopi07it/css-modules-in-react-7f86b2e822ef
