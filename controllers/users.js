const { application } = require("express")
const { restart } = require("nodemon")
const users = require("../data/users")

const listUsers = (req, res) => {
  res.json(users)
}

const showUser = (req, res) => {
  let id = req.params.id
  let found = users.find((element) => {
    return element._id == id;
  })
  res.json(found);
}

const createUser = (req, res) => {
  let postId = users.length + 1;
  req.body._id = postId;
  users.push(req.body)
  res.json(users)
}

const updateUser = (req, res) => {
  let id = req.params.id
  let found = users.findIndex((element) => {
    return element._id == id;
  });
   const { sampleUser } = req;
   users[found] = {
    ...users[found],
    ...sampleUser

  }
}

const deleteUser = (req, res) => {
  let id = req.params.id
  let found = users.findIndex((element) => {
    return element._id == id;
  })
  users.splice(found, 1)
  res.json(users)
}

module.exports = {listUser, showUser, createUser, updateUser, deleteUser}