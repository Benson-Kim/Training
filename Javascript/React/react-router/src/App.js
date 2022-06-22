import {Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout';
import NoMatch from './Components/NoMatch';
import SneakerGrid from './Components/SneakerGrid';
import SneakerView from './Components/SneakerView';
import {brands,filterByBrand,getSneakerById,SNEAKERS} from './data'
  
function App() {
  return (
    <div>
      <h1>Custom Filter</h1>
      <Routes>
        <Route path='/' element={<Layout brands={brands} />}>
          <Route path='*' element={<NoMatch />} />
          <Route index element={<SneakerGrid SNEAKERS={SNEAKERS} filterByBrand={filterByBrand} />} />
          <Route path='sneakers/:brand/productid=:id' element={<SneakerView getSneakerById={getSneakerById} />} />
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
