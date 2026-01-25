function Hello(){
   let age = 19;
   let name = ()=>{
      return 'Nitin'
   };
   return <p>Hello I am {name()}, I am {age} years old.</p>
}
export default Hello;