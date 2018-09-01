import m from 'mithril'

const NavButton = {
  view: ({ attrs }) => {
    return m('a', {href: `#!/${attrs.path}`}, attrs.icon)
  }
}

export default NavButton