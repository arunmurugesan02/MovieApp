export const fetchTrendingMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDMwNjQxMDAwZDM2N2YxMzIwN2Q3YmIxN2MxYzk0OSIsInN1YiI6IjY1M2ExMTcxMjRmMmNlMDBmZjcxNGQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XJQaMYOep9t3E6latU1pKshfJWoGAOFwccNtp5-DDHI',
    },
  };

  const response = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-IN',
    options,
  );
  const data = await response.json();
  // const images = data.results
  //   .map((item, index) => 'https://image.tmdb.org/t/p/w500' + item.poster_path)
  //   .filter(Boolean);
  return data;
};


export const fetchUpcomingMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDMwNjQxMDAwZDM2N2YxMzIwN2Q3YmIxN2MxYzk0OSIsInN1YiI6IjY1M2ExMTcxMjRmMmNlMDBmZjcxNGQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XJQaMYOep9t3E6latU1pKshfJWoGAOFwccNtp5-DDHI',
    },
  };

  const response = await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    options,
  );
  const data = await response.json();
  // const images = data.results
  //   .map((item, index) => 'https://image.tmdb.org/t/p/w500' + item.poster_path)
  //   .filter(Boolean);
  return data;
};


export const fetchTopRatedMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDMwNjQxMDAwZDM2N2YxMzIwN2Q3YmIxN2MxYzk0OSIsInN1YiI6IjY1M2ExMTcxMjRmMmNlMDBmZjcxNGQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XJQaMYOep9t3E6latU1pKshfJWoGAOFwccNtp5-DDHI',
    },
  };

  const response = await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    options,
  );
  const data = await response.json();
  // const images = data.results
  //   .map((item, index) => 'https://image.tmdb.org/t/p/w500' + item.poster_path)
  //   .filter(Boolean);
  return data;
};



export const fetchCastDeatails = async (item)=>{
  console.log(item);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDMwNjQxMDAwZDM2N2YxMzIwN2Q3YmIxN2MxYzk0OSIsInN1YiI6IjY1M2ExMTcxMjRmMmNlMDBmZjcxNGQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XJQaMYOep9t3E6latU1pKshfJWoGAOFwccNtp5-DDHI'
    }
  };

  const response = await fetch(`https://api.themoviedb.org/3/movie/${item}/credits?language=en-US`, options)
  const res = await response.json()
  console.log(res);
  return res;
}