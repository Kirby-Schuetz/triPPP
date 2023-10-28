const router = require("express").Router();



const {
  getUserBySub,
  createUser,
} = require("../db/handlers/users");





router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const userObj = {
      email: req.body.email,
      profile_picture: req.body.profile_picture,
      created_at: req.body.created,
      updated_at: req.body.updated,
      sub: req.body.sub,
    };

    const user = await createUser(userObj);
    
    const newResourceUrl = `/api/users/${user.user_id}`;

    res.status(201).location(newResourceUrl);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    console.log("Users API Handler: ", req.params.id);
    const user = await getUserBySub(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send("404 not found");
    }
    
  } catch(error) {
    throw error;
  }
})

module.exports = router;
