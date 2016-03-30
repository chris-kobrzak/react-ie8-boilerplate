import React from 'react'

export default class Application extends React.Component {
  render () {
    let foo = message => ( `Hello ${message}` )
    return <h1>{ foo('world!') }</h1>
  }
}
