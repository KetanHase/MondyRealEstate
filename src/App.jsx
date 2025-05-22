 import React from "react";
 import { HashRouter  as Router,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SearchResult from "./Pages/SearchResult";
import SingleProperty from "./Pages/SingleProperty";
import News from "./Pages/News";
import Contact from "./Pages/Contact";

function App() {
  return (
     <>
    <Router>
      <Routes>


        <Route path='/' element={<Home />} />  
        <Route path='/about' element={<About />} />  
        <Route path='/searchresult' element={<SearchResult />} />
        <Route path='/singleproperty' element={<SingleProperty />} />
        <Route path='/news' element={<News />} />
         <Route path='/contact' element={<Contact />} />

      </Routes>
    </Router>
     </>
  );
}

export default App;
