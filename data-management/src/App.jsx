import { Provider } from "react-redux";
import AddEmployee from "./components/addEmployee";
import AllEmp from "./components/AllEmp";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import store from "./store/Store";
import UpdateEmpData from "./components/UpdateEmpData";
import Homepage from "./components/Homepage";


const ProtectedRoute = ({ element, ...rest }) => {
  const isLoggedIn = window.localStorage.getItem("isLogIn");
  return isLoggedIn ? element : <Navigate to="/" />;
};
function App() {
  const isLoggedIn =window.localStorage.getItem("isLogIn")

  return (
    <>
    
      <Provider store={store}>
        
       
          <Router>
          
            
            <Routes>
            
              <Route path="/" element={!isLoggedIn ?<Homepage/>:<Navigate to={ "/emp-record"} />}/>
              <Route path="/emp-record" element={<AllEmp/>} />
              
              {/* <Route path="/allEmp" element={<AllEmp/>}/> */}
              <Route path="/addemp" element={<AddEmployee />} />
              
              <Route path="/update-record" element={<UpdateEmpData/>}/>
              
            </Routes>
          </Router>
        
      </Provider>
    </>
  );
}

export default App;


