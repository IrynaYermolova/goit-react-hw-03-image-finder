import { StyledBtn } from './Button.styled';
import PropTypes from 'prop-types';

function Button({ onClick }) {
  return <StyledBtn onClick={onClick}>Load more</StyledBtn>;
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;