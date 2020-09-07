import React from "react";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "./CascadeMenu";
import ArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import {withStyles} from '@material-ui/core/styles'

const styles = () => {
  return {
    subMenuItem: {
      display: "flex",
      justifyContent: "space-between"
    }
  }             
};

class CascadeMenuItem extends React.Component {
  state = {
    menuOpen: false,
    anchorElement: null
  };

  /*
  setMenuOpen = () => {
    this.setState({
      ...this.state,
      menuOpen: !this.state.menuOpen
    });
  }
  */

  handleItemClick = (event) => {
    if (!this.state.anchorElement) {
      this.setState({
        ...this.state,
        anchorElement: event.currentTarget,
        menuOpen: true
      });
    }
  };

  handleSubMenuClose = () => {
    this.setState({
      ...this.state,
      menuOpen: false
    });
  };

  render() {
    const { caption, menuitems, classes } = this.props;
    console.log("menuOpen ", this.state.menuOpen);
    console.log("anchorElement ", this.state.anchorElement);
    return (
      <React.Fragment>
        <MenuItem
          autoFocused
          onClick={this.handleItemClick}
          className={classes.subMenuItem}
        >
          {caption}
          <ArrowRightIcon />
        </MenuItem>
        <Menu
          autoFocused
          open={this.state.menuOpen}
          menuitems={menuitems}
          anchorElement={this.state.anchorElement}
          getContentAnchorEl={null}
          onClose={this.handleSubMenuClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        />
      </React.Fragment>
    );
  }
}

CascadeMenuItem.propTypes = {
  caption: PropTypes.string.isRequired,
  menuitems: PropTypes.array.isRequired
};

export default withStyles(styles)(CascadeMenuItem);
