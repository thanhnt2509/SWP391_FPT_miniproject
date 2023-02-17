async function getAllBirdOfUser(id) {
  const data = await fetch(`http://localhost:5000/users/${id}/birds`);
  const json = await data.json();
  return await json;
}

async function getAllBirdType() {
  const data = await fetch(`http://localhost:5000/users/birds/types`);
  const json = await data.json()
  console.log(await json);
  return await json;
}

// getAllBirdType()
// getAllBirdOfUser(2)
// Path: src\module\user_M.js
export default { getAllBirdOfUser, getAllBirdType };
