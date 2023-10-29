const router = require('express').Router();
const usersService = require('../services/usersService');

router.post('/', async (req, res) => {
  const userObj = {
    email: req.body.email,
    profile_picture: req.body.profile_picture,
    created_at: req.body.created,
    updated_at: req.body.updated,
    sub: req.body.sub,
  };

  const user = await usersService.createUser(userObj);
  const newResourceUrl = `/api/users/${user.user_id}`;
  res.status(201).location(newResourceUrl);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params.id;
  const user = await usersService.getUser(id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send('404 not found');
  }
});

module.exports = router;
