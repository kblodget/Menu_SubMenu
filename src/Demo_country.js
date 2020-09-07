import Button from "@material-ui/core/Button";
import Menu from "./CascadeMenu";
import React from "react";

const menuitems = [
  {
    key: "1",
    caption: "Asia",
    onClick: () => {}
  },
  {
    key: "2",
    caption: "Australia",
    onClick: () => {}
  },
  {
    key: "3",
    caption: "Europe",
    onClick: () => {}
  },
  {
    key: "4",
    caption: "Latin",
    onClick: () => {}
  },
  {
    key: "5",
    caption: "South African",
    onClick: () => {}
  },
  {
    key: "5",
    caption: "United Kingdom",
    onClick: () => {}
  },
  {
    key: "usa-key",
    caption: "USA",
    subMenuItems: [
      {
        key: "state-1",
        caption: "Alabama",
        onClick: () => {}
      },
      {
        key: "state-2",
        caption: "Alaska",
        onClick: () => {}
      },
      {
        key: "state-3",
        caption: "Arizona",
        onClick: () => {}
      },
      {
        key: "state-4",
        caption: "Arkansas",
        onClick: () => {}
      },
      {
        key: "state-5",
        caption: "California",
        onClick: () => {}
      },
      {
        key: "state-6",
        caption: "Colorado",
        onClick: () => {}
      },
      {
        key: "state-7",
        caption: "Connecticut",
        onClick: () => {}
      },
      {
        key: "state-8",
        caption: "Delaware",
        onClick: () => {}
      },
      {
        key: "state-9",
        caption: "District Of Columbia",
        onClick: () => {}
      },
      {
        key: "state-10",
        caption: "Florida",
        onClick: () => {}
      },
      {
        key: "state-11",
        caption: "Georgia",
        onClick: () => {}
      },
      {
        key: "state-12",
        caption: "Hawaii",
        onClick: () => {}
      },
      {
        key: "state-13",
        caption: "Idaho",
        onClick: () => {}
      },
      {
        key: "state-14",
        caption: "Illinois",
        onClick: () => {}
      },
      {
        key: "state-15",
        caption: "Indiana",
        onClick: () => {}
      },
      {
        key: "state-16",
        caption: "Iowa",
        onClick: () => {}
      },
      {
        key: "state-17",
        caption: "Kansas",
        onClick: () => {}
      },
      {
        key: "state-18",
        caption: "Kentucky",
        onClick: () => {}
      },
      {
        key: "state-19",
        caption: "Louisiana",
        onClick: () => {}
      },
      {
        key: "state-20",
        caption: "Maine",
        onClick: () => {}
      },
      {
        key: "state-21",
        caption: "Maryland",
        onClick: () => {}
      },
      {
        key: "state-22",
        caption: "Massachusetts",
        onClick: () => {}
      },
      {
        key: "state-23",
        caption: "Michigan",
        onClick: () => {}
      },
      {
        key: "state-24",
        caption: "Minnesota",
        onClick: () => {}
      },
      {
        key: "state-25",
        caption: "Mississippi",
        onClick: () => {}
      },
      {
        key: "state-26",
        caption: "Missouri",
        onClick: () => {}
      },
      {
        key: "state-27",
        caption: "Montana",
        onClick: () => {}
      },
      {
        key: "state-28",
        caption: "Nebraska",
        onClick: () => {}
      },
      {
        key: "state-29",
        caption: "Nevada",
        onClick: () => {}
      },
      {
        key: "state-30",
        caption: "New Hampshire",
        onClick: () => {}
      },
      {
        key: "state-31",
        caption: "New Jersey",
        onClick: () => {}
      },
      {
        key: "state-32",
        caption: "New Mexico",
        onClick: () => {}
      },
      {
        key: "state-33",
        caption: "New York",
        onClick: () => {}
      },
      {
        key: "state-34",
        caption: "North Carolina",
        onClick: () => {}
      },
      {
        key: "state-35",
        caption: "North Dakota",
        onClick: () => {}
      },
      {
        key: "state-36",
        caption: "Ohio",
        onClick: () => {}
      },
      {
        key: "state-37",
        caption: "Oklahoma",
        onClick: () => {}
      },
      {
        key: "state-38",
        caption: "Oregon",
        onClick: () => {}
      },
      {
        key: "state-39",
        caption: "Pennsylvania",
        onClick: () => {}
      },
      {
        key: "state-40",
        caption: "Rhode Island",
        onClick: () => {}
      },
      {
        key: "state-41",
        caption: "South Carolina",
        onClick: () => {}
      },
      {
        key: "state-42",
        caption: "South Dakota",
        onClick: () => {}
      },
      {
        key: "state-43",
        caption: "Tennessee",
        onClick: () => {}
      },
      {
        key: "state-44",
        caption: "Texas",
        onClick: () => {}
      },
      {
        key: "state-45",
        caption: "Utah",
        onClick: () => {}
      },
      {
        key: "state-46",
        caption: "Vermont",
        onClick: () => {}
      },
      {
        key: "state-47",
        caption: "Virginia",
        onClick: () => {}
      },
      {
        key: "state-48",
        caption: "Washington",
        onClick: () => {}
      },
      {
        key: "state-49",
        caption: "West Virginia",
        onClick: () => {}
      },
      {
        key: "state-50",
        caption: "Wisconsin",
        onClick: () => {}
      },
      {
        key: "state-51",
        caption: "Wyoming",
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
