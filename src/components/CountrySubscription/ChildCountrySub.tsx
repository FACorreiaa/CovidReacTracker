import { MenuItem, Select } from "@material-ui/core";
import React, { FunctionComponent } from "react";
type GeneralCountryProps = {
  labelId: string;
  id: any;
  handleFieldChange: any;
  countryList: string[];
  value: string;
};

//const countryList = CountriesDropdown();
export const CountrySubForm: FunctionComponent<GeneralCountryProps> = ({
  labelId,
  id,
  handleFieldChange,
  countryList,
  value,
}) => (
  <Select labelId={labelId} id={id} value={value} onChange={handleFieldChange}>
    {countryList.map((value) => {
      return (
        <MenuItem
          value={value}
          style={{ height: "4em", width: "7em", textAlign: "left" }}
        >
          {value}
        </MenuItem>
      );
    })}
  </Select>
);
