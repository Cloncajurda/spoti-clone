import { FormControl, FormLabel, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import UsersService, { RegisterData } from "../services/UsersService";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/joy";

export default function Register() {

  const inputStyles = {
    marginBottom: '10px'
  }

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = async(data: RegisterData) => {
    try {
      const response = await new UsersService().register(data)
      console.log(response)
      navigate('/login')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main style={{minHeight: '80vh', width: '600px', maxWidth: '90%', margin: 'auto'}}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <FormControl sx={inputStyles}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField margin="normal" id="name" placeholder="Name" {...register('name')}></TextField>
          </FormControl>
          <FormControl sx={inputStyles}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField margin="normal" id="email" type="email" placeholder="Email" {...register('email')}></TextField>
          </FormControl>
          <FormControl sx={inputStyles}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField margin="normal" id="password" type="password" placeholder="Password" {...register('password')}></TextField>
          </FormControl>
        </Stack>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </main>
  )
}
