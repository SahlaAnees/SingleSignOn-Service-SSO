import Home from './components/Home';
import Login from "./components/Login";
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useEffect, useState } from 'react';

const App = () =>{
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <BrowserRouter user={user}>
      <div className="App">
      <Home user={user} />
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login /> } />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
