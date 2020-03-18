import React from 'react';
import Modale from './Modale';
import md5 from 'md5'

console.log(md5('coronavirus'))

class Password extends React.Component {

  handlePasswordChange = password => {
    const hashedPass = md5(password)
    if (hashedPass === process.env.REACT_APP_PASSWORD) this.props.removeModal()
  }

  render() {
    return(
      <Modale
        title="Mot de passe"
        placeholder="Mot de passe"
        onChange={this.handlePasswordChange}
        background="#000"
      />
     )
  }
}

export default Password;
