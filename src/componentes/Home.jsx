import React from 'react';
import { Box, Tabs, Tab } from '@material-ui/core';
import App from './App.jsx';
import SobreNosotros from './SobreNosotros.jsx';

export default function Home() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>

      <Tabs
        className='Tabs'
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >

        <Tab value="one" label="Pagina principal" />
        <Tab value="two" label="Nuestro grupo" />
        
      </Tabs>
      {value === 'one' && <App />}
      {value === 'two' && <SobreNosotros />}

    </Box>
  );
}
