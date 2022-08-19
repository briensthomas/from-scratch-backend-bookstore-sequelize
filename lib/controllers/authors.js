const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const author = await db.Author.findByPk(req.params.id, {
        include: db.Book,
      });
      res.json(author);
    } catch(err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const authors = await db.Author.findAll();
      res.json(authors);
    } catch(err) {
      next(err);
    }
  });
