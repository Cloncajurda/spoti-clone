import { Router } from "express"
import fileUpload from "express-fileupload"
import { remove, search, upload } from "../../controllers/songs.controller.js"
import { checkToken } from "../../helper/middlewares.js"

export const router = Router()

router.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './src/tmp'
}))

router.post('/upload', checkToken, upload)
router.post('/search', search)
router.delete('/:song_id', checkToken, remove)