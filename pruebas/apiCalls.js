import 'isomorphic-unfetch';

//const BASE_URI = 'https://api.themoviedb.org/3/movie';
//const IMAGE_BASE_URI = 'https://image.tmdb.org/t/p';

// fetch('./data/Menu.json')
// .then(response => response.json())
// .then(data => {
//   this.setState({
//     menu: data.MENU,
//     img: data.IMG,
//     prices: data.PRICES
//   });
// });

const fetchWithErrorHandling = async url => {
  try {
    return await (await fetch(url)).json();
  } catch (err) {
    //return { error: true };
   // return {error: "Hubo un error"};
    console.error('Algo pasa');
    
  }
};

export const getProjects = async () => {
  fetchWithErrorHandling('../data/projects.json');
}

export const getImageSrc = (path, size) => path;



/* export const getProjectDetails = async id =>
  fetchWithErrorHandling(
    `${BASE_URI}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`
  );

export const getUpcomingMovies = async () =>
  fetchWithErrorHandling(
    `${BASE_URI}/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );

export const getImageSrc = (path, size) =>
  `${IMAGE_BASE_URI}/${size ? `w${size}` : 'original'}${path}`; */
