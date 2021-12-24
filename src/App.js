import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import CartContext from './components/CartContext/CartContext';
import { BrowserRouter} from 'react-router-dom';

function App()
{
  return (
    <BrowserRouter>
      <CartContext>
        <NavBar/>
        <Main/>
      </CartContext>
    </BrowserRouter>);
}

export default App;