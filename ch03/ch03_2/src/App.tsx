import './App.css';
import Tailwindcss from './pages/Tailwindcss'
import Color from './pages/Color'
import TextsTest from './pages/TextsTest'

export default function App() {
  return (
    <div>
      <TextsTest />
      <Color />
      <Tailwindcss />
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//export default App;