import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    // هنا المفروض تعمل request للـ API الحقيقي
    // مثال:
    // const res = await axios.post("/api/login", { email, password });
    // setToken(res.data.token);
    // setUser(res.data.user);

    // مؤقت للتجربة:
    const fakeToken = "jwt_example_token";
    setToken(fakeToken);
    setUser({ email });
  };

  const signup = async (name, email, password) => {
    // نفس الفكرة، هنا المفروض API حقيقي
    const fakeToken = "jwt_example_token";
    setToken(fakeToken);
    setUser({ name, email });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
