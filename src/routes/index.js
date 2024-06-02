import { Router } from 'express'
import userRoute from './user.route.js'
import produtoRoute from './produto.route.js'
import taskRoute from './task.route.js'

const router = Router()

router.use('/users', userRoute)
router.use('/produtos', produtoRoute)
router.use('/tasks', taskRoute)


export default router