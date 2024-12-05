# CSS Modules
```
// components/Navbar.module.css
.nav { ... }
.nav ul { ... }

// pages/Navbar.jsx
import styles from './components/Navbar.module.css'

<nav className={styles.nav}> ... </nav>
```

# Description
Every class is unique even the same class name is exist in another css modules file.

# Ref
https://medium.com/@gopi07it/css-modules-in-react-7f86b2e822ef
