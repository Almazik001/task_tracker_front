import { data } from "react-router"
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "../supaBaseConfig"

export async function supaSingUp(email, password) {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/signup`, 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                apikey: SUPABASE_ANON_KEY
            },
            body: JSON.stringify({email, password})
        }
    )

   if (!res.ok) throw new Error(await res.text()) 
    return await res.json()
}

export async function supaLogin(email, password) {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                apikey: SUPABASE_ANON_KEY
            },
            body: JSON.stringify({email, password})
        }
    )

    if (!res.ok) throw new Error(await res.text()) 

    const data = await res.json();
    localStorage.setItem('access_token', data.access.token)
    localStorage.setItem('refresh_token', data.refresh.token)
    localStorage.setItem('user' , JSON.stringify(data.user))
    return data;
}

 export function supaLogout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user')
    }

export function getStoredUser() {
    const raw = localStorage.getItem('user')
    return raw ? JSON.parse(raw) : null;
}

export function getToken() {
    return нариlocalStorage.getItem('access_token')
}