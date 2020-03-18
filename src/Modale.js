import React from 'react';
import styled from 'styled-components';
import { BigButton, Buttons } from './styles';

class Modale extends React.Component {

  state = {
    value: this.props.initValue || ''
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value }, () => {
      this.props.onChange(value)
    })
  }

  handleClick = () => this.props.onRemoveModal(this.state.value)
  handleCancel = () => this.props.onRemoveModal(this.props.initValue)

  render() {
    const { placeholder, background, title, onRemoveModal, initValue } = this.props;
    return(
      <ModaleStyled background={background}>
        <Alert>
          <Title>{title}</Title>
          <Input
            type="password"
            autoFocus
            onChange={this.handleChange}
            placeholder={placeholder || initValue}
          />
          {onRemoveModal && (
            <Buttons>
              <BigButton type="submit" onSubmit={this.handleClick} onClick={this.handleClick}>Valider</BigButton>
              <BigButton onClick={this.handleCancel}>Annuler</BigButton>
            </Buttons>
          )}
        </Alert>
      </ModaleStyled>
     )
  }
}

Modale.defaultProps = {
  onChange: () => null,
  onRemoveModal: null,
}

const ModaleStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.background || '#00000099'};
`

const Alert = styled.form`
  width: 500px;
  height: 300px;
  border-radius: 15px;
  background: white;
  flex-direction: column;
`

const Title = styled.span`
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: bold;
`;

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #24b100;
  width: 80%;
  height: 40px;
  text-align: center;
  margin-bottom: 30px;
`

export default Modale;
