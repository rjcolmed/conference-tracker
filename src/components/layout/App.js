import m from 'mithril'
import Container from './Container'
import NavBar from './NavBar'

import { CONFERENCES } from '../../store/data'


const App = {
  view: () => { 
    return m('div', [
      m(Container, { conferences: CONFERENCES }),
      m(NavBar)
    ])
}
}

export default App
