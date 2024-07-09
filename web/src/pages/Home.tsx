import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import ArtistList from '../components/ArtistList'
import NewArtist from '../components/NewArtist'

export default function Home() {
  return (
    <Grid2 container spacing={4} sx={{minHeight: '80vh'}}>
      <Grid2 xs={4}>
        <NewArtist />
      </Grid2>
      <Grid2 xs={8}>
        <ArtistList />
      </Grid2>
    </Grid2>
  )
}
