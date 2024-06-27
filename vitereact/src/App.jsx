const welcome = {
  greeting:'Hello',
  title:'React'
}
const myArray = [1,2,3,4,5];
let result = myArray.map(function(number){return number*2});
console.log(result);
function App() {
  return (
   <h1>{welcome.greeting} {welcome.title}</h1>
  )
}

export default App
