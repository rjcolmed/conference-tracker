import m from 'mithril'

import ConferenceField from './ConferenceField'

const ConferenceCard = {
  view: ({ attrs }) => {
    return m('div', [
      m('div', [
        m(ConferenceField, { fieldValue: `${attrs.conference.name} @ ${attrs.conference.location}`}),
        m(ConferenceField, { fieldValue: '*' })
      ]),
      m('div', [
        m(ConferenceField, { fieldValue: attrs.conference.date }),
        m(ConferenceField, { fieldValue: '19 d 20 hr 45 m' })
      ])
     
    ])
  }
}

export default ConferenceCard