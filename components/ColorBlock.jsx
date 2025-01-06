import React from 'react';

const ColorBlock = ({ color }) => {
  const style = {
    width: '50px',
    height: '50px',
    backgroundColor: color || 'gray',
  };

  return <div style={style}></div>;
};

export default ColorBlock;
