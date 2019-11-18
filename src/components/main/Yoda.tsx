import React from "react";
import { ClipLoader } from "react-spinners";
import "./Yoda.css";

type YodaProps = {};

type YodaState = {
  inputText: string;
  yodaTranslation: string;
  errorMessage: string;
  displaySpinner: boolean;
  error: boolean;
};

export class Yoda extends React.Component<YodaProps, YodaState> {
  state: YodaState;

  constructor(props: YodaProps) {
    super(props);
    this.state = {
      inputText: "",
      yodaTranslation: "",
      errorMessage: "",
      displaySpinner: false,
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event: React.FormEvent) {
    var target = event.target as HTMLInputElement;
    this.setState({ inputText: target.value });
  }

  onSubmit(event: React.FormEvent) {
    event.preventDefault();
    var xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open(
      "POST",
      `https://api.funtranslations.com/translate/yoda?text=${this.state.inputText}`
    );
    xhr.send();
    this.setState({ displaySpinner: true });
    var self = this;
    xhr.onreadystatechange = function() {
      if (xhr.status === 200) {
        console.log(xhr.response);
        const response = JSON.parse(xhr.response);
        self.setState({
          inputText: "",
          yodaTranslation: response.contents.translated,
          displaySpinner: false
        });
      } else {
        const response = JSON.parse(xhr.response);
        self.setState({
          displaySpinner: false,
          error: true,
          errorMessage: response.error.message
        });
      }
    };
  }

  render() {
    return (
      <div className="yoda-body">
        <div className="yoda-container">
          <h1 className="yoda-header">Yoda Translator</h1>
          <h2 className="yoda-description">
            This translator converts normal English into Yoda’s way of speaking.
          </h2>
          <form className="yoda-form">
            <input
              type="text"
              value={this.state.inputText}
              onChange={this.handleChange}
              className="yoda-text-input"
              placeholder="Enter some text here"
            ></input>
            <button
              className="yoda-button"
              disabled={this.state.inputText ? false : true}
              onClick={this.onSubmit}
            >
              Confirm
            </button>
          </form>

          {this.state.displaySpinner ? (
            <div className="spinner-block">
              <ClipLoader size={150} color="#4b5ee8" />
            </div>
          ) : (
            <p
              className="yoda-text"
              style={{
                visibility:
                  this.state.yodaTranslation || this.state.errorMessage
                    ? "inherit"
                    : "hidden",
                backgroundColor: this.state.error ? "#e85e6c" : "#4b5ee8"
              }}
            >
              {this.state.error
                ? this.state.errorMessage
                : this.state.yodaTranslation}
            </p>
          )}
        </div>
      </div>
    );
  }
}
