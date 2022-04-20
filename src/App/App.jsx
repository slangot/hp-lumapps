import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { DataProvider } from "../store/DataContext";

import Header from "../components/Header/Header";
import Search from "../screens/Search/Search";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact element={<Search />} path="/" />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
