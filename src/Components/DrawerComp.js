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
import { useNavigate } from 'react-router-dom';

const DrawerComp = ({setOpen}) => {
  const [state, setState] = React.useState(false);
  const navigate = useNavigate();
  const ItemsForNav = [
    {
      name:"Home",
      icon:<Home />,
      href:"#"
    }, 
    {
      name:"Categories",
      icon:<Category />,
      href:"#categories"
    },
    {
      name:"Cities",
      icon:<LocationCity />,
      href:"#cities"
    },{
      name:"Testimonials",
      icon:<ChatBubble />,
      href:"#testimonials"
    },
    {
      name:"Blog",
      icon:<Book />,
      href:"#blog"
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
            <a href={item.href}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
      <div className='flex justify-start'>
        <button className="bg-teal-500 text-white w-32 h-8 px-4 border border-teal-500 rounded z-50 hover:bg-white hover:text-teal-500 ml-4 mb-4" onClick={()=>setOpen((open)=>!open)}>
          Log In
        </button>
        <button className="bg-white text-teal-500 w-32 h-8 px-4 border border-teal-500 rounded z-50 hover:bg-teal-500 hover:text-white ml-4" onClick={()=>navigate("/advertise")}>
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