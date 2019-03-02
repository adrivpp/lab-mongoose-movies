'use strict';

// const Celebrity = require('../models/celebrity');

// const celebrity = [
//   {
//     name: 'Gustavo Cerati',
//     occupation: 'Singer',
//     catchPhrase: 'El silencio no es tiempo perdio'
//   },
//   {
//     name: 'johnny depp',
//     occupation: 'actor',
//     catchPhrase: 'People cry not because they are weak, it is beacause they have been strong fot too long.'
//   },
//   {
//     name: 'anne hathaway',
//     occupation: 'actress',
//     catchPhrase: 'You cannot live your life to please others.The choice mus be yours'
//   }
// ];

// Celebrity.create(celebrity)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const Movie = require('../models/movie');
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/movies', {
//   keepAlive: true,
//   useNewUrlParser: true,
//   reconnectTries: Number.MAX_VALUE
// });

const movie = [
  {
    title: 'El dia despues de mañana',
    genre: 'ficcion',
    plot: 'nose'
  },
  {
    title: 'Diario de una pasión',
    genre: 'Drama-Romance',
    plot: 'sigo sin saber'
  }

];

// Movie.create(movie)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

module.exports = movie;
