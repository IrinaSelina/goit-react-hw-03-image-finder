import React from "react";
import { Component } from "react";
import "./Modal.css";
// const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.props.onCloseModal(e);
      }
    });
  }
  render() {
    return (
      <div className="Overlay" onClick={this.props.onCloseModal}>
        <div className="Modal">
          <img src={this.props.modalImg} alt="" width="600px" />
        </div>
      </div>
    );
  }
}

export default Modal;
