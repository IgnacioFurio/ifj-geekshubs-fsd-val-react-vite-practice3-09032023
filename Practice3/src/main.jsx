import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Counter } from './01-counter/Counter';
import { UserForm } from './02-form/UserForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <UserForm/>
    </>
  </React.StrictMode>,
)
