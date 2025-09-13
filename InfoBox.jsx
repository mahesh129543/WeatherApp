import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
export default function InfoBox({Info}){

    
    const HOT_URL="https://images.unsplash.com/photo-1687095951902-31ec078b1a68?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL="https://images.unsplash.com/photo-1672836209739-1fab2deb32bc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZSUyMG5hdHVyYWx8ZW58MHx8MHx8fDA%3D"
   const RAINY_URL="https://images.unsplash.com/photo-1434118489318-42a0e62c6235?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjB3ZWF0aGVyJTIwaW1hZ2UlMjBuYXR1cmFsfGVufDB8fDB8fHww"
if(!Info.city){return <p> No Weather data found</p>;}

return (
    <div className='InfoBox'>
       

        <div className="cardcontainer">
    
    <Card sx={{ maxWidth: 355 }} className="card">
      <CardMedia
        sx={{ height: 200 }}
        image={Info.temp>25?HOT_URL:Info.temp>10?RAINY_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} >
            <p>Temp: {Info.temp}&deg;C</p>
            <p>Temp_max: {Info.temp_max}&deg;C</p>
            <p>Temp_min: {Info.temp_min}&deg;C</p>
           <p>Humidity: {Info.humidity}</p>
            <p>Pressure: {Info.pressure}</p>
             <p>The Weather can be describd as <b><i>{Info.weather}</i></b> and feels like : {Info.feelsLike}&deg;C </p>
         
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
)


}
