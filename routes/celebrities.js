'use strict';

const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/', async (req, res, next) => {
  try {
    const celebrity = await Celebrity.find();
    res.render('celebrities/index', { celebrity });
  } catch (err) {
    next(err);
  }
});

router.get('/create', (req, res, next) => {
  res.render('celebrities/create');
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const celebrity = await Celebrity.findById(id);
    res.render('celebrities/show', { celebrity });
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  const { name, occupation, catchPhrase, image } = req.body;
  const artist = { name, occupation, catchPhrase, image };
  try {
    if (name) {
      await Celebrity.findOneAndUpdate({ name: name }, artist);
    } else {
      await Celebrity.create(artist);
    }
    res.redirect('/celebrities');
  } catch (err) {
    res.redirect('celebrities/create');
  }
});

router.post('/:id/delete', async (req, res, next) => {
  const { id } = req.params;
  try {
    await Celebrity.findByIdAndRemove(id);
    res.redirect('/celebrities');
  } catch (err) {
    next(err);
  }
});

router.get('/:id/edit', async (req, res, next) => {
  const { id } = req.params;
  try {
    const artist = await Celebrity.findById(id);
    res.render('celebrities/edit', { artist });
  } catch (err) {
    next(err);
  }
});

router.post('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  const artist = { name, occupation, catchPhrase };
  try {
    await Celebrity.findByIdAndUpdate(id, artist);
    res.redirect('/celebrities');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
