import { Component } from "react";
import PageHeader from "../Header/Header";
import "../Header/header.scss";
import "./upload.scss";
import PublishLogo from "../../Assets/Icons/publish.svg";
import RandomVideoImg from "../../Assets/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
class UploadForm extends Component {
  state = {
    formTitle: "",
    formDescription: "",
    formValid: true,
  };

  // ? .. Create Handler function .. ? \\

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // ? .. Checks if form fields are filled .. ? \\

  isFormFilled = () => {
    if (!this.state.formTitle || !this.state.formDescription) {
      return false;
    }
  };

  // ? .. If form is good post data .. \\
  handleSubmit = (event) => {
    event.preventDefault();

    if (this.isFormFilled()) {
      this.setState({ formValid: true });
    } else {
      this.setState({ formValid: false });
    }
  };
  render() {
    return (
      <main>
        <header>
          <PageHeader />
        </header>
        <section className="upload__section">
          <h1 className="form__title"> Upload Video </h1>
          <div className="upload__main">
            <div className="form__thumbnail-ctn">
              <p className="form__thumbnail-title">Video Thumbnail</p>
              <div className="form__thumbnail-video-container">
                <img
                  className="form__thumbnail-video"
                  src={RandomVideoImg}
                  alt="Random Cylcing Video"
                />
              </div>
            </div>
            <form className="form" onSubmit={this.handleSubmit}>
              <label>
                <h3 className="form__placeholder-video-title">
                  TITLE TO YOUR VIDEO
                </h3>
                <input
                  className="form__title-placholder-txt"
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  placeholder="Add a title to your video"
                />
              </label>
              <label>
                <h3 className="form__placeholder-description-title">
                  ADD A VIDEO DESCRIPTION{" "}
                </h3>
                <input
                  className="form__description-placholder-txt"
                  type="text"
                  name="description"
                  onChange={this.handleChange}
                  placeholder="Add a description to your video"
                />
              </label>
            </form>
          </div>

          <div className="form__btn-container">
            <Link to="/" className="header__upload-btn">
              <img
                className="header__upload-img"
                alt="Publish Logo"
                src={PublishLogo}
              />
              <div className="header__upload-txt-container">
                <p className="header__upload-txt"> Publish</p>
              </div>
            </Link>
            <div className="form__cancel-btn">
              <p className="form__cancel-btn-txt">Cancel</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default UploadForm;
