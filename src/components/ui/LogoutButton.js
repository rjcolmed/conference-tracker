import m from 'mithril'

const LogoutButton = {
  view: ({ attrs }) => {
    return m('div', { onclick: () => attrs.action }, 'click me')
  }
}

export default LogoutButton