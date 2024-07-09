import { useEffect, useState } from 'react'
import AritstsService from '../services/ArtistsService'
import Artist from '../models/Artist'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { CardActions } from '@mui/joy';
import { Link } from 'react-router-dom';
import { useSubscribe } from '../hooks/pubSubHook';

export default function ArtistList() {

  const [artists, setArtists] = useState<Artist[]>()

  useSubscribe('artist_created', (data: any) => {
    console.log(data)
    fetchData()
  })

  const fetchData = async () => {
    try {
      const response = await new AritstsService().getAll()
      console.log(response)
      setArtists(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section>
      <h2>Artist List</h2>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', rowGap: '2rem', justifyContent: 'space-between'}}>      
      {
        artists
        ? artists?.map((artist) => {
          return (
            <Card sx={{ maxWidth: 334, width: '100%' }} key={artist.id}>
              <div>
                <Typography level="title-lg">{artist.name}</Typography>
                <Typography level="body-sm">{artist.genre}</Typography>
              </div>
              <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                  src={artist.coverImg}
                  loading="lazy"
                  alt={artist.name}
                />
              </AspectRatio>
              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body-xs">{artist.bio}</Typography>
                </div>
              </CardContent>
              <CardActions>
                <Link to={`/artist/${artist.id}`}>
                  <Button type='button' variant='outlined'>See more</Button>
                </Link>
              </CardActions>
            </Card>
          )
        })
        : (
          <h3>No artists uploaded 💀</h3>
        )
      }
      </div>
    </section>
  )
}
