import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Results from "./pages/Results.jsx";

// DATA API: https://www.omdbapi.com/?i=tt3896198&apikey=f54b9d83
// POSTER API: http://img.omdbapi.com/?i=tt3896198&apikey=f54b9d83
const movieAPI = `https://www.omdbapi.com/?i=tt3896198&apikey=f54b9d83`;

function App() {  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/results" exact element={<Results/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
