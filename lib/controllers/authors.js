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
  })
  
  .post('/', async (req, res, next) => {
    try {
      const author = await db.Author.create(req.body);
      res.json(author);
    } catch(err) {
      next(err);
    }
  })

  .post('/:id/book', async (req, res, next) => {
    try {
      const book = await db.Book.create({
        ...req.body,
        authorId: req.params.id,
      });
      res.json(book);
    } catch(err) {
      next(err);
    }
  })

;
