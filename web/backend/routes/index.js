import ProductRoutes from './product.js'
import UserRoutes from './user.js'
import AuthRoutes from './auth.js'

export default function adminRoute(app) {
  ProductRoutes(app)
  UserRoutes(app)
  AuthRoutes(app)
}
