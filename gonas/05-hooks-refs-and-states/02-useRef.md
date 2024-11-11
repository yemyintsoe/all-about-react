# How Not to Select Element in React
```js
useEffect(() => {
  const el = document.querySelector('.input')
  el.focus()
}, [query])
```

If query is changed all the time, `.input` element will be called over and over. That is not the react way.
