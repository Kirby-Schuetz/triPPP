const router = require('express').Router();
const usersService = require('../services/usersService');

// eslint-disable-next-line consistent-return
const createUserRequestValidator = (req, res, next) => {
  const { email, sub } = req.body;

  if (!email || !sub) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  next();
};

router.get('/', async (req, res) => {
  try {
    const users = await usersService.listUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('API Handler - Error listing users: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', createUserRequestValidator, async (req, res) => {
  try {
    const userObj = {
      email: req.body.email,
      profile_picture: req.body.profile_picture,
      created_at: req.body.created,
      updated_at: req.body.updated,
      sub: req.body.sub,
    };
    const user = await usersService.createUser(userObj);
    const newResourceUrl = `/api/users/${user.user_id}`;
    res.status(201).location(newResourceUrl).json(user);
  } catch (error) {
    console.error('API Handler - Error creating user: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
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
