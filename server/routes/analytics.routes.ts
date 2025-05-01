import express from 'express'
import { authorizeRoles, isAuthenticated } from '../middleware/auth'
import { getCoursesAnalytics, getOrdersAnalytics,getCourseData, getUsersAnalytics,getRevenueAnalytics } from '../controllers/analytics.contoller'

const analyticsRouter = express.Router()

analyticsRouter.get('/get-users-analytics',isAuthenticated,authorizeRoles('admin'),getUsersAnalytics)
analyticsRouter.get('/get-orders-analytics',isAuthenticated,authorizeRoles('admin'),getOrdersAnalytics)
analyticsRouter.get('/get-courses-analytics',isAuthenticated,authorizeRoles('admin'),getCoursesAnalytics)
analyticsRouter.get('/get-revenue-analytics',isAuthenticated,authorizeRoles('admin'),getRevenueAnalytics)

analyticsRouter.get('/get-analytics',isAuthenticated,authorizeRoles('admin'),getCourseData)


export default analyticsRouter