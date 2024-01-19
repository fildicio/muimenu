// App.js
import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import menuData from './menuData';

function App() {
  return (
    <div>
      <ResponsiveAppBar menuData={menuData} />
    </div>
  );
}

export default App;

