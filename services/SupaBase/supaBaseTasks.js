import { SUPABASE_ANON_KEY, SUPABASE_URL } from "../supaBaseConfig"

export function getToken() {
    return localStorage.getItem('access_token')
}

export async function getTasks() {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/tasks?select=*`, {
        headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${getToken}`
        },
    });

    if (!res.ok) throw new Error(await res.text())
    return await res.json();
}

export async function createTask(task) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/tasks`, {
        method: 'POST',
        headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
        prefer: 'return=representation'
    },
    body: JSON.stringify(task),
    });
    if (!res.ok) throw new Error(await res.text())
    const rows = await res.json();
    return rows[0];
}