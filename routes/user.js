let { ToDo, User } = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await User.findAll({
    include: [ToDo]
  })
  res.send(users);
});


router.post('/', async (req, res, next) => {
  let { name } = req.body;
  const cUser = await User.create({ name })
  res.send(cUser);
});

module.exports = router;
