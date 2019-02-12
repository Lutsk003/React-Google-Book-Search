import React from "react";
import "./style.css";
import { 
  Paper,
  Typography
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    height: 200,
    margin: 30,
    padding: 20
  }
})

class Jumbotron extends React.Component {
  render() {

    const { classes } = this.props

    return(
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5">
            Google Book Search
          </Typography>
          <Typography component="p">
            Search for a book to begin!
          </Typography>
        </Paper>
      </div>
    )
  }
}

  

// function Jumbotron({ children }) {
//   return <div className="jumbotron mt-4">{children}</div>;
// }

export default withStyles(styles)(Jumbotron);
