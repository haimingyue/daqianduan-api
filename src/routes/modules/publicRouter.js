import Router from 'koa-router'
import ContentController from '@/api/ContentController'
import publicController from '@/api/PublicController'

const router = new Router()

router.prefix('/public')

router.get('/getCaptcha', publicController.getCaptcha)
router.get('/tips', ContentController.getTips)
router.get('/list', ContentController.getPostList)
router.get('/links', ContentController.getLinks)
router.get('/topWeek', ContentController.getTopWeek)

export default router
