import React from 'react';
import * as Survey from 'survey-react';
import AddButton from './addbutton';

class App extends React.Component {
  constructor() {
    super();

    this.state = { allQuestions: {
      questions:
      [
        {
          name: "Testing",
          type: "text",
          title: "Please enter something",
          isRequired: true,
        }
      ]
    }
    };
  }

  onComplete = (result) => {
    console.log("Completed");
  }

  addQuestion = (e) => {
    let curQuestions = Object.assign({}, this.state.allQuestions);
    curQuestions.questions.push({
      name: "Testing2",
      type: "text",
      title: "Pls",
      isRequired: false,
    });
    this.setState({ allQuestions: curQuestions });
    console.log(this.state.allQuestions)
  };

  render() {
    let model = new Survey.Model(this.state.allQuestions);
    let all

    return (
      <div className="App">
        <Survey.Survey model={ model } />
        <AddButton click= { this.addQuestion } />
      </div>
    );
  }
}

export default App;
