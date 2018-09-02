import m from 'mithril'

import Title from './Title'
import LogoutButton from './LogoutButton'

const Banner = {
  view: ({ attrs }) => {
    return m('div', [
      m(Title, { title: attrs.title }),
      m(LogoutButton, { action: attrs.action })
    ])
  }
}

export default Banner