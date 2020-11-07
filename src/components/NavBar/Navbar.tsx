import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
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
    titlecolor: {
      color: "#5AFF30",
    },
  })
);

export default function CustomNavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);

    console.log(anchorEl);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);

    console.log(anchorEl2);
  };

  const handleClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl3(event.currentTarget);

    console.log(anchorEl2);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <span className={classes.titlecolor}>Covid</span>
            <span>Tracke</span>
            <span className={classes.titlecolor}>React</span>
          </Typography>
          <Button color="inherit">
            <Link
              to="/dayone"
              style={{ textDecoration: "none", display: "block" }}
            >
              Day One
            </Link>
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Live
          </Button>
          <Menu
            id="live-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link
              to="/live/after/date"
              style={{ textDecoration: "none", display: "block" }}
            >
              <MenuItem onClick={handleClose}>Live After Date</MenuItem>
            </Link>
            <Link
              to="/live/daily/country"
              style={{ textDecoration: "none", display: "block" }}
            >
              <MenuItem onClick={handleClose}>Live Daily Country</MenuItem>
            </Link>
          </Menu>
          <Button color="inherit">
            <Link
              to="/summary"
              style={{ textDecoration: "none", display: "block" }}
            >
              Summary
            </Link>
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick2}
          >
            Top 10
          </Button>
          <Menu
            id="top-menu"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleClose}
          >
            <Link
              to="/rank/total"
              style={{ textDecoration: "none", display: "block" }}
            >
              <MenuItem onClick={handleClose}>Top 10 Total</MenuItem>
            </Link>
            <Link
              to="/rank/daily"
              style={{ textDecoration: "none", display: "block" }}
            >
              <MenuItem onClick={handleClose}>Top 10 Daily</MenuItem>
            </Link>
          </Menu>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick3}
          >
            Country
          </Button>
          <Menu
            id="top-menu"
            anchorEl={anchorEl3}
            keepMounted
            open={Boolean(anchorEl3)}
            onClose={handleClose}
          >
            <Link
              to="/country/total"
              style={{ textDecoration: "none", display: "block" }}
            >
              <MenuItem onClick={handleClose}>Country Total</MenuItem>
            </Link>
            <Link
              to="/country/status"
              style={{ textDecoration: "none", display: "block" }}
            >
              <MenuItem onClick={handleClose}>Country by Status</MenuItem>
            </Link>
            <Link
              to="/country/status/dates"
              style={{ textDecoration: "none", display: "block" }}
            >
              <MenuItem onClick={handleClose}>
                Country Status Between Dates
              </MenuItem>
            </Link>

            <Link
              to="/country/cases/dates"
              style={{ textDecoration: "none", display: "block" }}
            >
              <MenuItem onClick={handleClose}>
                Country Cases Between Dates
              </MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
