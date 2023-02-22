import React, { useState, useEffect } from 'react';
import { ListItemText, ListItemButton, List, ListSubheader } from '@mui/material';
import SidebarMallData from '../constants/SidebarMallData';


function SidebarMall() {
    const data = SidebarMallData;
    const[open,setOpen] = useState(Array.from({length: data.length}, () => false));


    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 300,
                minWidth: 280,
                bgcolor: 'background.paper',
            }}
            className='tracking-wider border h-fit'
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
                            <span 
                                className='ml-3 text-[10px] rounded-full bg-gray-400 h-[30px] w-[30px] text-stone-50 flex justify-center items-center'
                            >
                                {item.count}
                            </span>
                        </ListItemButton>
                    </>
                )
            })

            }
        </List>
    );
}

export default SidebarMall;