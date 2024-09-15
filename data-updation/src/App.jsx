import { Provider } from "react-redux";
import AddEmployee from "./components/AddEmployee";
import AllEmp from "./components/AllEmp";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import store from "./store/Store";
import UpdateEmpData from "./components/UpdateEmpData";
//import Homepage from "./components/Homepage";

// A utility component to protect routes
// const ProtectedRoute = ({ element }) => {
//   const isLoggedIn = localStorage.getItem("isLogIn") === 'true';
//   return isLoggedIn ? element : <Navigate to="/" />;
// };

function App() {
  // const isLogIn = localStorage.getItem("isLogIn") === 'true';
  

  return (
    <Provider store={store}>
      <Router>
        <NavBar/>
         
        <Routes>
           <Route
            path="/"
            element={<AllEmp/>}
          /> 
          <Route
            path="/emp-record"
            // element= {isLogIn? <ProtectedRoute element={<AllEmp />} /> :<ProtectedRoute element={<Homepage />}/>}
            element={<AllEmp/>}
          />
          <Route
            path="/addemp"
           // element={<ProtectedRoute element={<AddEmployee />} />}
           element={<AddEmployee/>}
          />
          <Route
            path="/update-record"
            //element={<ProtectedRoute element={<UpdateEmpData />} />}
            element={UpdateEmpData}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
