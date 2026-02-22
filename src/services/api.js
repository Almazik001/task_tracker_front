export const API = "http://localhost:3001/tasks"

async function handleResponse(res) {
    
    if (!res.ok) {
        const message = await res.text().catch(() => "")
        throw new Error(`HTTP ${res.status}: ${message || res.statusText}`);
    }

    if (res.status === 204) return null;

    const text = await res.text()
    return text ? JSON.parse(text) : null;
};

export async function getTasks() {
    const res = await fetch(API)
    return handleResponse(res)
}

export async function createTask(newTask) {
    const res = await fetch(API, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newTask),
    });

        return handleResponse(res)
}

export async function patchTask(id, patch) {
    const res = await fetch(`${API}/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(patch)
    });

    return handleResponse(res);
}

export async function putTask(id, fullTask) {
    const res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(fullTask)
    })

    return handleResponse(res)
}

export async function deleteTask(id) {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  return handleResponse(res)
}