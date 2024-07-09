import { deleteFile, uploadFile } from "../config/cloudinary.js"
import { Song } from "../models/models.js"
import { Op } from "sequelize"

export async function upload(req, res) {
  try {
    const result = await uploadFile(req.files.song)
    const song = await Song.create({
      ...req.body,
      cloudinatyPulibcId: result.public_id,
      cludinarySecureUrl: result.secure_url
    })
    return res.json(song)
  } catch (error) {
    return res.json({
      message: "Cannot upload song",
      error
    })
  }
}

export async function search(req, res) {
  const { search } = req.body
  try {
    const songs = await Song.findAll({
      where: {
        title: { [Op.like]: `%${search}%` }
      }
    })
    return res.json(songs)
  } catch (error) {
    return res.json({
      message: "Caanot search song",
      error
    })
  }
}

export async function remove(req, res) {
  const { song_id } = req.params
  try {
    const song = await Song.findByPk(song_id)
    const result = await deleteFile(song.dataValues.cloudinatyPulibcId)
    await song.destroy()
    return res.json(song, result)
  } catch (error) {
    return res.json({
      message: "Cannot find a song for id",
      error
    })
  }
}