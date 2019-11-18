import * as React from "react";
import { Gallery } from "./gallery/Gallery";
import "./ImageUploader.css";

type ImageUploaderProps = {};

type ImageUploaderState = {
  inputUrl: string;
  images: string[];
  showError: boolean;
};

const imagePlaceholder: string =
  "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081";

export class ImageUploader extends React.Component<
  ImageUploaderProps,
  ImageUploaderState
> {
  state: ImageUploaderState;
  constructor(props: ImageUploaderProps) {
    super(props);
    this.state = {
      inputUrl: "",
      images: [],
      showError: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event: React.FormEvent) {
    var target = event.target as HTMLInputElement;
    this.setState({ inputUrl: target.value });
  }

  onSubmit(event: React.FormEvent) {
    event.preventDefault();
    var image: HTMLImageElement = new Image();
    image.onload = () => {
      this.setState(prevState => ({
        images: [...prevState.images.slice(0, -1), prevState.inputUrl],
        inputUrl: ""
      }));
    };
    image.onerror = () => {
      this.setState(prevState => ({
        inputUrl: "",
        // images: prevState.images.slice(0, -1),
        showError: true
      }));
      setTimeout(
        () =>
          this.setState(prevState => ({
            showError: false,
            images: prevState.images.slice(0, -1)
          })),
        3000
      );
    };

    this.setState(prevState => ({
      images: [...prevState.images, imagePlaceholder]
    }));
    image.src = this.state.inputUrl;
  }

  render() {
    return (
      <div className="image-uploader">
        <div className="image-uploader-container">
          <div
            className="image-uploader-wrong-image-url-info"
            style={{ visibility: this.state.showError ? "inherit" : "hidden" }}
          >
            <h2 className="image-uploader-wrong-image-url-info-text">
              This image does not exist. Please, enter correct URL.
            </h2>
          </div>
          <h1 className="image-uploader-header">Please enter image URL</h1>
          <form className="image-uploader-form">
            <input
              type="text"
              value={this.state.inputUrl}
              onChange={this.handleChange}
              className="image-uploader-text-input"
            ></input>
            <button
              className="image-uploader-button"
              onClick={this.onSubmit}
              disabled={this.state.inputUrl ? false : true}
            >
              Confirm
            </button>
          </form>
        </div>
        <Gallery images={this.state.images} />
      </div>
    );
  }
}
