import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CuisinePage from "./pages/CuisinePage";
import Details from "./pages/Details";
function App() {
  return (


<>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>     
          <Route path="/cuisine/:type" element={<CuisinePage/>}/>  
          <Route path="/cuisine/:id/info" element={<Details />}/>   
        </Routes>  
      </Router> 
    </>
   
  );
}

export default App;
