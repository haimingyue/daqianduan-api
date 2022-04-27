import ContentController from '@/api/ContentController'
import Router from 'koa-router'
import publicController from '../api/PublicController'

const router = new Router()

router.prefix('/public')

router.get('/getCaptcha', publicController.getCaptcha)
router.get('/list', ContentController.getPostList)

export default router
