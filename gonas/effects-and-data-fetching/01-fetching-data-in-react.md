# How NOT to fetch data in React

```js
const App = () => {
  ...
  fetch('https://test.com/api/posts')
  ...
}
```

If we fetch data directly inside the component, there will be infinite request in the network tab.

<br/>

# How to fetch data in React

```js
const App = () => {
  ...
  useEffect(() => {
    fetch('https://test.com/api/posts')
    ...
  }, [])
  ...
}
```

useEffect is a one of the react hook that only execute after component is monuted.
