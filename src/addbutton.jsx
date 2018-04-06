import React from 'react';

class AddButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={ this.props.click } >Add Question </button>
    );
  }
}

export default AddButton;
