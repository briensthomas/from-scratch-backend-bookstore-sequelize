const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const books = await db.Book.findAll();
      res.json(books);
    } catch(err) {
      next(err);
    }
  });
