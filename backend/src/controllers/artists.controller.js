import { Artist, Song } from "../models/models.js"
import { Op } from "sequelize"

export async function getAll(_, res) {
  try {
    const artists = await Artist.findAll({
      include: {
        model: Song,
        as: 'songs',
        separate: true,
        order: [['createdAt', 'desc']]
      }
    })
    return res.json(artists)
  } catch (error) {
    return res.status(404).json({
      message: 'Error getting all artists',
      error
    })
  }
}

export async function ownArtist(req, res) {
  try {
    const artists = await Artist.findAll({
      userId: req.user.id
    })
    return res.json(artists)
  } catch (error) {
    return res.status(404).json({
      message: 'Error getting own artists',
      error
    })
  }
}

export async function getById(req, res) {
  try {
    const { id } = req.params
    const artist = await Artist.findByPk(
      id, {
      include: {
        model: Song,
        as: 'songs',
        separate: true,
        order: [['createdAt', 'desc']]
      }
    }
    )
    return res.json(artist)
  } catch (error) {
    return res.status(404).json({
      message: 'Cannot be getting artist by id',
      error
    })
  }
}

export async function getSongsByArtist(req, res) {
  const { artist_id } = req.params

  try {
    const songs = await Song.findAll({
      artistId: artist_id
    })
    return res.status(200).json(songs)
  } catch (error) {
    return res.status(404).json({
      message: 'Connot be getting artist by id',
      error
    })
  }
}

export async function create(req, res) {
  try {
    req.body.userId = req.user.id
    const artist = await Artist.create(req.body)
    return res.json(artist)
  } catch (error) {
    return res.status(400).json({
      message: 'Cannot create an artist'
    })
  }
}

export async function search(req, res) {
  const { search } = req.body

  try {
    const artists = await Artist.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { bio: { [Op.like]: `%${search}%` } }
        ]
      }
    })
    return res.status(200).json(artists)
  } catch (error) {
    return res.json(error)
  }
}