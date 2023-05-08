import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import { Overlay, StyledModal,StyledImg  } from './Modal.styled';

const modalRoot = document.querySelector('#modal');

class Modal extends Component {
  static propTypes = {
    modalData: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
    onModalClose: PropTypes.func,
  };

  handleCloseModal = e => {
    e.preventDefault();
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  render() {
    const { largeImageURL, tags } = this.props.modalData;
    return createPortal(
      <Overlay onClick={this.handleCloseModal}>
        <StyledModal>
          <StyledImg src={largeImageURL} alt={tags} ></StyledImg>
        </StyledModal>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
