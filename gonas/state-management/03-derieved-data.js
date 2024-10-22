/* Don't do like this */
const [items, setItems] = useState([
  {id:1, name: "item 1", price: 1000},
  {id:2, name: "item 2", price: 2000},
])
const [totalItem, setTotalItem] = useState(2)
const [totalPrice, setTotalPrice] = useState(3000)

/* Do like this */
const [items, setItems] = useState([
  { id: 1, name: "item 1", price: 1000 },
  { id: 2, name: "item 2", price: 2000 },
]);
const totalItem = items.length;
const totalPrice = items.reduce((acc, current) => acc + current.price, 0);
