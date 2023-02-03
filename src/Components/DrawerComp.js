import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Home, Book, LocationCity, Category, ChatBubble, Menu } from '@mui/icons-material';

const DrawerComp = () => {
  const [state, setState] = React.useState(false);
  const ItemsForNav = [
    {
      name:"Home",
      icon:<Home />
    }, 
    {
      name:"Categories",
      icon:<Category />
    },
    {
      name:"Cities",
      icon:<LocationCity />
    },{
      name:"Testimonials",
      icon:<ChatBubble />
    },
    {
      name:"Blog",
      icon:<Book />
    }
  ];

  const list = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={()=>setState(!state)}
      onKeyDown={()=>setState(!state)}
    >
      <List>
        {ItemsForNav.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className='flex justify-start'>
        <button className="bg-teal-500 text-white w-32 h-8 px-4 border border-teal-500 rounded z-50 hover:bg-white hover:text-teal-500 ml-4 mb-4">
          Log In
        </button>
        <button className="bg-white text-teal-500 w-32 h-8 px-4 border border-teal-500 rounded z-50 hover:bg-teal-500 hover:text-white ml-4">
          Advertise
        </button>
      </div>
    </Box>
  );

  return (
    <div className='ml-auto md:hidden'>
        <React.Fragment>
          <Button onClick={()=>setState(!state)}><Menu sx={{color:"black"}} /></Button>
          <Drawer
            anchor="right"
            open={state}
            onClose={()=>setState(!state)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

export default DrawerComp;