import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

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

export default function ImgMediaResultCard(props) {
      const classes = useStyles();
      //<Chip label="정치"  color="primary" variant="outlined" />
    
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
