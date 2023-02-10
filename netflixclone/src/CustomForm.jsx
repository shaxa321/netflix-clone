import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class CustomForm extends React.Component {
  state = {
    titleSearch: "",
  };
  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi il titolo del tuo libro"
              onInput={(e) => {
                if (e.nativeEvent.inputType === "deleteContentBackward") {
                  console.log("ok");
                  this.setState({
                    titleSearch: this.state.titleSearch.slice(0, -1),
                  });
                } else {
                  this.setState({
                    titleSearch: this.state.titleSearch + e.nativeEvent.data,
                  });
                }
              }}
            />
          </Form.Group>
        </Form>
        <p>{this.state.titleSearch}</p>
      </>
    );
  }
}

export default CustomForm;
