import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./components/Header";
import cover from './assets/cover2.png'
import Home from "./pages/Home";
function App() {
  return (


<>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>     
        </Routes>  
      </Router> 
    </>
   
  );
}

export default App;
