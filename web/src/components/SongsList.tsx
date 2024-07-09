import Song from '../models/Song'
import { List, ListItem, Typography, Grid } from '@mui/joy'
import AudioFileIcon from '../assets/icons/audio-file-icon.svg'

export default function SongsList({songs}: {songs: Song[]}) {
  return (
    <section>
      <Typography level='h2' sx={{marginBlock: '1rem'}}>Songs</Typography>
      <List>
        {
          songs.length > 0
          ? songs.map(song => {
            console.log(song);
            return (
              <ListItem key={song.id}>
                <Grid container spacing={2} sx={{flexGrow: 1}} alignItems={'center'}>
                  <Grid xs={1}>
                    <img src={AudioFileIcon} alt="audio file icon" width={'100%'} />
                  </Grid>
                  <Grid xs={3}>
                    <p style={{marginBlock: 0, marginBottom: '6px'}}><strong>{song.title}</strong></p>
                    <p style={{marginBlock: 0, color: 'rgb(140 140 140)', fontSize: '13px'}}>{song.album}</p>
                    <p style={{marginBlock: 0, color: 'rgb(140 140 140)', fontSize: '13px'}}>{song.genre}</p>
                  </Grid>
                  <Grid xs={2}>
                    <img src={song.coverImg} alt={`Cover of song ${song.title}`} style={{width: '100%'}} />
                  </Grid>
                  <Grid xs={6}>
                    <audio controls style={{width: '100%'}}>
                      <source src={song.cludinarySecureUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </Grid>
                </Grid>
              </ListItem>
            )
          })
          : (
            <h3>No songs uploaded 💀</h3>
          )
        }
      </List>
    </section>
  )
}
