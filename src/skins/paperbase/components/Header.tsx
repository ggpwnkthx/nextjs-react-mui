import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const lightColor = 'rgba(255, 255, 255, 0.7)';

interface HeaderProps {
    title: string,
    tabs?: any,
    onDrawerToggle?: () => void;
}

export default function Header(props: HeaderProps) {

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        {props.onDrawerToggle ? (
                            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={props.onDrawerToggle}
                                    edge="start"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                        ): null}
                        <Grid item xs>
                            <Typography color="inherit" variant="h5" component="h1">
                                {props.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                sx={{ borderColor: lightColor }}
                                variant="outlined"
                                color="inherit"
                                size="small"
                            >
                                Button thing
                            </Button>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Help">
                                <IconButton color="inherit">
                                    <HelpIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {props.tabs ? (
                <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
                    <Tabs value={0} textColor="inherit">
                        {props.tabs}
                    </Tabs>
                </AppBar>
            ) : null }
        </React.Fragment>
    );
}