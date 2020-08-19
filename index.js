class color{
  constructor(name,hexcode){
      this.name=name;
      this.hexcode=hexcode;
  }
}

const allColors=[
  new color('red','#ff0000'),
  new color('yellow','#00ffff'),
  new color('blue','#0000ff'),
  new color('greeen','#00ff00'),
  new color('brown','#ffff00'),
];
// console.log(allColors);
exports.getRandomColor=()=>{
  console.log(allColors);
  return allColors[Math.floor(Math.random()*allColors.length)].hexcode;
}

exports.allColors=allColors;