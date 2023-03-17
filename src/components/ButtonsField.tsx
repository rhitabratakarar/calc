import React from "react";
import Button from "react-bootstrap/Button";

const ButtonsField: React.FC<Props> = (props): React.ReactElement => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex m-2 justify-content-between">
        <Button value="9" onClick={props.onClick} className="mx-2 w-25">
          9
        </Button>
        <Button value="8" onClick={props.onClick} className="mx-2 w-25">
          8
        </Button>
        <Button value="7" onClick={props.onClick} className="mx-2 w-25">
          7
        </Button>
        <Button value="+" onClick={props.onClick} className="mx-2 w-25">
          +
        </Button>
      </div>
      <div className="d-flex m-2 justify-content-between">
        <Button value="6" onClick={props.onClick} className="mx-2 w-25">
          6
        </Button>
        <Button value="5" onClick={props.onClick} className="mx-2 w-25">
          5
        </Button>
        <Button value="4" onClick={props.onClick} className="mx-2 w-25">
          4
        </Button>
        <Button value="-" onClick={props.onClick} className="mx-2 w-25">
          -
        </Button>
      </div>
      <div className="d-flex m-2 justify-content-between">
        <Button value="3" onClick={props.onClick} className="mx-2 w-25">
          3
        </Button>
        <Button value="2" onClick={props.onClick} className="mx-2 w-25">
          2
        </Button>
        <Button value="1" onClick={props.onClick} className="mx-2 w-25">
          1
        </Button>
        <Button value="*" onClick={props.onClick} className="mx-2 w-25">
          *
        </Button>
      </div>
      <div className="d-flex m-2 justify-content-between">
        <Button value="." onClick={props.onClick} className="mx-2 w-25">
          .
        </Button>
        <Button value="0" onClick={props.onClick} className="mx-2 w-25">
          0
        </Button>
        <Button value="C" onClick={props.onClick} className="mx-2 w-25">
          {"<-"}
        </Button>
        <Button value="/" onClick={props.onClick} className="mx-2 w-25">
          /
        </Button>
      </div>
    </div>
  );
};

export default ButtonsField;

interface Props {
  onClick: any
}
