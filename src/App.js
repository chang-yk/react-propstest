import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id : 1,
    name : "kimchi"
  },
  {
    id : 2,
    name : "banana"
  },
  {
    id : 3,
    name : "hahaha"
  },
  {
    id : 4,
    name : "tomato"
  },
  {
    id : 5,
    name : "potato"
  }
]

function Food({name}){
  return (
    <div>
      <h2>I like {name}</h2>
    </div>
  )
}

Food.propTypes = {
  name :  PropTypes.number.isRequired
}


function renderFood(dish){
    return  <Food key = {dish.id} name ={dish.name}></Food>
  
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}
/*
function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key = {dish.id} name ={dish.name}></Food>
      ))

      }
    </div>
  );
}
*/
export default App;
