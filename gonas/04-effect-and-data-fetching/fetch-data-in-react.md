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

<br/>

# Fetch data with async and await
```js
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    getPosts();
  }, []);
```
```async``` and ```await``` can't be use with ```useEffect``` directly, so that have to use seperate function
