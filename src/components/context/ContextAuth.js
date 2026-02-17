import { createContext, useEffect, useMemo, useState } from "react";
import {getStoredUser, getToken} from "../../../services/SupaBase/supaBaseAuth"

const AuthContext = createContext(null);


export function AuthProvider({children}) {
    const [user, setUser] = useState(getStoredUser())
    const [isAuth, setIsAuth] = useState(!!getToken())

    useEffect(() => {
        setIsAuth(!!getToken())
        setUser(getStoredUser())
    }, []);

    const value = useMemo(() => {
        
    })

}