import ResponseHandler from '../helpers/responseHandler.js'

export default {
  get: async (req, res) => {
    try {
      let data = 123
      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },
}
