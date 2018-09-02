import m from 'mithril'
import CardContainer from './CardContainer'
import ConferenceCard from '../cards/ConferenceCard'

import Banner from '../ui/Banner'

const Container = {
  view: ({ attrs }) => {
    return m('div', [
      m(Banner, { action: () => console.log('clicked'), title: 'Conferences' }),
      m(CardContainer, attrs.conferences.map((conference, key) => {
        return m(ConferenceCard, { conference, key })
      }))
    ])
  }
}

export default Container