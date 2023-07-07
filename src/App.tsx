import ListGroup from "./components/ListGroup";
function App() {
  let items = [
    'Cheese',
    'Quasso',
    'meat',
    'ello'
] 

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div><ListGroup items={items} heading="List" onSelectItem={handleSelectItem}/></div>
}
export default App;