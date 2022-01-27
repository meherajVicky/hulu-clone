const Api_key = "c583d6c0b7963cfd21c0d146f112f70e";
export const baseUrl = `https://api.themoviedb.org/3`;
export const fetchCategory_end_point = `${baseUrl}/genre/movie/list?api_key=${Api_key}&language=en-US`;
export const fetchMovieById = `${baseUrl}/discover/movie?api_key=${Api_key}&with_genres=`;
export const fetchForTrending = `${baseUrl}/trending/all/day?api_key=${Api_key}`;
export const fetchForHome = `${baseUrl}/movie/top_rated?api_key=${Api_key}&language=en-US`;
export const fetchForVerified = `${baseUrl}/discover/movie?api_key=${Api_key}&language=en-US`;
export const fetchForSearch = `${baseUrl}/search/multi?api_key=${Api_key}&language=en-US&page=1&include_adult=false&query=`;
