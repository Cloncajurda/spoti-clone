import { FormControl, FormLabel, Stack, TextField } from "@mui/material"
import Button from "@mui/joy/Button"
import { useForm } from "react-hook-form"
import SongsServices from "../services/SongsService"
import { usePublisher } from "../hooks/pubSubHook"

export default function NewSong({artistId}: {artistId: number}) {

  const { register, handleSubmit, reset } = useForm()
  const publisher = usePublisher()

  const onSubmit = async (data: any) => {
    console.log(data)
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('album', data.album)
    formData.append('genre', data.genre)
    formData.append('coverImg', data.coverImg)
    formData.append('releaseDate', data.releaseDate)
    formData.append('song', data.song[0])
    formData.append('artistId', artistId.toString())

    const response = await new SongsServices().create(formData)
    console.log('song_created')
    console.log(response)

    publisher('song_created', data)
    reset()
  }

  return (
    <section>
      <h2>New Song</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <FormControl sx={{ marginBottom: '1rem' }}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <TextField type="text" {...register('title')}></TextField>
          </FormControl>
          <FormControl sx={{ marginBottom: '1rem' }}>
            <FormLabel htmlFor="album">Album</FormLabel>
            <TextField {...register('album')}></TextField>
          </FormControl>
          <FormControl sx={{ marginBottom: '1rem' }}>
            <FormLabel htmlFor="genre">Genre</FormLabel>
            <TextField {...register('genre')}></TextField>
          </FormControl>
          <FormControl sx={{ marginBottom: '1rem' }}>
            <FormLabel htmlFor="coverImg">Cover Image</FormLabel>
            <TextField {...register('coverImg')}></TextField>
          </FormControl>
          <FormControl sx={{ marginBottom: '1rem' }}>
            <FormLabel htmlFor="releaseDate">Release Date</FormLabel>
            <TextField type="date" {...register('releaseDate')}></TextField>
          </FormControl>
          <FormControl sx={{ marginBottom: '1rem' }}>
            <FormLabel htmlFor="song">Upload song</FormLabel>
            <TextField type="file" {...register('song')}></TextField>
          </FormControl>
        </Stack>
        <Button type="submit" variant="solid" size="md">
          Save
        </Button>
      </form>
    </section>
  )
}
