import * as React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';



function Home() {
     return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
        )

   /*  return (
        <div class="circles">
        <div></div>
        <div></div>
        <div></div>
        <span></span>
        </div>
    ) */
}


function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
            flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
          bgcolor: 'warning.main',
          color: 'white',
          p: 1,
          m: 1,
          borderRadius: 10,
          textAlign: 'center',
          fontSize: 109,
          fontWeight: '200',
          ...sx,
        }}
        {...other}
      />
    );
  }
  
  Item.propTypes = {
    sx: PropTypes.object,
  }


  export default function GridTemplateRows() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
          <Avatar style={{left: '35%', width: '30%' , height: '30%'}} src="https://ciicesi.estg.ipp.pt/images/researchers/R-001-WGS.png" />
          <Item>GRANDE MARCO NÃO CHATEIA</Item>
      </div>
    );
  }
