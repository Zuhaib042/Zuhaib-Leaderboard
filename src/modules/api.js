// post data to api
export const postApi = async () => {
  const inputName = document.getElementById('name');
  const inputScore = document.getElementById('score');
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/df23vU4fdUk434jkoY9J/scores/',
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({
        user: inputName.value,
        score: inputScore.value,
      }),
    }
  );
  //   const data = await response.json();
  //   console.log(data);
  return response.json();
};

// fetch data from api

export const getData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/df23vU4fdUk434jkoY9J/scores/'
  );
  const data2 = await response.json();
  console.log(data2);
  return data2;
};
// getData();
