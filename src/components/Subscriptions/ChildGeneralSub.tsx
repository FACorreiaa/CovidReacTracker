import { Button } from "@material-ui/core";
import Input from "@material-ui/core/Input/Input";
import React, { FunctionComponent } from "react";

type GeneralSubProps = {
  value: string;
  onChange: any;
  placeholder: string;
  onSubmit: any;
};
export const GeneralSubForm: FunctionComponent<GeneralSubProps> = ({
  placeholder,
  onChange,
  value,
  onSubmit,
}) => (
  <form onSubmit={onSubmit}>
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <Button type="submit" variant="contained">
      Submit data
    </Button>
  </form>
);
