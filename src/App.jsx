import './App.css'
import Title from './Title.jsx'
import Product from './Product.jsx';
import MesgBox from './MesgBox.jsx';
import Card from './card.jsx';
import Button from './Button.jsx';
import Form from './Form.jsx';
import Likes from './Likes.jsx';
import Ticket from './Ticket.jsx';
import TicketNum from './TicketNum.jsx';
import Lottery from './Lottery.jsx';

function App(){
  return (
    <>
    {/* <h1>Blockbuster Deals | Shops Now</h1>
    <div className='Cards'>
      <Card idx={0}/>
      <Card idx={1}/>
      <Card idx={2}/>
      <Card idx={3}/>
      <Form/>
    </div> */}
      <Lottery n={3} winningSum={15}></Lottery>
    </>
  )
}



export default App
