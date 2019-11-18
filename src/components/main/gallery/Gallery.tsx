import * as React from "react";
import "./Gallery.css";

type GalleryProps = {
  images: string[];
};
type GalleryState = {};

const imageAlternative: string = "Image disappered";

export class Gallery extends React.Component<GalleryProps, GalleryState> {
  state: GalleryState = {};

  render() {
    var imageList = this.props.images.map((image, index) => (
      <img
        src={image}
        key={index}
        alt={imageAlternative}
        className="gallery-image"
      ></img>
    ));
    return <div className="gallery">{imageList}</div>;
  }
}
