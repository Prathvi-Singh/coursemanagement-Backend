import express from 'express';
import {AddUser,Login,allstudents,AllFaculty} from '../Controllers/user-controller.js'
import {AddCourse ,GetCourses,SendCourseInDetail,Update,DeleteCourse} from '../Controllers/Course-controller.js'
import {authenticateToken} from '../Controllers/jwt-controller.js'
import {uploadImage,getImage} from '../Controllers/image-controller.js'
import {files,getallfiles} from '../Controllers/files-controller.js'
import {AddGrade,allgrades} from '../Controllers/grade-controller.js'
import upload from '../utils/upload.js'
import {tokend} from '../Controllers/rough.js'
const router=express();

// router.post('/register',Signup);
router.post('/login',Login);
router.post('/addcourse',AddCourse);
router.get('/getcourses',GetCourses);
router.get('/details:id',SendCourseInDetail)
router.put('/update:id',Update),
router.delete('/delete:id',DeleteCourse);
router.post('/adduser',AddUser)
router.post('/file/upload',upload.single('file'),uploadImage);
router.get('/file/:filename',getImage);
router.post('/files',files);
router.get('/allfiles:course',getallfiles);
router.post('/submitgrades',AddGrade);
router.get('/allstudents:branch',allstudents);
router.get('/allgrades:email',allgrades);
router.delete('/delete',tokend);
router.get('/allfaculty',AllFaculty)

//router.get('/course/:branch',BranchByCourse)

export default router;