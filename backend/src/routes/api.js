import { Router } from "express";
import { router as usersRouter } from "./api/users.js";
import { router as artistsRouter } from "./api/artists.js";
import { router as songsRouter } from "./api/songs.js";

export const api = Router()

api.use('/users', usersRouter)
api.use('/artists', artistsRouter)
api.use('/songs', songsRouter)