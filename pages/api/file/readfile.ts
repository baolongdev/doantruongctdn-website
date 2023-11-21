import type { NextApiRequest, NextApiResponse } from 'next'
import { getPostBySlug } from '../../../lib/api'
import yaml from 'js-yaml';



export default async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { slug, fields },
    method,
  } = req
  if (method != 'GET') {
    res.setHeader('Allow', ['GET'])
    res.status(405).send(`Method ${method} Not Allowed`)
  }

  if (typeof slug !== 'string') {
    res.status(400).json({ error: 'Invalid request parameters' });
    return;
  }
  const validFields = typeof fields === 'string' ? fields.split(',') : []
  const post = getPostBySlug(slug, validFields);
  res.status(200).json(post);
}