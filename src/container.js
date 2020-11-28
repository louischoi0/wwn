import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import PollCard from './card.js';
import ImgMediaResultCard from './resultCard';
import HomeIcon from '@material-ui/icons/Home';

import {SERVERURL } from './info.js';
import axios from 'axios';

import { useState } from 'react';

function get_topics(n,callback) {
    const endpoint = SERVERURL + '/topic/get'
    axios.get(endpoint,{
        params : {
            request_num : n
        }
    }).then(callback);
}

function TabHeader(props) {
    console.log(props.data);
    const data_array = props.data.slice(0,2);

    const rows = data_array.map((data) => <ImgMediaResultCard title={data.title} imgUrl={data.img_url} option1={data.option_1} option2={data.option_2} openDate={data.openDate} />);
    console.log(data_array);
    console.log(rows);
    console.log("TabHeader");

    return (
        <div class="content-tabheader">
            {rows}
        </div>
    );
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

    const [ data, setData ] = useState([]);
    const [ data2, setData2 ] = useState([]);
    const [ data3, setData3 ] = useState([]);

    useEffect( () => {
        function handle_data(response) {                
            const data = response.data.data

            const data0 = data.slice(0,2);
            const data1 = data.slice(2,4);
            const data2 = data.slice(4,6);

            setData(data0);
            setData2(data1);
            setData3(data2);

        };

        get_topics(2,handle_data);

        return function(){
            console.log("hihihi");
        }

    },[]);
    /**
                                    <TextField
                                      style={holderStyle}
                                      id="outlined-margin-none"
                                      defaultValue=""
                                      variant="outlined"
                                    />

                                    <Button style={buttonStyle} color="primary" variant="contained">검색</Button>
    **/

  return (
	<div class="app-container">

      <div class="header-nav"></div>
          <div class="main">
            <div class="main-left"></div>

                <div class="content-wrapper">
                    <div class="main-searchbar">
                        <div style={marginStyle}></div>        
                            <div style={searchStyle}>
                                    <Button style={buttonStyle} color="primary" variant="contained">베스트</Button>
                                    <Button style={buttonStyle} color="primary" variant="contained">유머</Button>
                                    <Button style={buttonStyle} color="primary" variant="contained">정치</Button>
                                    <Button style={buttonStyle} color="primary" variant="contained">일상</Button>
                            </div>

                        <div style={marginStyle}></div>        
                        
                    </div>
                       <TabHeader data={data} />
                       <TabHeader data={data3} />

                </div>

            <div class="main-right"></div>
          </div>
      <div class="footer"></div>

	</div>
  );
}

export default Container;
