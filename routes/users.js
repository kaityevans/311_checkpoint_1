const { application, Router } = require("express");

router.get("/data/users", usersController.listUsers)

router.get("/data/users/:id", usersController.showUser)

router.post("/data/users", usersController.createUser)

router.put("/data/users/:id", usersController.updateUser)

router.delete("/data/users/:id", usersController.deleteUser)

module.exports = router;