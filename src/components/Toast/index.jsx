import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const Toast = ()=> {

  return (
    <div>
      <ToastContainer autoClose={2000}/>
    </div>
  );
}

export default Toast;