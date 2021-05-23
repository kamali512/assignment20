import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import "./products.css"
import {useCardapi} from "./useFetchProducts"
import ScrollDialog from "./productDetail"

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 400,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  const [allProducts]= useCardapi()

  console.log("Card vali pro", allProducts)

  return (
    <div className="car">
    {
      allProducts.map((item)=>{
        return (
          <Card className={classes.root} className="wholeCard">
            <CardActionArea>
              
                <CardMedia
                  className={classes.media}
                  image={item.image}
                  title={item.title}
                  className="single"
                />
           
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Price: Rs {item.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            
            <CardActions>
              <ScrollDialog item={item}  />
            </CardActions>
          </Card>
        );
      })
    }
    </div>
  );
}
