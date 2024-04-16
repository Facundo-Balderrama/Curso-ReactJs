import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (  
    <>  
        <NavBar />
        <ItemListContainer mensaje={<b>¡Nuevo drop de Invierno!</b>} />
    </>
  )
}

export default App
