const GroceryList = () => (
  <div>
  <GroceryListItem grocery={['eggs', 'milk', 'butter']}/>
  </div>
)

// const Eggs = () => (
//   <ul>
//     <li>eggs</li>
//   </ul>

// )

// const Milk = () => (
//   <ul>
//     <li>milk</li>
//   </ul>
// )

// const GroceryListItem = (props) => (
//   <ul>
//     <li>{props.grocery[0]}</li>
//     <li>{props.grocery[1]}</li>
//     <li>{props.grocery[2]}</li>
//   </ul>
// )
const { useState } = React;

const GroceryListItems = (props) => {
  <li>{props.grocery}</li>
  const[isDone, setIsDone] = useState(false);


  const style = {
    fontWeight: isDone ? 'bold' : 'none'
  };

  return  (
    <li style={style} onMouseEnter={() => setIsDone(!isDone)}>
      {props.grocery}
    </li>


  );
}
const GroceryListItem = (props) => (
  <ul>
     {props.grocery.map((item) => (
    <GroceryListItems grocery={item} />
  ))}
  </ul>
)

ReactDOM.render(<GroceryList />, document.getElementById("app"))
