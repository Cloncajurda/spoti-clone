import { useEffect, useState } from "react"
import Artist from "../models/Artist"
import { useParams } from "react-router-dom"
import AritstsService from "../services/ArtistsService"
import Typography from '@mui/joy/Typography';
import { Card, CardContent, CardCover, Grid } from "@mui/joy";
import SongsList from "../components/SongsList";
import NewSong from "../components/NewSong";
import { useSubscribe } from "../hooks/pubSubHook";

export default function ArtistDetail() {

  const [artist, setArtist] = useState<Artist | null>(null)
  const { artistId } = useParams<string>()

  const fetchData = async () => {
    try {
      if (artistId) {
        const response = await new AritstsService().getById(artistId)
        setArtist(response.data)
        console.log(response)
      } else {
        console.log()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { fetchData() }, [])

  useSubscribe('song_created', fetchData)

  return (
    <section>
      {
        artist &&
          <>
          <Card variant="outlined" style={{minHeight: '40rem'}}>
            <CardCover>
              <img
                src={artist.coverImg}
                loading="lazy"
                alt={`Cover image for ${artist.name}`}
                height={672}
                style={{minHeight: "672px"}}
              />
            </CardCover >
            <CardCover
              sx={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
              }}
            />
            <CardContent sx={{position: 'relative', zIndex: '10', justifyContent: 'center', width: '50%', padding: '2rem', gap: '1rem'}}>
              <Typography level="h1" textColor={'#fefefe'}>{artist.name}</Typography>
              <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }} textColor={'#fefefe'}>
                { artist.genre }
              </Typography>
              <Typography textColor={'#e3e3e3'}>
                { artist.bio }
              </Typography>
            </CardContent>
          </Card>

          <Grid container spacing={4} sx={{ flexGrow: 1 }}>
            <Grid xs={8}>
              <SongsList songs={artist.songs} />
            </Grid>
            <Grid xs={4}>
              <NewSong artistId={artist.id} />
            </Grid>
          </Grid>
          </>

      }
    </section>
  )
}
