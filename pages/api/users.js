import usersData from './users.json'

export default function handler(req, res) {
    res.status(200).json(usersData)
  }

