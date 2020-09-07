import Button from "@material-ui/core/Button";
import Menu from "./CascadeMenu";
import React from "react";

const menuitems = [
  {
    key: "international-1",
    caption: "Asian",
    onClick: () => {alert()}
  },
  {
    key: "international-2",
    caption: "Australasian",
    onClick: () => {}
  },
  {
    key: "international-3",
    caption: "European",
    onClick: () => {}
  },
  {
    key: "international-4",
    caption: "Latin",
    onClick: () => {}
  },
  {
    key: "international-5",
    caption: "South African",
    onClick: () => {}
  },
  {
    key: "international-6",
    caption: "United Kingdom",
    onClick: () => {}
  },
  {
    key: "usa-key",
    caption: "North American",
    subMenuItems: [
      {
        key: "usaChapter-1",
        caption: "North Central",
        onClick: () => {}
      },
      {
        key: "usaChapter-2",
        caption: "North East",
        onClick: () => {}
      },
      {
        key: "usaChapter-3",
        caption: "South Central",
        onClick: () => {}
      },
      {
        key: "usaChapter-4",
        caption: "South East",
        onClick: () => {}
      },
      {
        key: "usaChapter-5",
        caption: "Western",
        onClick: () => {}
      }
    ]
  }
];

export default class Demo extends React.Component {
  state = {
    menuOpen: false,
    menuAnchorEl: null
  };

  handleMenuOpen = (event) => {
    this.setState({
      ...this.state,
      menuAnchorEl: event.currentTarget
    });
  };

  handleMenuClose = () => {
    this.setState({
      ...this.state,
      menuAnchorEl: null
    });
  };

  render() {
    return (
      <div>
        <Button
          aria-controls="cascading-menu"
          aria-haspopup="true"
          onClick={(event) => {
            this.handleMenuOpen(event);
          }}
        >
          Chapters
        </Button>
        <Menu
          id="cascading-menu"
          autoFocused
          menuitems={menuitems}
          anchorElement={this.state.menuAnchorEl}
          open={Boolean(this.state.menuAnchorEl)}
          onClose={this.handleMenuClose}
        />
      </div>
    );
  }
}
