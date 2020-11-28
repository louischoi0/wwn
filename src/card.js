import React, { useState } from "react";
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import HomeIcon from '@material-ui/icons/Home';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import LinearProgress from '@material-ui/core/LinearProgress';
import ImgMediaResultCard from './resultCard.js'
import { ImgMediaCard } from './resultCard.js'

const useStyles = makeStyles({
      root: {
              maxWidth: 345,
              margin:"10px"
            },
      media: {
            margin:"10px"
      }
});

export default function PollCard(props) {
    const [ mode, setMode ] = useState(false);
    const handleMode = () => mode == true ? setMode(false) : setMode(true)
    
    return (
        <div>
            {mode == true ? <ImgMediaCard /> : <ImgMediaResultCard />}
        </div>
    )
}


