import React from "react";
import Nav from "../nav/Nav";
import Home from "../home/Home";
import DataGrid from "../datagrid/DataGrid";
import FormValidation from "../form-validation/FormValidation";
import AnnoyingButton from "../annoying-button/AnnoyingButton";
import PageNotFound from "../404/PageNotFound";
import Footer from "../footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <div>hello world.......</div>
      <Router>
        <div className="app">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mini-project1" element={<DataGrid />} />
            <Route path="/mini-project2" element={<FormValidation />} />
            <Route path="/mini-project3" element={<AnnoyingButton />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
