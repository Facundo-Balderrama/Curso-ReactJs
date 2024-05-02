import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailListContainer from './components/ItemDetailListContainer'
import NavBar from './components/NavBar'
import Banners from './components/Banners'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from './components/Error404'

function App() {
  return (  
     <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />}/>
          <Route path={"/category:id"} element={<ItemListContainer />}/>
          <Route path={"/item:id"} element={<ItemDetailListContainer />}/>
          <Route path={"*"} element={<Error404 />}/>
        </Routes>
        <Banners />
        <Footer />
    </BrowserRouter>
  )
}

export default App;
