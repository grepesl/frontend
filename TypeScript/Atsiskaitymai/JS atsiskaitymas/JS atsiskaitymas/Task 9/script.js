/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

import Movie from "./modules/Movie.js";

const movie = new Movie('El Camino: A Breaking Bad Movie', 'Vince Gilligan', 6_000_000);
console.log(movie.wasExpensive());

const movie2 = new Movie('El Camino: A Breaking Bad Movie', 'Vince Gilligan', 150_000_000);
console.log(movie2.wasExpensive());