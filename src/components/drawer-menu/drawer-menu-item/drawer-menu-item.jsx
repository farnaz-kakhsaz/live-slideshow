import React from "react";
import PropTypes from "prop-types";
// Components
import CheckboxBase from "../../items-base/checkbox-base/checkbox-base.component";
// Material-UI
import Container from "@material-ui/core/Container";

export default function DrawerMenuItem({
  enableMouseEvents,
  numberOfCardsPerScreen,
  handleDrawerItemChange,
}) {
  return (
    <Container>
      <CheckboxBase
        value={enableMouseEvents}
        name="enableMouseEvents"
        label="Enable Mouse Event"
        handleCheckboxChange={handleDrawerItemChange(enableMouseEvents)}
      />
    </Container>
  );
}

DrawerMenuItem.propTypes = {
  enableMouseEvents: PropTypes.bool.isRequired,
  numberOfCardsPerScreen: PropTypes.number.isRequired,
  handleDrawerItemChange: PropTypes.func.isRequired,
};
