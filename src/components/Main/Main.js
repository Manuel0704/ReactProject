import {Routes, Route} from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Main = () =>
{
    return (
        <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Lista de Productos"/>}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting="Filtrado"/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        </Routes>
      </main>
    )
}

export default Main