// calling the delect account API layer 
import client from './client'
const endpoint = 'account/delete'

const deleteAccount = () => client.delete('/account/delete')

const deletePost = (post_id) => client.delete('/post', { post_id })



export default {
  deleteAccount,
  deletePost
}
