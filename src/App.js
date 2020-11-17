import './App.css';
import React, { Fragment, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Camera } from 'react-cam';
import {Line} from 'react-chartjs-2';

function capture(imgSrc) {
  console.log(imgSrc);
}

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Potholes',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}


function App() {
  const cam = useRef(null);
  return (
    <div className="App">
      <Fragment>
        <Camera
          showFocus={true}
          front={false}
          capture={capture}
          ref={cam}
          width="80%"
          height="auto"
          focusWidth="80%"
          focusHeight="60%"
          btnColor="white"
        />
        </Fragment> 
      <div className="chart">
          <Line
            data={state}
            options={{
              title:{
                display:true,
                text:'Potholes',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
    </div>
  );
}

export default App;
