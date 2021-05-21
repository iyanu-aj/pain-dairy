// get records API to access to send and reteive data from the database server

import client from './client'
const endpoint = '/record'

const getRecord = () => client.get('/record')

const getGraphRecord = () => client.get('/record/graphData')

const record = (pain_condition, level, location, symptoms, description, triggers, medications, interventions, timing, environment, notes) =>

  client.post('/record', { pain_condition, level, location, symptoms, description, triggers, medications, interventions, timing, environment, notes })

export default {
  getRecord,
  getGraphRecord,
  record
}
