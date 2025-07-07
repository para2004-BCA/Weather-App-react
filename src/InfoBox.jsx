import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css"


export default function InfoBox({info }){
    const INIT_URL="https://images.unsplash.com/photo-1599496675986-8282edbbcd49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   const HOT_URL="https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=612x612&w=is&k=20&c=LzGX1eZTBvpNMvXXFs5wfYQCzf7ThvKb4cVUZCkirKk="
   const COLD_URL="https://images.unsplash.com/photo-1587640542932-064a5291cfbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   const RAIN_URL="https://plus.unsplash.com/premium_photo-1667143951629-a1b2acc1a832?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 
   
    return(
    <>
    <div className="InfoBox">
    <div className="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:(info.temp>20?HOT_URL:COLD_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80?<ThunderstormIcon/>:
          (info.temp>20?<SunnyIcon/>:<AcUnitIcon/>)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',component:"span"}}>
        <div>Temperature= {info.temp}&deg;C</div>
        <div>Humidity= {info.humidity}</div>
        <div>Min Temp= {info.tempMin}&deg;C</div>
        <div>Max Temp= {info.tempMax}&deg;C</div>
        <div>The Weather feels like {info.feelslike}&deg;C</div>
        </Typography>
      </CardContent>
    
    </Card>
    </div>
    </div>
    </>)
}