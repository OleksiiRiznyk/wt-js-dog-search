import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_NcMfY6vAr6NwibNg8yYLfVlnhUzIrop8pwZVoanLPwgYYTl40pDgOSF7mSCkXuPo';

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