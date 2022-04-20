import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { DataProvider } from "../store/DataContext";

import Header from "../components/Header/Header";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
      </Router>
    </DataProvider>
  );
}

export default App;
