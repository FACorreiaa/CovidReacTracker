import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import Input from "@material-ui/core/Input/Input";
import { Label } from "@material-ui/icons";
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
      console.log("countryListList", countryList);
      console.log("value", value);

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
