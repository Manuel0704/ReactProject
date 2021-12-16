import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import { BrowserRouter} from 'react-router-dom';

function App()
{
  return (
    <BrowserRouter>
      <NavBar/>
      <Main/>
    </BrowserRouter>);
}

export default App;