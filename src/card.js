import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
      root: {
              maxWidth: 345,
              margin:"10px"
            },
      media: {
            margin:"10px"
      }
});

function ImgMediaResultCard(props) {
      const classes = useStyles();
    
      return (
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={props.imgUrl}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <LinearProgress variant="determinate" value={66} />
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
              </Card>
            );
}

function ImgMediaCard(props) {
      const classes = useStyles();

      return (
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={props.imgUrl}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <Button size="small" color="primary">
                        {props.option1}
                      </Button>
                      <Button size="small" color="primary">
                        {props.option2}
                      </Button>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    {props.openDate}
                  </Button>
                </CardActions>
              </Card>
            );
}

export default function PollCard(props) {
    const [ mode, setMode ] = useState(false);
    const handleMode = () => mode == true ? setMode(false) : setMode(true)
    
    return (
        <div>
            {mode == true ? <ImgMediaCard /> : <ImgMediaResultCard />}
        </div>
    )
}

