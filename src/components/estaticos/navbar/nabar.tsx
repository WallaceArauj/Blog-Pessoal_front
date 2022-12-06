import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';


/*/ const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link to="/home">
            Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/about">
            About
            </Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
*/

function Navbar() {
  return (
      <>
          <AppBar position="static">
              <Toolbar variant="dense">
                  <Box style={{ cursor: "pointer" }} >
                      <Typography variant="h5" color="inherit">
                          BlogPessoal
                      </Typography>
                  </Box>

                  <Box display="flex" justifyContent="start">
                      <Box mx={1} style={{ cursor: "pointer" }}>
                          <Typography variant="h6" color="inherit">
                              home
                          </Typography>
                      </Box>
                      <Box mx={1} style={{ cursor: "pointer" }}>
                          <Typography variant="h6" color="inherit">
                              postagens
                          </Typography>
                      </Box>
                      <Box mx={1} style={{ cursor: "pointer" }}>
                          <Typography variant="h6" color="inherit">
                              temas
                          </Typography>
                      </Box>
                      <Box mx={1} style={{ cursor: "pointer" }}>
                          <Typography variant="h6" color="inherit">
                              cadastrar tema
                          </Typography>
                      </Box>
                      <Link to='/login' className='text-decorator-none'>
                          <Box mx={1} style={{ cursor: "pointer", color: "white" }}>
                              <Typography variant="h6" color="inherit">
                                  logout
                              </Typography>
                          </Box>
                      </Link>
                      
                  </Box>

              </Toolbar>
          </AppBar>
      </>
  )
}

export default Navbar