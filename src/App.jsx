import './App.css';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className='App'>
      <Counter initialValue={2} inc={3} />
    </div>
  );
}

export default App;

// {
//   /* <Counter initialValue={0} />
//       <Counter initialValue={2} /> */
// }
