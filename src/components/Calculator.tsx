import React from "react";
import TextField from "./TextField";
import ButtonsField from "./ButtonsField";

interface Props {
  name: string;
}

const Calculator: React.FC<Props> = (props): React.ReactElement => {
  const [value, setValue] = React.useState("");

  const buttonClickHandler: Function = (e: any): void => {
    if(e.target.value !== 'C') {      
      setValue((prevValue: string) => {
        return prevValue + e.target.value;
      });
    } else {
      setValue((prevValue: string) => {
        return prevValue.substring(0, prevValue.length - 1);
      })
    }
  };

  return (
    <div className="w-25">
      <TextField value={value} />
      <ButtonsField
        onClick={(e: Event) => {
          buttonClickHandler(e);
        }}
      />
    </div>
  );
};

export default Calculator;
