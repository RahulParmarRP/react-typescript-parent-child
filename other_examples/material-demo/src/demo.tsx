import React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = createStyles({
  root: {
    background: "blue",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
});

export interface IProps extends WithStyles<typeof useStyles> {}

class HigherOrderComponent extends React.Component<IProps> {
  render() {
    const { classes } = this.props;

    return <Button className={classes.root}>Higher-order component</Button>;
  }
}

export default withStyles(useStyles)(HigherOrderComponent);
