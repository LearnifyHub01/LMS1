import express from 'express'

import { editCourse, uploadCourse,getSingleCourse,getEnrolledCourse, getAllCourses, getCourseByUser, addQuestion, addAnswer, addReview, addReplyToReview, getAllCoursesForAdmin, deleteCourse, getUserCourse,generateVideoUrl,searchCourses } from '../controllers/course.controller'


import { authorizeRoles, isAuthenticated } from '../middleware/auth'
import { updateAccessToken } from '../controllers/user.controllers'
const courseRouter = express.Router()


courseRouter.post('/create-course',isAuthenticated,authorizeRoles("admin"),uploadCourse)
courseRouter.put('/edit-course/:id',isAuthenticated,authorizeRoles("admin"),editCourse)
courseRouter.get('/get-course/:id',getSingleCourse)
courseRouter.get('/get-user-course',isAuthenticated,getUserCourse)
courseRouter.get('/get-courses',getAllCourses)
courseRouter.get('/enrolled-course',isAuthenticated,getEnrolledCourse)
courseRouter.get('/get-courses-content/:id',isAuthenticated,getCourseByUser)
courseRouter.put('/add-question',isAuthenticated,addQuestion)
courseRouter.put('/add-answer',isAuthenticated,addAnswer)
courseRouter.put('/add-review/:id',isAuthenticated,addReview)
courseRouter.put('/add-reply/:id',isAuthenticated,authorizeRoles("admin"),addReplyToReview)
courseRouter.get('/get-all-courses',isAuthenticated,authorizeRoles("admin"),getAllCoursesForAdmin)
courseRouter.post('/getVdoCipherOTP',generateVideoUrl)
courseRouter.delete('/delete-course/:id',isAuthenticated,authorizeRoles("admin"),deleteCourse)
courseRouter.delete('/delete-course/:id',isAuthenticated,authorizeRoles("admin"),deleteCourse)
courseRouter.get("/search-courses", searchCourses);


export default courseRouter
