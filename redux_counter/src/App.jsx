import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { counter } = useSelector((store) => store); //DeStructring "counter" from store's initial
  //console.log(store, "===store");
  
  const functionCounter = (value) =>{
    dispatch({
      type:'increment',
      payload:value,
    });
  };
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Counter: {counter}</h1>
      <button onClick={() => functionCounter(counter + 1)}>Increase</button>
      <button onClick={() => functionCounter(counter - 1)}>Decrease</button>
    </div>
  );
}

export default App;
