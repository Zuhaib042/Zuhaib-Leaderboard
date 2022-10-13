// post data to api
export const postApi = async () => {
  const inputName = document.getElementById('name');
  const inputScore = document.getElementById('score');
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/he78Jhew0fweHk4HRG7j/scores/',
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({
        user: inputName.value,
        score: inputScore.value,
      }),
    },
  );
  inputName.value = '';
  inputScore.value = '';
  const data = await response.json();
  return data;
};

// fetch data from api
export const getData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/he78Jhew0fweHk4HRG7j/scores/',
  );
  const data2 = await response.json();
  return data2;
};
