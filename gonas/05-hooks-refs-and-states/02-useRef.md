# How Not to Select Element in React
```js
const SearchForm = () => {
  const [query, setQuery] = useState("")

  useEffect(() => {
    const el = document.querySelector('.input')
    el.focus()
  }, [query])

  return (
  <input value={query} onChange="e => setQuery(e.target.value)" class="input">
  )
}
```

If query is changed all the time, `.input` element will be called over and over. That is not the react way.


# How to Select Element in React
```js
const SearchForm = () => {
  const [query, setQuery] = useState("")
  const inputEl = useRef(null)

  useEffect(() => {
    inputEl.current.focus()
  }, [query])

  return (
  <input value={query} onChange="e => setQuery(e.target.value)" ref={inputEl}>
  )
}
```
