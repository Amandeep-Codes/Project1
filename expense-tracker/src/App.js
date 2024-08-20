
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import Income from './components/Income';

function App() {
  return (
   <>
   <Header/>
   <div className="container">
    <Balance/>
    <Income/>
   </div>
   </>
  );
}

export default App;
