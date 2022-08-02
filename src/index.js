import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
// <h1>
//   is is a timer : {new Date().toLocaleTimeString()}
// </h1>
// );
const tick = ()=>{
  let element = 
    <div>
      <h1>
        it is a timer : 
      </h1>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
  root.render(element);
};

setInterval(()=>{
  tick();
},1000);