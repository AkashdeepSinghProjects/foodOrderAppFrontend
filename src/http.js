const baseUrl = "http://localhost:3000";
export async function getAllItems() {
  try {
    const response = await fetch(baseUrl + "/");
    const resData = await response.json();
    return resData.result;
  } catch (error) {
    console.log("Error: ", error.message);
    throw new Error({ message: error.message });
  }
}
