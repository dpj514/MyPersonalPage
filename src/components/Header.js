import React from 'react';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import Typography from '@material-ui/core/Typography/index';
import Menu from '@material-ui/core/Menu/index'


class Header extends React.Component {
    state = {
        auth: true
    };

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography color="inherit">
                        我的个人页面
                    </Typography>
                    <Menu>

                    </Menu>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;