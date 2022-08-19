const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const book = await db.Book.findByPk(req.params.id, {
        include: db.Author,
      });
      if (!book) next();
      res.json(book);
    } catch(err) {
      next(err);
    }
  })  

  .get('/', async (req, res, next) => {
    try {
      const books = await db.Book.findAll();
      res.json(books);
    } catch(err) {
      next(err);
    }
  });
