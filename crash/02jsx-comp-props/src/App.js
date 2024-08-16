import './App.css';
import Planets from './components/planets'

function App() {
  // const name ='dev'
  // const age =19;
  // let isValid =age>=19?'green':'red';
  // return (
  //    <>
  //      <h1 className='heading' style={{color:'{isValid}' }}>hemlo {name}</h1>
  //     <Card count ={7} />
  //     <Card count ={3}/>
  //    </>
  //    );
  // const names = [
  //   {
  //     name: 'a',
  //     age: 21,
  //   },
  //   {
  //     name: 'b',
  //     age: 22,
  //   },
  //   {
  //     name: 'c',
  //     age: 23,
  //   },
  //
  // ]
//   return (
//     <>
//       {names.map((name) => {
//         return <h1>name: {name.name}<br/>age: {name.age}</h1>
//       })}
//     </>
//   )
  return(
  <>
 <Planets/>
  </>
  )
 }

export default App;
