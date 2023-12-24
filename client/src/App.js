import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Suppliers from './pages/Suppliers';
import SupplierDetails from './pages/SupplierDetails';
import Transactions from './pages/Transactions';
import Log from './pages/Log';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addprod" element={<Products/>}/>
          <Route path='/addsup' element = {<Suppliers/>}/>
          <Route path = '/data' element = {<SupplierDetails/>}/>
          <Route path = '/trdata' element = {<Transactions/>}/>
          <Route path='/log' element = {<Log/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
