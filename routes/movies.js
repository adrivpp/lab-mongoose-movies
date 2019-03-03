'use strict';

const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/', async (req, res, next) => {
  try {
    const movie = await Movie.find();
    res.render('./movies/index', { movie });
  } catch (err) {
    next(err);
  }
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.render('movies/show', { movie });
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  const { title, genre, plot } = req.body;
  const movie = { title, genre, plot };
  try {
    if (title) {
      await Movie.findOneAndUpdate({ title: title }, movie);
    } else {
      await Movie.create(movie);
    }
    res.redirect('/movies');
  } catch (err) {
    res.redirect('movies/new');
  }
});

router.post('/:id/delete', async (req, res, next) => {
  const { id } = req.params;
  try {
    await Movie.findByIdAndRemove(id);
    res.redirect('/movies');
  } catch (err) {
    next(err);
  }
});

router.get('/:id/edit', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.render('movies/edit', { movie });
  } catch (err) {
    next(err);
  }
});

router.post('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  const movie = { title, genre, plot };
  try {
    await Movie.findByIdAndUpdate(id, movie);
    res.redirect('/movies');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
