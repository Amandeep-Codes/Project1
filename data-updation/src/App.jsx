import AddEmployee from './components/addEmployee';
import NavBar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as  Router,Routes,Route} from "react-router-dom"

function App() {
  

  return (
    <>
    
    <div className='App'>
    <Router>
    
    
    
    <Routes>
      <Route  path='/' element={<NavBar/>} />
      <Route path ="/addemp" exact  element = {<AddEmployee/>}  />

      
      </Routes> 
      </Router>
 
    </div>
    


    </>
  )
}

export default App
