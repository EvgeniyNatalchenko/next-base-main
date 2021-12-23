import usersData from './users.json'

export default function handler(req, res) {
    const uid = req.query.uid
    const user = usersData.find(user => parseInt(user.id) === parseInt(uid));
    
    if (!user) return res.status(400).json("User not found");
    res.status(200).json(user)
  }