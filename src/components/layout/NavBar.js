import m from 'mithril'

import NavButton from '../ui/NavButton'

const NavBar = {
  view: () => m('nav', [
    m(NavButton, { path: 'cfp' }),
    m(NavButton, { path: 'conferences' }),
    m(NavButton, { path: 'entry' })
  ])
}

export default NavBar