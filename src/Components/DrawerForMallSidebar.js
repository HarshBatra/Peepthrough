import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import SidebarMallData from '../constants/SidebarMallData';
import FilterListIcon from '@mui/icons-material/FilterList';

const DrawerForMallSidebar = ({setOpen}) => {
  const [state, setState] = React.useState(false);
  const navigate = useNavigate();
  const data = SidebarMallData;

  const list = () => (
    <Box
      sx={{ width: 290 }}
      role="presentation"
      onClick={()=>setState(!state)}
      onKeyDown={()=>setState(!state)}
    >
      <List>
        {data.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.category} />
                <span 
                    className='ml-3 text-[10px] rounded-full bg-gray-400 h-[30px] w-[30px] text-stone-50 flex justify-center items-center'
                >
                    {item.count}
                </span>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='ml-auto md:hidden'>
        <React.Fragment>
          <Button onClick={()=>setState(!state)}><FilterListIcon sx={{color:"black"}} /></Button>
          <Drawer
            anchor="left"
            open={state}
            onClose={()=>setState(!state)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

export default DrawerForMallSidebar;