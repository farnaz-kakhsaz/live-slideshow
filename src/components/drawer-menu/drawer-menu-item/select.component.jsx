import React from "react";
import PropTypes from "prop-types";
// Components
import BoxBase from "../../items-base/box-base/box-base";
import SelectBase from "../../items-base/select-base/select-base";
import FormControlBase from "../../items-base/form-control-base/form-control-base";
import MenuItemBase from "../../items-base/menu-item-base/menu-item-base";

export default function Select({
  boxText,
  menuItemValue,
  value,
  inputProps,
  onChange,
  classes,
}) {
  return (
    <BoxBase display="flex" justifyContent="space-between" alignItems="center">
      <BoxBase
        display="inline-block"
        color="text.secondary"
        fontWeight="fontWeightMedium"
      >
        {boxText}
      </BoxBase>
      <FormControlBase className={classes.formControl}>
        <SelectBase
          value={value}
          onChange={onChange}
          inputProps={inputProps}
          classes={{ select: classes.menuItem }}
        >
          {menuItemValue.map((item, index) => (
            <MenuItemBase value={item} className={classes.menuItem} key={index}>
              {item ? item : "false"}
            </MenuItemBase>
          ))}
        </SelectBase>
      </FormControlBase>
    </BoxBase>
  );
}

Select.propTypes = {
  boxText: PropTypes.string.isRequired,
  menuItemValue: PropTypes.array.isRequired,
  value: PropTypes.any.isRequired,
  inputProps: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};
