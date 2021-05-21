// post API layer to get posts 

import client from './client'
const endpoint = '/post'
const getPostALL = () => client.get('/post/user') //fuction for getting all posts from the server with endpoint passed
const getPost = () => client.get('/post') // function for getting a single post from the server

const post = (category, title, body) =>

  client.post('/post', { category, title, body })

export default {
  getPost, post, getPostALL //export default object and all the methods
}
