import { v2 as cloudinary } from 'cloudinary'
import { config } from 'dotenv'
import randomstring from 'randomstring'

config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: false
})

export function uploadFile(file) {
  return cloudinary.uploader.upload(
    file.tempFilePath, {
    folder: 'codetunes',
    public_id: `spoticlone_${randomstring.generate(16)}`,
    resource_type: 'auto'
  }
  )
}

export function deleteFile(public_id) {
  return cloudinary.uploader.destroy(public_id, { resource_type: 'video' })
}