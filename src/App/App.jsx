import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { DataProvider } from "../store/DataContext";

import Header from "../components/Header/Header";
import Search from "../screens/Search/Search";
import { Profile } from "../screens/Profile/Profile";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Routes>
          <Route element={<Profile />} path="/profile/:characterName" />
          <Route exact element={<Search />} path="/" />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
