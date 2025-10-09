// src/utils/api.js
export async function api(path, { method = "GET", body, headers } = {}) {
    const res = await fetch(path, {
      method,
      headers: { "Content-Type": "application/json", ...(headers || {}) },
      credentials: "include",
      body: body ? JSON.stringify(body) : undefined,
    });
  
    const text = await res.text().catch(() => "");
    if (!res.ok) {
      try {
        const errJson = JSON.parse(text || "{}");
        throw new Error(errJson.error || errJson.message || `Request failed: ${res.status}`);
      } catch {
        throw new Error(text || `Request failed: ${res.status}`);
      }
    }
    return text ? JSON.parse(text) : null;
  }
  