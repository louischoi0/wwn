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
import HowToVoteIcon from '@material-ui/icons/HowToVote';

import axios from 'axios';
import {SERVERURL} from './info.js';

const useStyles = makeStyles({
      root: {
              maxWidth: "50%",
              margin:"10px"
            },
      media: {
            margin:"10px"
      }
});

export function ImgMediaCard(props) {
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
                      <HowToVoteIcon />
                        {props.title}
                      <HowToVoteIcon />
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
              </Card>
            );
}

function get_cast_callback(topic_id,user_id,option) {

  return () => {
    const endpoint = SERVERURL + "/vote/cast"
    console.log(endpoint);

    axios.post(endpoint,{
      user_id : user_id,
      topic_id : topic_id,
      option_id :option
    },function(response){
      console.log(response);
    });
  }

}

export default function ImgMediaResultCard(props) {
      const classes = useStyles();
      const topic_id = props.topic_id;

      const callback_1 = get_cast_callback(topic_id,"0","0");
      const callback_2 = get_cast_callback(topic_id,"0","1");

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
                      <Chip label="3"  color="primary" variant="outlined" onClick={callback_1}/>
                      <span> {props.title}</span>
                      <Chip label="3"  color="primary" variant="outlined" onClick={callback_2} />
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

