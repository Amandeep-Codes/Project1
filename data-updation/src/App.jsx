import { Provider } from "react-redux";
import AddEmployee from "./components/addEmployee";
import AllEmp from "./components/AllEmp";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        
       
          <Router>
          <NavBar />
            
            <Routes>
            
              <Route path="/" element={<AllEmp />} />
              <Route path="/addemp" element={<AddEmployee />} />
              <Route path="/emp-record" element={<AllEmp/>} />
              
            </Routes>
          </Router>
        
      </Provider>
    </>
  );
}

export default App;
