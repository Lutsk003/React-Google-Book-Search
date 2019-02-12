import React, { Component } from "react";
import { 
  AppBar,
  withStyles, 
  Toolbar,
  Typography, 
  Button, 
  IconButton,
  List,
  Grid,
  ListItem,
  ListItemText,
  InputBase
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const styles = theme => ({
  AppBar: {
    position: "relative"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    align: "left"
  },
  root: {
    display: "flex",
    flexGrow: 1
  },
  grow: {
    flex: 1,
    textAlign: "center"
  },
  savedLink: {
    marginRight: "auto",
    textAlign:"right",
    flexGrow: 1
  }
});

class Nav extends React.Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnMount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {

    const { classes } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => this.toggleNav}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{textDecoration:"none"}}>
            <Typography variant="h5" color="inherit" className={classes.grow}>
              Google Book Search
            </Typography>
          </Link>
          <div className={classes.savedLink}>
            <Link to="/saved" style={{textDecoration:"none"}}>
              <Typography variant="h5" color="inherit">
                Saved Books
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}
export default withStyles(styles)(Nav);
    
     
//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
//         <Link className="navbar-brand" to="/">
//           Google Books
//         </Link>
//         <button
//           onClick={this.toggleNav}
//           className="navbar-toggler"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link
//                 onClick={this.toggleNav}
//                 className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
//                 to="/"
//               >
//                 Search
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 onClick={this.toggleNav}
//                 className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
//                 to="/saved"
//               >
//                 Saved
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }
