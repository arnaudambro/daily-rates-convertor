
const hoursSeparator = 'h'
const hoursPerDay = 7

const computeDurationInHours = duration => Number(duration.split(hoursSeparator)[0]) + Number(duration.split(hoursSeparator)[1] / 60)

const makeSureTwoDigits = digits => digits < 10 ? `0${digits}` : digits

const hoursInDuration = hours => {
  const truncatedHours = Math.trunc(hours);
  const minutesInHours = makeSureTwoDigits(Math.round((hours - truncatedHours) * 60))
  return `${truncatedHours}${hoursSeparator}${minutesInHours}`
}

export const computeTotalDuration = missions => {
  const hours = missions.reduce(
    (summedHours, { duration, included }) => {
      if (!included) return summedHours
      if (!duration) return summedHours
      return summedHours + computeDurationInHours(duration)
    }, 0
  )
  return hoursInDuration(hours)
};

export const computeRevientDuration = ({ vente, revient, duration }) => {
  if (!duration) return ''
  const hours = computeDurationInHours(duration)
  const factor = revient / vente
  if (!factor) return duration
  return hoursInDuration(hours * factor)
}

export const computeTotalRevientDuration = missions => {
  const hours = missions.reduce(
    (summedHours, { duration, included, revient, vente }) => {
      if (!included) return summedHours
      if (!duration) return summedHours
      const factor = revient / vente
      if (!factor) return summedHours
      return summedHours + computeDurationInHours(duration) * factor
    }, 0
  )
  return hoursInDuration(hours)
};

export const computeFacturable = ({ included, revient, duration }) => {
  if (!duration) return ''
  if (!included) return ''
  const hoursPerDay = window.localStorage.getItem('hoursPerDay')
  const facturable = Math.round(computeDurationInHours(duration) / hoursPerDay * revient)
  return facturable + ' € HT'
}

export const computeTotalFacturable = missions => missions.reduce((total, mission) => {
  const facturable = computeFacturable(mission)
  if (!facturable) return total
  return total + Number(facturable.replace(' € HT', ''))
}, 0)

// export const computeVente = missions => missions.reduce((total, { included, vente, duration }) => total + (included ? 0 : vente), 0)
