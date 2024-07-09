import { FormControl, FormLabel, Stack, TextField } from "@mui/material";
import Button from "@mui/joy/Button";
import { Textarea } from "@mui/joy";
import { useForm } from "react-hook-form";
import AritstsService from "../services/ArtistsService";
import { usePublisher } from "../hooks/pubSubHook";

export default function NewArtist() {

  const { register, handleSubmit, reset } = useForm()
  const publisher = usePublisher()

  const onSubmit = async(data: any) => {
    try {
      const response = new AritstsService().create(data)
      console.log(response)
      publisher('artist_created', data)
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <h2>New Artist</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <FormControl sx={{ marginBottom: '1rem' }}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField type="text" {...register('name')}></TextField>
          </FormControl>
          <FormControl sx={{ marginBottom: '1rem' }}>
            <FormLabel htmlFor="bio">Bio</FormLabel>
            <Textarea minRows={3} {...register('bio')}></Textarea>
          </FormControl>
          <FormControl sx={{ marginBottom: '1rem' }}>
            <FormLabel htmlFor="genre">Genre</FormLabel>
            <TextField type="text" {...register('genre')}></TextField>
          </FormControl>
          <FormControl sx={{ marginBottom: '1rem' }}>
            <FormLabel htmlFor="coverImg">Cover Image</FormLabel>
            <TextField type="text" {...register('coverImg')}></TextField>
          </FormControl>
        </Stack>
        <Button type="submit" variant="solid" size="md">
          Save
        </Button>
      </form>
    </section>
  )
}
