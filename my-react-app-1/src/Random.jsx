function Random(){
   let num = Math.random()*100;
   return <h3 style={{'background-color':'red'}}>Random Number : {Math.round(num)}</h3>
}
export default Random;