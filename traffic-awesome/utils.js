export function turnAllOffExcept(items, lights) {
  //turn all off
  for (const light of lights) {
    light.classList.remove("on");
  }

  //turn on all the ones sent
  for (const item of items) {
    item.classList.add("on");
  }
}
