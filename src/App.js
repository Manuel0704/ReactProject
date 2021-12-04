import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
function App()
{
  return (
    <>
      <NavBar/>
      <main>
        <ItemListContainer greeting="Lista de Productos"/>
      </main>
    </>);
}

export default App;
