# Routes

| Method | Route | Action |
|--------|-------|--------|
| GET | /api/artist | Recupera todos los artistas |
| GET | /api/artist/own | Recupera los artistas de un usuario dado |
| GET | /api/artist/:id | Recupera un artista por ID |
| GET | /api/artist/songs/:id | Recupera las canciones de un artista dado |
| POST | /api/artistas | Crea un nuevo artista |
| POST | /api/artistas/search | Busca entre todos los artistas |
| POST | /api/songs/upload | Sube y guarda una cancion |
| POST | /api/songs/search | Hace una busqueda entre todas las canciones |
| DELETE | /api/songs/:id | Elimina una cancion por su ID |
| POST | /api/users/register | Registra un usuario en la DB |
| POST | /api/users/login | Comprueba la autenticacion del usuario |
