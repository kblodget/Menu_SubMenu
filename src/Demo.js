import Button from "@material-ui/core/Button";
import CascadeMenu from "./CascadeMenu";
import React from "react";

const menuitems = [
  {
    key: "international-1",
    caption: "Asian",
    onClick: (event) => {alert(event.target.textContent)}
  },
  {
    key: "international-2",
    caption: "Australasian",
    onClick: (event) => {alert(event.target.textContent)}
  },
  {
    key: "international-3",
    caption: "European",
    onClick: (event) => {alert(event.target.textContent)}
  },
  {
    key: "international-4",
    caption: "Latin",
    onClick: (event) => {alert(event.target.textContent)}
  },
  {
    key: "international-5",
    caption: "South African",
    onClick: (event) => {alert(event.target.textContent)}
  },
  {
    key: "international-6",
    caption: "United Kingdom",
    onClick: (event) => {alert(event.target.textContent)}
  },
  {
    key: "usa-key",
    caption: "North American",
    subMenuItems: [
      {
        key: "usaChapter-1",
        caption: "North Central",
        onClick: (event) => {alert(event.target.textContent)}
      },
      {
        key: "usaChapter-2",
        caption: "North East",
        onClick: (event) => {alert(event.target.textContent)}
      },
      {
        key: "usaChapter-3",
        caption: "South Central",
        onClick: (event) => {alert(event.target.textContent)}
      },
      {
        key: "usaChapter-4",
        caption: "South East",
        onClick: (event) => {alert(event.target.textContent)}
      },
      {
        key: "usaChapter-5",
        caption: "Western",
        onClick: (event) => {alert(event.target.textContent)}
      }
    ]
  }
];

export default class Demo extends React.Component {
  state = {
   // menuOpen: false,
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
        <CascadeMenu
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
