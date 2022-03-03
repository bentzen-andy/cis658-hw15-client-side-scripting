import React from "react";
import Nav from "../UI/Nav";
import Home from "../home/Home";
import DataGrid from "../datagrid/DataGrid";
import FormValidation from "../form-validation/FormValidation";
import AnnoyingButton from "../annoying-button/AnnoyingButton";
import PageNotFound from "../404/PageNotFound";
import Footer from "../UI/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import css from "./App.module.css";

const App = () => {
  return (
    <Router>
      <div className={css["app"]}>
        <header id="top">
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mini-project1" element={<DataGrid />} />
            <Route path="/mini-project2" element={<FormValidation />} />
            <Route path="/mini-project3" element={<AnnoyingButton />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
