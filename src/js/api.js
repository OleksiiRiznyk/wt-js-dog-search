import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_0lGvPsWjj5ay66E6jgI3vbkfZ3Jt04XG2xNL3dyyLJ3poJdC5OUz9O2Uety4hr6w';

export async function fetchBreeds() {
  return await axios
    .get('https://api.thedogapi.com/v1/breeds')
    .then(response => response.data);
}

export async function fetchDogByBreed(breedId) {
  return await axios
    .get(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
}