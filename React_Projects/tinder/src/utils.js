export function getLocalStorage(name = "state") {
  const initialStateOnDisk = localStorage.getItem(name);

  if (initialStateOnDisk) {
    // console.log(initialStateOnDisk);
    return JSON.parse(initialStateOnDisk);
  }
}
