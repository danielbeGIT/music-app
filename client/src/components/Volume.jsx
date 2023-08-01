import { Grid, Slider } from "@mui/material";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

const Volume = ({ spotifyApi }) => {
  const setVolume = (e) => {
    // Nothing here
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDownIcon className="volume_icon" />
        </Grid>
        <Grid item xs className="volume_slider">
          <Slider 
            aria-labelledby="continuous-slider" 
            type="range" 
            min={0} max={100} 
            onMouseUp={(e=>setVolume(Number(e.target.value)))} 
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Volume