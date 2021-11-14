import { Component } from "react";
import PageHeader from "../Header/Header";
import "../Header/header.scss";
import "./upload.scss";
import PublishLogo from "../../Assets/Icons/publish.svg";

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
    // ? .. Form Checks .. ? \\
    let formValidationMsg = "";

    if (!this.isFormFilled()) {
      formValidationMsg = " Please input Your title and description";
    }

    let message = "";
    if (!this.state.formValid) {
      message = "Please check your inputs";
    }

    return (
      <main>
        <header>
          <PageHeader />
        </header>
        <section>
          <h1 className="form__title"> Upload Video </h1>
          <div className="form__thumbnail-ctn">
            <p className="form__thumbnail-title">Video Thumbnail</p>
            <div className="form__thumbnail-img" alt="Video Thumbnail"></div>
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
          <div className="form__btn-container">
            <div>
              <p className="form__cancel-btn">Cancel</p>
            </div>
            <div className="header__upload-btn">
              <img
                className="header__upload-img"
                alt="Publish Logo"
                src={PublishLogo}
              />
              <div className="header__upload-txt-container">
                <p className="header__upload-txt"> Publish</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default UploadForm;
