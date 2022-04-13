import React from 'react'
import ReactDOM from 'react-dom'
import { AppCC, Calculator, Car, Clock, ContactForm, ClassComponents, Display, EssayForm, Example, FlavorForm, Football, HomePage, NameForm, NavMenu, NumbersList, Reservation, Shoot, Test, Welcome, App, Comment, ParentComponent } from './examples'
import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <AppCC />
    <Calculator />
    <Reservation />
    <FlavorForm />
    <EssayForm />
    <NameForm />
    <ContactForm />
    <ClassComponents />
    <Welcome name='NhanLe' />
    <App />
    <Comment />
    <ParentComponent />
    <Clock />
    <Car />
    <Test />
    <Football />
    <Shoot />
    <Example />
    <Display toDisplay />
    <HomePage />
    <NavMenu menuItem={[`1`, `2`, `3`, `4`, `5`]} />
    <NumbersList numbers={[`1`, `2`, `3`]} />
  </React.StrictMode>,
  document.getElementById('root')
)
