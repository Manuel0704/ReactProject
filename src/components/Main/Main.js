import {Routes, Route} from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Purchase from '../Purchase/Purchase';

const Main = () =>
{
    return (
        <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Lista de Productos"/>}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting="Filtrado"/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
          <Route path="/cart" element={<Purchase/>}></Route>
        </Routes>
      </main>
    )
}

export default Main