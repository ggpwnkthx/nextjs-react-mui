import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navigator from './components/Navigator';
import { ThemeProvider } from '@mui/material';
import theme from './theme'
import Basic from './Basic';

const drawerWidth = 256;

export default function Dashboard(props: any) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                <CssBaseline />
                {props.navigation ? (
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    >
                        {isSmUp ? null : (
                            <Navigator
                                title={props.sitename}
                                drawer={{
                                    PaperProps: {
                                        style: {
                                            width: drawerWidth
                                        }
                                    },
                                    variant: "temporary",
                                    open: mobileOpen,
                                    onClose: handleDrawerToggle,
                                }}
                                navigation={props.navigation}
                            />
                        )}
                        <Navigator
                            title={props.sitename}
                            drawer={{
                                PaperProps: {
                                    style: {
                                        width: drawerWidth
                                    }
                                },
                                sx: {
                                    display: {
                                        sm: 'block',
                                        xs: 'none'
                                    }
                                }
                            }}
                            navigation={props.navigation}
                        />
                    </Box>
                ) : null}

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Basic title={props.title} sitename={props.sitename} onDrawerToggle={handleDrawerToggle}>
                        {props.children}
                    </Basic>
                </Box>
            </Box>
        </ThemeProvider>
    );
}