import React, { useState, useEffect } from 'react';
import { Collapse, ListItemText, ListItemButton, List, subheader, ListSubheader } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import SidebarMallData from '../constants/SidebarMallData';


function SidebarMall() {
    const data = SidebarMallData;
    const[open,setOpen] = useState(Array.from({length: data.length}, () => false));


    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
            className='tracking-wider border'
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" className='border-b'>
                  <div className='font-semibold text-3xl my-3'>Category</div>
                </ListSubheader>
              }
        >
            {data.map((item, idx) => {
                return (
                    <>
                        <ListItemButton onClick={() => setOpen((old)=>old.map((val,i)=>i===idx?!val:val))}>
                            <ListItemText primary={item.category} />
                            {open[idx] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open[idx]} timeout="auto" unmountOnExit>
                            {item.shops.map((shop,idx)=>{
                                return(
                                    <List component="div" disablePadding key={idx}>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText primary={shop} />
                                        </ListItemButton>
                                    </List>
                                )
                            })
                            }
                        </Collapse>
                    </>
                )
            })

            }
        </List>
    );
}

export default SidebarMall;