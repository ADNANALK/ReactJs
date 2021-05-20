import React, { useState } from 'react';
const MAX_RATE = 5;

export default function Rate(props,{ style }){
  const [rate, setRate] = useState(4);

  // setRate(props.rate);

  return (
    <div style={{ ...style, ...styles.container }} >
      {[...Array(props.rate)].map(v => <div style={{ ...styles.circle, ...styles.filledCircle }}></div>)}
      {[...Array(MAX_RATE - props.rate)].map(v => <div style={styles.circle}></div>)}

    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  circle: {
    borderRadius: '50%',
    width: 20,
    height: 20,
    border: '2px solid #232323',
    margin: '0px 1px'
  },
  filledCircle: {
    backgroundColor: '#FFCD3F'
  }
}