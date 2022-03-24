import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Avatar from '@mui/material/Avatar';
import { Typography, Stack } from '@mui/material'

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Details" value="1" sx={{ fontSize: "20px" }} />
            <Tab label="Bids" value="2" sx={{ fontSize: "20px" }} />
            <Tab label="Activity" value="3" sx={{ fontSize: "20px" }} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Typography sx={{ color: "#b9c6d8", mt: 2 }}>
            Hey guys! 
          </Typography>
          <Stack mt={3} spacing={1}>
            <Typography variant="h5">Owner</Typography>
            <Stack direction="row" spacing={1} alignItems={'center'}>
              <Avatar src="https://shreethemes.in/superex/layouts/images/client/09.jpg"
                alt="avartar"
                sx={{ width: '40px', height: '40px' }}
              />
              <Typography variant="h5">PandaOne</Typography>
            </Stack>
          </Stack>
        </TabPanel>
        {/* Bids Tab */}
        <TabPanel value="2">
          <Stack direction="row" spacing={2} mt={2}>
            <Avatar src="https://shreethemes.in/superex/layouts/images/client/01.jpg"
              alt="avartar"
              sx={{ width: '54px', height: 'auto' }}
            />
            <Stack >
              <Typography variant="h5">2 WETH by 0xe849fa28a...ea14</Typography>
              <Typography sx={{ fontSize: '15px', color: "#b9c6d8" }}>6 hours ago</Typography>
            </Stack>
          </Stack>
        </TabPanel>
        {/* Activity Tab */}
        <TabPanel value="3">
          <Stack direction="row" spacing={2} mt={2} alignItems="center" sx={{border: "1px solid rgb(255 255 255 / 15%)", borderRadius: '10px', p: 3}}>
            <img src="https://shreethemes.in/superex/layouts/images/items/1.jpg"
              alt="avartar"
              style={{ width: '80px', height: '80px', borderRadius: '10px' }}
            />
            <Stack >
              <Typography variant="h5">Digital Art Collection</Typography>
              <Typography sx={{ fontSize: '15px', color: "#b9c6d8" }}>
                Started Following <span style={{ color: "primary" }}>@Panda</span>
              </Typography>
              <Typography sx={{ fontSize: '15px', color: "#b9c6d8" }}>
                1 hours ago
              </Typography>
            </Stack>
          </Stack>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
