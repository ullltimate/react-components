//import { useState } from 'react'
//import './App.css'
import { Button } from 'react-bootstrap';


function Test() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
      </header>
    </>
  )
}

export default Test