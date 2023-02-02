import React, {useState, useEffect} from 'react';
import { Collapse, ListItemText, ListItemButton, List, ListSubheader, ListItemIcon } from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder, Dashboard, Storefront, Book, Lock, SettingsSystemDaydream, Info, QuestionAnswer, Reviews, Person, Newspaper, Settings, Email, Group,} from '@mui/icons-material';
import { CSSComponents } from './CSSComponents';


function Sidebar() {

    const [openBlog, setOpenBlog] = useState(false);
    const [openMarkets, setOpenMarkets] = useState(false);
    const [openReviews, setOpenReviews] = useState(false);
    const [openVisitor, setOpenVisitor] = useState(false);
    const [openShopkeeper, setOpenShopkeeper] = useState(false);
  
    return (
      <List
        sx={{ 
          width: '100%', 
          maxWidth: 360, 
          bgcolor: 'background.paper',
          // background: "linear-gradient(147.22deg, #13A89E -31.1%, rgba(19, 168, 158, 0) 77.92%)",
          // color:"white" 
        }}
        className='tracking-wider border'
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" className='border border-x-0 border-t-0'>
            <div className='text-center font-bold'><Lock className='mr-1' /> You are logged in as admin</div>
            <div className='flex'><h1 className='mr-auto'>Store front</h1><button className='ttracking-wider'>Log Out</button></div>
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton onClick={()=>setOpenMarkets(!openMarkets)}>
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="Markets" />
          {openMarkets ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMarkets} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={()=>setOpenBlog(!openBlog)}>
          <ListItemIcon>
            <Book />
          </ListItemIcon>
          <ListItemText primary="Blog" />
          {openBlog ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openBlog} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <SettingsSystemDaydream />
          </ListItemIcon>
          <ListItemText primary="Module" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary="About us" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <QuestionAnswer />
          </ListItemIcon>
          <ListItemText primary="Enquiry" />
        </ListItemButton>

        <ListItemButton onClick={()=>setOpenReviews(!openReviews)}>
          <ListItemIcon>
            <Reviews />
          </ListItemIcon>
          <ListItemText primary="Reviews" />
          {openReviews ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openReviews} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={()=>setOpenVisitor(!openVisitor)}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Visitor" />
          {openVisitor ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openVisitor} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          <ListItemText primary="Mails" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Newspaper />
          </ListItemIcon>
          <ListItemText primary="Newsletter list" />
        </ListItemButton>

        <ListItemButton onClick={()=>setOpenShopkeeper(!openShopkeeper)}>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Shop Keeper" />
          {openShopkeeper ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openShopkeeper} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>

      </List>
    );
}

export default Sidebar;