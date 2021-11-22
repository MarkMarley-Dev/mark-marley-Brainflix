import { Component } from "react";
import PageHeader from "../Header/Header";
import "../Header/header.scss";
import "./upload.scss";
import PublishLogo from "../../Assets/Icons/publish.svg";
import RandomVideoImg from "../../Assets/Images/Upload-video-preview.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

class UploadForm extends Component {
  state = {
    title: "",
    description: "",
    formValid: true,
  };

  postVideo = () => {
    console.log("this.state", this.state);
    axios
      .post("http://localhost:8080/videos", {
        title: this.state.title,
        description: this.state.description,
      })
      .then((response) => {
        console.log("You have sent the post request", response);
        toast.success("🎉 You Successfully uploaded your video 🎉 ", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.log("There was a problem with your post request", error);
      });
  };
  // ? .. Create Handler function .. ? \\

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  // ? .. Checks if form fields are filled .. ? \\

  isFormFilled = () => {
    if (this.state.title === "") {
      return false;
    }
  };

  // ? .. If form is good post data .. \\
  handleSubmit = (event) => {
    console.log("i clicked the button");
    event.preventDefault();

    if (this.isFormFilled()) {
      this.setState({ formValid: false });
      toast.error(
        " ⛔️ Please make sure all your input field are enterred correctly ⛔️",
        {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      this.setState({ formValid: true });
      this.postVideo();
    }
  };
  render() {
    return (
      <main>
        <header>
          <PageHeader />
        </header>
        <section className="upload__section">
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
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
                  placeholder="Add a title to your video"
                  onChange={this.handleChange}
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
                  placeholder="Add a description to your video"
                  onChange={this.handleChange}
                />
              </label>
              <div>
                <div className="form__btn-container ">
                  <button className="form__submit-btn" type="submit">
                    <img
                      className="form__btn-logo"
                      alt="Publish Logo"
                      src={PublishLogo}
                    />
                    <p className="header__upload-txt"> Publish</p>
                  </button>
                </div>

                <div className="header__upload-txt-container">
                  <div className="form__cancel-btn">
                    <p className="form__cancel-btn-txt">Cancel</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  }
}

export default UploadForm;
