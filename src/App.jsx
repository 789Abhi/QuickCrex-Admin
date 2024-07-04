import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { auth } from "./firebase";

import Header from "./components/Header";
import HomeBody from "./components/HomeBody";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AdminArea from "./Admin Component/AdminArea";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false); // Set loading to false once authentication state is checked
    });

    return () => unsubscribe();
  }, []);

  // Show loading indicator or splash screen while checking authentication state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomeBody />} />
        <Route
          path="/signin"
          element={user ? <Navigate to="/admin" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/admin" /> : <SignUp />}
        />
        <Route
          path="/admin"
          element={user ? <AdminArea /> : <Navigate to="/signin" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
