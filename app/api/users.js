// API layer for registering account
import client from './client'

const register = (name, email, password) => client.post('/account/register', { name, email, password })

export default { register }
