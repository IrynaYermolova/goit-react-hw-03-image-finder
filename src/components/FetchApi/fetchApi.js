import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
axios.defaults.params = {
  key: '34672981-adcb403f6d383b7a43bf0da18',
  per_page: 12,
};

const fetchImages = (value, page = 1) => {
  return axios
    .get('api/', {
      params: {
        q: value,
        page,
      },
    })
    .then(data => data);
};

export default fetchImages;


// const URL = 'https://pixabay.com/api/';
// const KEY = '34672981-adcb403f6d383b7a43bf0da18';
// const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

// export const fetchImages = (value, page = 1) => {
//     return fetch(`${URL}?q=${value}&page=${page}&key=${KEY}${FILTER}`).then(
//         response => response.json()
//     );
// }