import React from 'react';
import SwipeToDelete from 'react-swipe-to-delete-ios'
import { Table, TableCell, TableRow, Input, Unit, BigButton, Buttons } from './styles'
import * as utils from './utils'

const newMission = (vente = 400, revient = 550) => ({
  included: true,
  mission: '',
  duration: '',
  vente,
  revient,
})

class MissionsTable extends React.Component {

  state = {
    missions: JSON.parse(window.localStorage.getItem('missions')) || [],
    captureClient: false,
  }

  addMission = () => {
    this.setState(({ missions }) => {
      if (!missions.length) return { missions: [newMission()] }
      const { vente, revient } = missions[missions.length - 1]
      return { missions: [...missions, newMission(vente, revient)] }
    })
  }

  handleDelete = index => {
    this.setState(
      ({ missions }) => ({ missions: missions.filter((_, ind) => ind !== index) }),
      () => this.save()
    )
  }

  handleIncluded = (e) => {
    const index = Number(e.target.value);
    this.setState(({ missions }) => ({ missions: missions.map((mission, ind) => {
      if (ind !== index) return mission
      return {
        ...mission,
        included: !mission.included
      }
    }) }), () => this.save())
  }

  handleChangeField = (e) => {
    e.persist()
    const index = Number(e.target.dataset.index);
    this.setState(({ missions }) => ({ missions: missions.map((mission, ind) => {
      if (ind !== index) return mission
      return {
        ...mission,
        [e.target.dataset.label]: e.target.value
      }
    }) }), () => this.save())
  }

  save = () => {
    window.localStorage.setItem('missions', JSON.stringify(this.state.missions))
  }

  handleCancelEvent = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  toggleCaptureClient = () => this.setState(({ captureClient }) => ({ captureClient: !captureClient }))

  render() {
    const { missions, captureClient } = this.state;
    return(
      <>
        <Buttons>
          <BigButton onClick={this.addMission}>
              Ajouter une mission
          </BigButton>
          <BigButton onClick={this.props.changeHoursPerDay}>
              Changer le nombre d'heures par jour ({window.localStorage.getItem('hoursPerDay')})
          </BigButton>
          <BigButton highlight={captureClient} onClick={this.toggleCaptureClient}>
              Capture client
          </BigButton>
        </Buttons>
        <Table hideCells={captureClient}>
          <TableRow header>
            <TableCell data-type="check">Inclure</TableCell>
            <TableCell data-type="mission">Mission</TableCell>
            <TableCell data-type="duration">Durée (HHhMM)</TableCell>
            <TableCell data-type="calcul-duree">Durée{captureClient ? '' : ' équivalente'}</TableCell>
            <TableCell data-type="vente">TJM{captureClient ? '' : ' de vente'} (€&nbsp;HT&nbsp;/&nbsp;j)</TableCell>
            <TableCell data-type="revient">TJM de revient (€&nbsp;HT&nbsp;/&nbsp;j)</TableCell>
            <TableCell data-type="calcul-revient">Facturable HT</TableCell>
          </TableRow>
          {missions.map((mission, ind) => {
            const { included, mission: nom, duration, vente, revient } = mission
            if (!included && captureClient) return null
            return (
              <SwipeToDelete
                onDelete={() => this.handleDelete(ind)}
                deleteColor="#137102"
                deleteText="Supprimer"
                height={50}
                key={ind}
              >
                <TableRow>
                  <TableCell as="button" data-type="check" value={ind} onClick={this.handleIncluded}>
                      <input
                        key={included}
                        type="checkbox"
                        checked={included}
                        value={ind}
                        onChange={this.handleIncluded}
                        onClick={this.handleCancelEvent}
                      />
                    </TableCell>
                  <TableCell data-type="mission">
                    <Input
                      key={included}
                      type="text"
                      value={nom}
                      data-index={ind}
                      data-label="mission"
                      onChange={this.handleChangeField}
                    />
                  </TableCell>
                  <TableCell data-type="duration">
                    <Input
                      key={included}
                      type="text"
                      value={duration}
                      data-index={ind}
                      restricted
                      data-label="duration"
                      onChange={this.handleChangeField}
                    />
                  </TableCell>
                  <TableCell data-type="calcul-duree">{utils.computeRevientDuration(mission)}</TableCell>
                  <TableCell data-type="vente">
                    <Input
                      key={included}
                      type="text"
                      value={vente}
                      data-index={ind}
                      data-label="vente"
                      restricted
                      onChange={this.handleChangeField}
                      alignRight
                    />
                    {vente && <Unit>€&nbsp;HT&nbsp;/&nbsp;j</Unit>}
                  </TableCell>
                  <TableCell data-type="revient">
                    <Input
                      key={included}
                      type="text"
                      value={revient}
                      data-index={ind}
                      data-label="revient"
                      restricted
                      onChange={this.handleChangeField}
                      alignRight
                    />
                    {revient && <Unit>€&nbsp;HT&nbsp;/&nbsp;j</Unit>}
                  </TableCell>
                  <TableCell data-type="calcul-revient">{utils.computeFacturable(mission)}</TableCell>
                </TableRow>
              </SwipeToDelete>
            )
          })}
          <TableRow footer>
            <TableCell data-type="check" />
            <TableCell data-type="mission">TOTAL</TableCell>
            <TableCell data-type="duration">{utils.computeTotalDuration(missions)}</TableCell>
            <TableCell data-type="calcul-duree">{utils.computeTotalRevientDuration(missions)}</TableCell>
            <TableCell data-type="vente" />
            <TableCell data-type="revient" />
            <TableCell data-type="calcul-revient">{utils.computeTotalFacturable(missions)} €&nbsp;HT</TableCell>
          </TableRow>
        </Table>
      </>
     )
  }
}

export default MissionsTable;
