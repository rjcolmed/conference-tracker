import m from 'mithril'

import Banner from '../ui/Banner'

const Container = {
  view: () => {
    return m('div', [
      m(Banner)
    ])
  }
}

export default Container