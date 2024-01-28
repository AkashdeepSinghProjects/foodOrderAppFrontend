const baseUrl = "http://localhost:3000";
export async function getAllItems() {
  try {
    const response = await fetch(baseUrl + "/");
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
    const response = await fetch(baseUrl + "?" + new URLSearchParams({ type }));
    const resData = await response.json();

    return resData.result;
  } catch (error) {
    console.log("Error: ", error.message);
    throw new Error(error.message);
  }
}

export async function nameQuery(name) {
  try {
    const response = await fetch(baseUrl + "?" + new URLSearchParams({ name }));
    const resData = await response.json();

    return resData.result;
  } catch (error) {
    console.log("Error: ", error.message);
    throw new Error(error.message);
  }
}
