import React from 'react';
import './App.css';
import CarList from './components/CarList';
import Register from './components/Register';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Create from './components/Create';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CarList />} />
        <Route path="create" element={<Create />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
