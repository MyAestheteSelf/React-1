import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'
import {Todos} from './MyComponents/Todos'
import {Footer} from './MyComponents/Footer'

function App() {
  const onDelete=(todo)=>{
    console.log("I am deleted",todo);
  }
  let todos=[
    {
      sno:1,
      title:"Go to the market",
      desc:"Go to the market to buy some goods for the house"
    },
    {
      sno:2,
      title:"Wash your clothes",
      desc:"Wash your clothes before they stink"
    },
    {
      sno:3,
      title:"Painting",
      desc:"Today is the last day of vacation so paint."
    }
  ]
  return (
    <>
    <Header title="ToDo"/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
