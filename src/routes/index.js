import { Router } from 'express'
import userRoute from './user.route.js'
import produtoRoute from './produto.route.js'

const router = Router()

router.use('/users', userRoute)
router.use('/produtos', produtoRoute)


export default router