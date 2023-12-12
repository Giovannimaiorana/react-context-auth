import { useState } from "react";
import TheHeader from "./components/TheHeader";
import TheForm from "./components/TheForm";
import AppList from "./pages/AppList";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AppSinglePost from "./pages/AppSinglePost";

function App() {
  return (
    <BrowserRouter>
      <TheHeader />
      <Routes>
        <Route>
          <Route path="/" element={<AppList />} />
          <Route path="/form" element={<TheForm />} />x
          <Route path="/post/:slug" element={<AppSinglePost />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
