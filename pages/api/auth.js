import usersData from './users.json'

export default function handler(req, res) {
    console.log(req);
    res.status(200).json(usersData)
  }