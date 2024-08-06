import React from "react";
import Controller from "./components/preview/Controller";

/* css plugins */
// import "./components/preview/assets/css/style.css";
import './components/preview/assest/css/style.css';
// import "./components/preview/asset/css/responsive.css";
import './components/preview/assest/css/responsive.css';
// import "./components/preview/asset/css/plugins/bootstrap.min.css";
import './components/preview/assest/css/plugins/bootstrap.min.css';
// import "./components/preview/asset/fonts/font-awesome.min.css";
import './components/preview/assest/fonts/font-awesome.min.css';
// import "./components/preview/asset/fonts/bs-icons/bootstrap-icons.css";
import './components/preview/assest/fonts/bs-icons/bootstrap-icons.css';
// import "./components/preview/asset/css/plugins/slick.css";
import './components/preview/assest/css/plugins/slick.css';
// import "./components/preview/asset/css/plugins/nice-select.css";
import './components/preview/assest/css/plugins/nice-select.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <Controller />
      <Toaster />
    </>
  );
}

export default App;
