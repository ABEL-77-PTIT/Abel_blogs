import testing from '../controllers/testing.js'
export default function doubleCheck(app) {
  app.get('/testing', testing)
}
