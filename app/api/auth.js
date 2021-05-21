// Calling the API for login
import client from './client';

const login = (email, password) => client.post('/account/login', { email, password })

export default {
  login
}
