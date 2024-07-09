import { Router } from "express";
import { create, getAll, getById, getSongsByArtist, ownArtist, search } from "../../controllers/artists.controller.js";
import { checkToken } from "../../helper/middlewares.js";

export const router = Router()

router.get('/', getAll)
router.get('/own', checkToken, ownArtist)
router.get('/:id', getById)
router.get('/songs/:artist_id', getSongsByArtist)

router.post('/', checkToken, create)
router.post('/search', search)