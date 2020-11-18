import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import ImgMediaCard from './card.js';
import ImgMediaResultCard from './resultCard.js';

function PollCard() {
    return <ImgMediaCard />
}

function Container() {
    const marginStyle = {
        width:"10%",
    };

    const searchStyle = {
        width:"80%",
    };

    const offsetStyle = {
        height:"35%",
    };
    
    const holderStyle = {
        width:"58%",
        height:"100px"
    }

    const buttonStyle = {
        width:"12%",
        height:"55px",
        marginLeft:"10px"
    }
    

  return (
	<div class="app-container">

      <div class="header-nav"></div>
          <div class="main">
            <div class="main-left"></div>

                <div class="content-wrapper">
                    <div class="main-searchbar">
                        <div style={marginStyle}></div>        
                            <div style={searchStyle}>
                                    <TextField
                                      style={holderStyle}
                                      id="outlined-margin-none"
                                      defaultValue=""
                                      variant="outlined"
                                    />

                                    <Button style={buttonStyle} color="primary" variant="contained">검색</Button>
                            </div>
                        <div style={marginStyle}></div>        

                    </div>

                    <div class="content-tabheader">
                        <ImgMediaCard title="부먹vs찍먹" imgUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.theqoo.net%2Fimg%2FkXMfS.gif&f=1&nofb=1" option1="부먹" option2="찍먹" openDate="2020. 10. 24" />
                        <ImgMediaResultCard title="트럼프 우세" imgUrl="https://image.chosun.com/sitedata/image/202011/04/2020110400351_0.png" option1="트럼프" option2="바이든" openDate="2020. 10. 24" />
                    </div>
                    
                </div>

            <div class="main-right"></div>
          </div>
      <div class="footer"></div>

	</div>
  );
}

export default Container;
