import { FormGroup, FormLabel, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import UsersService, { LoginData } from "../services/UsersService";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/joy";
import { usePublisher } from "../hooks/pubSubHook";

export default function Login() {

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const publisher = usePublisher()

  const onSubmit = async(data: LoginData) => {
    try {
      const res = await new UsersService().login(data)
      localStorage.setItem('codetunes-token', res.data.token)
      localStorage.setItem('codetunes-user', res.data.user)
      publisher('login-event', res.data)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main style={{minHeight: '80vh', width: '600px', maxWidth: '90%', margin: 'auto'}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <FormGroup sx={{marginBottom: '10px'}}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField id="email" placeholder="email" type="email" margin="dense" {...register('email')}></TextField>
          </FormGroup>
          <FormGroup sx={{marginBottom: '10px'}}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField id="password" type="password" placeholder="Password" margin="dense" {...register('password')}></TextField>
          </FormGroup>
        </Stack>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </main>
  )
}
