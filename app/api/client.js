
// API calling using apisauce
import { create } from 'apisauce'
import authStorage from '../auth/storage'
const apiClient = create({
  baseURL: 'https://pain-diary-api.herokuapp.com'
})
// attach header token with every protected request 

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken()
  if (!authToken) return;
  request.headers["Authorization"] = authToken
})
export default apiClient
