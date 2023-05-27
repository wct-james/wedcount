import './App.css';
import { CountdownTimer } from './CountdownTimer';

function App() {

  const WED_DATE = new Date("2023-10-21 13:30:00");

  return (
    <div className='show-counter' >
      <CountdownTimer targetDate={WED_DATE}/>
    </div>
  );
}

export default App;
