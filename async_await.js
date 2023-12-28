async function getApiData() {
  const result = await axios.get("https://myapi.com");

  console.log(result);
}
