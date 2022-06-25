import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const percentage = 66;

function Timer() {
  return (
      <div>
          <p>Timer</p>
          <CircularProgressbar value={percentage} text={`${percentage}%`}
          styles={build}
          />;
      </div>
  
  )
}

export default Timer