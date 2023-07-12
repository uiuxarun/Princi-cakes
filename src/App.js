import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Hero from './container/hero/Hero';
import PageNotFound from './container/pageNotFound/PageNotFound';
import { app } from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AppContext from './utils/context.js';
import Category from './container/categories_desc/Category';
import SingleProduct from './container/SingleProduct/SingleProduct';
import SignUp from './container/logIn/SignUp';
import Login from './container/logIn/Login';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); 
  }, []);

  if (loading) {
    // Show a loading indicator while checking the authentication status
    return <div>Loading...</div>;
  }

  if (user === null) {
    return (
      <Router>
        <div className="App">
          <Routes>
             <Route path="/" element={<Login />}/>
             <Route path="/Signup" element={<SignUp />}/>
             <Route path="*" element={<PageNotFound />} />    
          </Routes>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <AppContext>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />}/>
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </AppContext>
    </Router>
  );
}

export default App;

