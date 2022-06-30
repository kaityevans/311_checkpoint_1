const { application } = require("express")
const { restart } = require("nodemon")
const users = require("../data/index")
const sampleUser = require("../data/sampleUser")


const listUsers = (req, res) => {
  console.log("listUsers")
  res.json(users)
}

const showUser = (req, res) => {
  let id = req.params.id
  let found = users.find((element) => {
    return element.id == id;
  })
  res.json(found);
}

const createUser = (req, res) => {
  let postId = users.length + 1;
  sampleUser.id = postId;
  users.push(sampleUser)
  res.json(users)
}

const updateUser = (req, res) => {
  let id = req.params.id
  let found = users.findIndex((element) => {
    return element.id == id;
  });
   const { body } = req;
   users[found] = {
    ...users[found],
    ...body
  }
  res.json(found)
}

const deleteUser = (req, res) => {
  let id = req.params.id
  let found = users.findIndex((element) => {
    return element._id == id;
  })
  users.splice(found, 1)
  res.json(users)
}

module.exports = {listUsers, showUser, createUser, updateUser, deleteUser}