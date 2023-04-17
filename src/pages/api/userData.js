// pages/api/userData.js

import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req, res) => {
  const userData = {
    name: 'Jane Doe',
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    skills: ['JavaScript', 'React', 'Node.js'],
    interests: ['Reading', 'Traveling', 'Photography'],
    imageUrl: 'https://via.placeholder.com/150',
  };

  res.status(200).json(userData);
};

export default handler;
