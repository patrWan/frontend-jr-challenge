import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const Toast = ()=> {

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default Toast;