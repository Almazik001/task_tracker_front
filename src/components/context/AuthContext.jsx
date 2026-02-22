import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getStoredUser, supaLogin, supaLogout, supaSingUp, getToken } from "../../services/SupaBase/supaBaseAuth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser());
  const [isAuth, setIsAuth] = useState(!!getToken());

  useEffect(() => {
    // при перезагрузке страницы
    setIsAuth(!!getToken());
    setUser(getStoredUser());
  }, []);

  const value = useMemo(() => ({
    user,
    isAuth,
    async signup(email, password) {
      await supaSingUp(email, password);
      // часто нужно подтвердить email → поэтому НЕ ставим isAuth=true тут
      return true;
    },
    async login(email, password) {
      const data = await supaLogin(email, password);
      setUser(data.user);
      setIsAuth(true);
      return data;
    },
    logout() {
      supaLogout();
      setUser(null);
      setIsAuth(false);
    },
  }), [user, isAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
