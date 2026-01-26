function Time(){
   let t = new Date();
   return <p>Current Time : {t.toLocaleDateString()} - {t.toLocaleTimeString()}</p>
}
export default Time;