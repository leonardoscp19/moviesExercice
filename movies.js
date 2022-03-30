const movies = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = () => {
  const directors = movies.map((movie) => {
    return movie.director;
  });
  return directors;
};

//bonus

const getAllDirectorsB = () => {
  const uniqueDiretor = [];
  movies.forEach((movie) => {
    if (!uniqueDiretor.includes(movie.director)) {
      uniqueDiretor.push(movie.director);
    }
  });
  return uniqueDiretor;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const getNumberOfDramaMovies = () => {
  count = 0;
  movies.forEach((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      count += 1;
    }
  });
  return count;
};

//filter 2
function getNumberOfDramaMoviesF() {
  let filtered = movies.filter((currentMovie) => {
    return (
      currentMovie.director === "Steven Spielberg" &&
      currentMovie.genre.includes("Drama")
    );
  });
  return filtered.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const getAverageScore = () => {
  let averageScore = 0;
  const scoreValue = movies
    .reduce((acc, movie) => acc + movie.score, 0)
    .toFixed(2);
  averageScore = scoreValue / movies.length;
  return averageScore.toFixed(2);
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const getAverageDramaScore = () => {
  let averageDramaScoreValue = 0;
  let filtered = movies.filter((currentMovie) => {
    return currentMovie.genre.includes("Drama");
  });
  const scoreDramaValue = filtered
    .reduce((acc, dramaMovie) => acc + dramaMovie.score, 0)
    .toFixed(2);
  averageDramaScoreValue = scoreDramaValue / filtered.length;
  return averageDramaScoreValue.toFixed(2);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const getMoviesByYear = () => {
  const sorted = movies.sort((movieOne, movieTwo) => {
    const { title: titleOne, year: yearOne } = movieOne;
    const { title: titleTwo, year: yearTwo } = movieTwo;
    if (yearOne - yearTwo === 0) {
      return titleOne.localeCompare(titleTwo);
    } else {
      return yearOne - yearTwo;
    }
  });
  return sorted;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const getMoviesByTitle = () => {
  const sorte = movies
    .sort((movieOne, movieTwo) => {
      return movieOne.title.localeCompare(movieTwo.title);
    })
    .slice(0, 20);
  return sorte;
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = () => {
  const newMovies = movies.map((movie) => {
    const { duration } = movie;
    let durationSplit = duration.split(" ");
    let hour = parseInt(durationSplit[0][0]);
    let minutes = durationSplit[1];
    if (!minutes) {
      minutes = hour * 60;
    } else {
      for (let i = 0; i < minutes.length; i++) {
        if (minutes[i++] === "m") {
          firstMinute = parseInt(minutes[i]);
          return `${firstMinute}`;
        } else {
          firstMinute = parseInt(minutes[i]);
          secondMinute = parseInt(minutes[i++]);
          return `${firstMinute} ${secondMinute}`;
        }
      }
    }
  });
  return newMovies;
};

// BONUS - Iteration 8: Best yearly score - Best yearly score average
const getBestYearlyScoreAverage = () => {
  let usedYearsArray = [];
  let highestAverage = 0;
  const finalObj = {};
  movies.map((movie) => {
    if (usedYearsArray.includes(movie.year)) {
      return;
    } else {
      usedYearsArray.push(movie.year);
      let filtered = movies.filter((movieFilter) => {
        return movieFilter.year === movie.year;
      });
      const yearAverage = filtered.reduce((acc, movie) => acc + movie.score, 0);
      let average = yearAverage / filtered.length;
      if (average >= highestAverage) {
        highestAverage = average;

        return (immutableObj = {
          ...finalObj,
          highestAverage,
          year: movie.year,
        });
      }
    }
  });
  return immutableObj;
};

// BONUS - Iteration 9: Worst yearly score - Worst yearly score average
const getWorstYearlyScoreAverage = () => {
  let usedYearsArray = [];
  let lowestAverage = 10;
  const finalObj = {};
  movies.map((movie) => {
    if (usedYearsArray.includes(movie.year)) {
      return;
    } else {
      usedYearsArray.push(movie.year);
      let filtered = movies.filter((movieFilter) => {
        return movieFilter.year === movie.year;
      });
      const yearAverage = filtered.reduce((acc, movie) => acc + movie.score, 0);
      let average = yearAverage / filtered.length;
      if (average <= lowestAverage) {
        lowestAverage = average;

        return (immutableObj = {
          ...finalObj,
          lowestAverage,
          year: movie.year,
        });
      }
    }
  });
  return immutableObj;
};
console.log(getWorstYearlyScoreAverage());
