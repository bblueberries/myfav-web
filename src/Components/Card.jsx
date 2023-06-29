import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import { useNavigate } from "react-router";
export default function ActionAreaCard(props) {
  let cardDetail = props.cardDetail;
  let url = props.url;
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: cardDetail.width, borderRadius: "0" }}>
      <CardActionArea onClick={() => navigate(url)}>
        <CardMedia
          component="img"
          height="100%"
          image={cardDetail.imgsrc}
          alt="pics"
          loading="lazy"
        />
      </CardActionArea>
      <CardContent sx={{ maxHeight: "1" }}>
        <Typography gutterBottom variant="h5" component="div">
          {cardDetail.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardDetail.detail}
        </Typography>

        <Button>GET START</Button>
      </CardContent>
    </Card>
  );
}
