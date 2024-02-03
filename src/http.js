import base64 from "base-64";

const baseUrl = "http://localhost:3000";
export async function getAllItems() {
  try {
    const response = await fetch(baseUrl + "/food");
    const resData = await response.json();
    return resData.result;
  } catch (error) {
    console.log("Error: ", error.message);
    throw new Error(error.message);
  }
}

export async function getAllTypes() {
  try {
    const response = await fetch(baseUrl + "/gettypes");
    const resData = await response.json();
    return resData.result;
  } catch (error) {
    console.log("Error: ", error.message);
    throw new Error(error.message);
  }
}

export async function typeQuery(type) {
  try {
    const response = await fetch(
      baseUrl + "/food?" + new URLSearchParams({ type })
    );
    const resData = await response.json();

    return resData.result;
  } catch (error) {
    console.log("Error: ", error.message);
    throw new Error(error.message);
  }
}

export async function nameQuery(name) {
  try {
    const response = await fetch(
      baseUrl + "/food?" + new URLSearchParams({ name })
    );
    const resData = await response.json();

    return resData.result;
  } catch (error) {
    console.log("Error: ", error.message);
    throw new Error(error.message);
  }
}

export async function register(email, password) {
  let headers = new Headers();
  const encoded = base64.encode(email + ":" + password);
  headers.append("Authorization", "Basic" + encoded);
  try {
    const response = await fetch(baseUrl + "/register/frontend", {
      method: "POST",
      headers: headers,
    });

    const resData = await response.json();
    return resData;
  } catch (error) {
    console.log("Error: ", error.message);
    throw new Error(error.message);
  }
}
