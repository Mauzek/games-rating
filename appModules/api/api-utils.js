const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

function getRandomGame(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
module.exports = { getData, getRandomGame};
