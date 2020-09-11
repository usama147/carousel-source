import React, { Component } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



const photos = [
{
  name:"photo 1",
  url:"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989__340.jpg",
  info:"Amaizing sunset"
},
{
  name:"photo 2",
  url:"https://cdn.pixabay.com/photo/2017/03/27/16/50/beach-2179624__340.jpg",
  info:"Calming waters"
},
{
  name:"photo 3",
  url:"https://cdn.pixabay.com/photo/2020/09/03/15/37/waterscape-5541692__340.jpg",
  info:"Amaizing waterscape"
},
{
  name:"photo 4",
  url:"data:image/jpeg;base64,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",
  info:"Peacefull shore"
},
{
  name:"photo 5",
  url:"https://cdn.pixabay.com/photo/2020/09/03/13/53/fishing-boat-5541327__340.jpg",
  info:"Realxing lake"
},
{
  name:"photo 6",
  url:"https://cdn.pixabay.com/photo/2016/11/29/11/30/adventure-1869194__340.jpg",
  info:"Discover amaizing frigid lands"
},
{
  name:"photo 7",
  url:"https://cdn.pixabay.com/photo/2018/04/19/09/50/lion-3332729__340.jpg",
  info:"Majestic lions"
}
]

class App extends Component {
  render(){
    const settings ={
      dots:true,
      fade:true,
      infinte:true,
      speed:500,
      slidesToShow:1,
      arrows:true,
      slidesToScroll:1,
      className:"slides"
    }
  return (
    <div className="App">
    
    <Slider {...settings}>
    {photos.map((photo)=>{
      return(
        <div>
          <img width="100%"  src={photo.url}/>
      <p>{photo.info}</p>
        </div>
      )
    })}
      </Slider>
      <br/>
      <div>
        <br/>
        <hr className="hori"/>
        <h2>Nature</h2>
        <p>
        Nature is the best remedy for all problems over the world. Nature is an inspirational figure for various writers, novelists. We often heard that spending time in nature can freshen up our mind and body. Nature is the reason for living entities are surviving on earth. Nature is beneficial in all ways.The green forests, mountains, glaciers, are the striking scenic beauties of nature. On vacations, people move to a hill, beach or desert place. Because being with nature freshen up minds from the chaos of the world.
        </p>
        <br/>
    <p>Nature is important for all of us. It is the reason why life is there on earth. There are various species in nature. Nature created a balance for animals, microbes, coral reefs, and other living organisms. There is a specific branch in Science for studying the natural environment. In Geological aspects, nature is as deep as we can think. Every element says a different history. The sun, the moon depicts the beauty of nature.</p>
      </div>
      
    </div>
  );
}
}

export default App;
