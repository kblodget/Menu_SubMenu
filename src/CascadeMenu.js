import React from "react";
import PropTypes from "prop-types";
import Menu from '@material-ui/core/Menu';
import MenuItem from "@material-ui/core/MenuItem";

import SubMenuItem from "./CascadeMenuItem";

export default class CascadeMenu extends React.Component {
  renderMenuItems = () => {
    const { menuitems } = this.props;
    return menuitems.map((menuItem) => {
      if (menuItem.hasOwnProperty("subMenuItems")) {
        return (
          <SubMenuItem
            key={menuItem.key}
            caption={menuItem.caption}
            menuitems={menuItem.subMenuItems}
          />
        );
      }

      return (
        <MenuItem key={menuItem.key} onClick={menuItem.onClick}>
          {menuItem.caption}
        </MenuItem>
      );
    });
  };

  render() {
    const { anchorElement, open, onClose, ...others } = this.props;
    return (
      <Menu
        autoFocused
        anchorEl={anchorElement}
        open={open}
        onClose={onClose}
        keepMounted
        {...others}
      >
        {this.renderMenuItems()}
      </Menu>
    );
  }
}

CascadeMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  menuitems: PropTypes.array.isRequired,
  anchorElement: PropTypes.any,
  onClose: PropTypes.func.isRequired
};

/* Example of menuitems:
[
    {
        'key': 'item1',
        'caption': 'Item 1',
        'onClick': (event) => function () {
        }
    },
    {
        'key': 'item2',
        'caption': 'Item 2',
        'onClick': (event) => function () {
        }
    },
    {
        'key': 'item3',
        'caption': 'Item 3',
        'subMenuItems': [
            {
                'key': 'item1',
                'caption': 'Item 1',
                'onClick': (event) => function () {
                }
            },
            {
                'key': 'item2',
                'caption': 'Item 2',
                'onClick': (event) => function () {
                }
            }
        ]
    }
];
 */
