import React from "react";
import { PureComponent } from "react";
import LoaderOn from "./Components/Loader/Loader";
import imageApi from "../src/api/imageApi";
import ImageGallery from "../src/Components/ImageGallery";
import Searchbar from "./Components/Searchbar";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

class App extends PureComponent {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    isLoader: false,
    error: null,
    showModal: false,
    modalImg: "",
  };

  onSetQuery = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoader: true });
    imageApi
      .fetchArticlesWithQuery(searchQuery, 1)
      .then((response) => this.setState({ images: response.data.hits }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  };
  onLoadMore = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoader: true });
    imageApi
      .fetchArticlesWithQuery(searchQuery, currentPage + 1)
      .then((response) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoader: false });
        window.scrollTo({
          top: document.querySelector(".ImageGallery").scrollHeight,
          behavior: "smooth",
        });
      });
  };
  onOpenModal = (e) => {
    this.setState({
      modalImg: e.target.dataset.source,
      showModal: true,
    });
  };
  onCloseModal = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.setState({
        modalImg: "",
        showModal: false,
      });
    }
  };
  render() {
    const { images, searchQuery } = this.state;
    return (
      <>
        <Searchbar
          onSubmit={this.onSubmit}
          onSetQuery={this.onSetQuery}
          searchQuery={searchQuery}
        />
        <ImageGallery
          images={this.state.images}
          onOpenModal={this.onOpenModal}
        />
        {this.state.isLoader && <LoaderOn />}
        {this.state.images.length !== 0 && (
          <Button onLoadMore={this.onLoadMore}></Button>
        )}
        {this.state.showModal && (
          <Modal
            modalImg={this.state.modalImg}
            onCloseModal={this.onCloseModal}
          />
        )}
      </>
    );
  }
}

export default App;
