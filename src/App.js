import React from "react";
import Controller from "./components/preview/Controller";

/* css plugins */

import './components/preview/assest/css/style.css';

import './components/preview/assest/css/responsive.css';

import './components/preview/assest/css/plugins/bootstrap.min.css';

import './components/preview/assest/fonts/font-awesome.min.css';

import './components/preview/assest/fonts/bs-icons/bootstrap-icons.css';

import './components/preview/assest/css/plugins/slick.css';

import './components/preview/assest/css/plugins/nice-select.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



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
