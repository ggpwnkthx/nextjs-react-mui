import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Copyright from './components/Copyright';
import { ThemeProvider } from '@mui/material';
import theme from './theme'

export default function Basic(props: any) {

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                <CssBaseline />
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Header title={props.title} onDrawerToggle={props.onDrawerToggle} />
                    <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
                        {props.children}
                    </Box>
                    <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
                        <Copyright sitename={props.sitename} />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}