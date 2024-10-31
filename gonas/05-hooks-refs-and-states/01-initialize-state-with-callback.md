# Don't do like this
```js
const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")))
```

# Do this
```js
const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("items")))
```
