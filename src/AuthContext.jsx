import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("token", userData.token); // Simpan token ke localStorage
  };

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({
        token,
      });
    } else {
      setUser(null);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token"); // Hapus token dari localStorage
  };

  // Panggil checkLogin saat komponen dimuat
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, checkLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
