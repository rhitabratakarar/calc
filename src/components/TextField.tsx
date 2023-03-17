import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TextField: React.FC<Props> = (props): React.ReactElement => {
  
  const handleSubmit: Function = (e: any): void => {
    const exprElement: HTMLInputElement = document.getElementById("expr") as HTMLInputElement;
    // eslint-disable-next-line no-eval
    exprElement.value = eval(exprElement.value);
  };

  return (
    <InputGroup className="m-2">
      <Form.Control
        value={props.value}
        placeholder="Expression Needed"
        id="expr"
        readOnly={true}
      />
      <Button
        onClick={(e) => {
          handleSubmit(e);
        }}
        variant="outline-secondary"
        id="button-addon2"
      >
        Validate
      </Button>
    </InputGroup>
  );
};

interface Props {
  value: string;
}

export default TextField;
