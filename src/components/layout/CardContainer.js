import m from 'mithril'

const CardContainer = {
  view: ({ children }) => {
    console.log(children)
    return m('div', children)
  }
}

export default CardContainer