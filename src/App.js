import React from 'react';
import GlobalStyle, { Container } from './styles'
import MissionsTable from './MissionsTable';
import Password from './Password';
import Modale from './Modale';

class App extends React.Component {

  state = { showPassword: true, showHoursPerDay: false }

  componentDidMount() {
    const hoursPerDay = window.localStorage.getItem('hoursPerDay');
    if (!hoursPerDay) window.localStorage.setItem('hoursPerDay', 7)
  }

  removePassword = () => this.setState({ showPassword: false })

  showChangeHoursPerDay = () => this.setState({ showHoursPerDay: true })
  hideChangeHoursPerDay = hours => {
    window.localStorage.setItem('hoursPerDay', hours)
    this.setState({ showHoursPerDay: false })
  }

  render() {
    const { showPassword, showHoursPerDay } = this.state;
    return(
      <>
        <GlobalStyle/>
        <Container>
          <MissionsTable changeHoursPerDay={this.showChangeHoursPerDay}/>
          {showPassword && <Password removeModal={this.removePassword}/>}
          {showHoursPerDay && (
            <Modale
              title="Changer le nombre d'heures par jour"
              onRemoveModaloread={this.hideChangeHoursPerDay}
              initValue={window.localStorage.getItem('hoursPerDay')}
            />
          )}
        </Container>
      </>
     )
  }
}

export default App;
