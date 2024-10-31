# Don't do like this
```js
const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")))
```

# Do this
```js
const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("items")))
```

Sidenote -

Call back function must be pure and accept "no argument". It will be called only on initial rendar.
