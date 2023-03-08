import multer  from 'multer'
import { GridFsStorage} from 'multer-gridfs-storage'
// import dotenv from 'dotenv'

// dotenv.config();

const storage =new GridFsStorage({
   
    url:"mongodb+srv://prathvi:onetwothree@cluster0.fscmzlp.mongodb.net/coursemanagement?retryWrites=true&w=majority",
    options : {useNewUrlParser : true},
    file : (request,file) => {
      
        const match = ['image/png','image/jpeg','image/pdf'];
       
        if(match.indexOf(file.memeType)===-1){
           
            return `${Date.now()}-iiitdm-${file.originalname}`
        }
        return {
            bucketName:"photos",
            filname:`${Date.now()}-iiitdm-${file.originalname}`
        }
    }
})

export default multer({storage});