import m from 'mithril'
import Container from './Container'
import NavBar from './NavBar'


const App = {
  view: () => m('div', [
    m(Container),
    m(NavBar)
  ])
}

export default App
