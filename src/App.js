import { BrowserRouter as Router , Routes , Route} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import CuisinePage from "./pages/CuisinePage";
import Details from "./pages/Details";
import {AnimatePresence} from 'framer-motion'

function App() {


  return (


  <AnimatePresence exitBeforeEnter  >
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>     
          <Route path="/cuisine/:type" element={<CuisinePage/>}/>  
          <Route path="/cuisine/:id/info" element={<Details />}/>   
        </Routes>  
      </Router> 
    </AnimatePresence>
   
  );
}

export default App;
