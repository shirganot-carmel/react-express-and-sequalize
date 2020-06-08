let { ToDo, User } = require('../models');
var express = require('express');
var router = express.Router();


// console.log("require('../models')",JSON.stringify({ToDo, User}))
/* GET users listing. */
router.get('/', async (req, res, next) => {
    const todos = await ToDo.findAll({
        include: { model: User, as: 'user' }
    })
    res.send(todos);
});

module.exports = router;
