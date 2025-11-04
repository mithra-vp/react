
import './App.css'
// import Conditional from './embedding-expression/Conditional'
// import CallingFunction from './embedding-expression/CallingFunction'
// import Welcome from './embedding-expression/Welcome'
// import Basic from './Basic'

// function App() {

//   return (
//     <>
    {/* -------embedding-expression------- */}
    {/* <Basic/> */}
    {/* <Welcome/> */}
    {/* <Conditional/>
    </>
  )
}

export default App */}




// class components
import React, { Component } from 'react'
import Counter from './class-components/Counter'
import Mounting from './class-components/life-cycle-methods/Mounting'
import Update from './class-components/life-cycle-methods/Update'
// import BasicClass from './class-components/BasicClass'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <BasicClass/> */}
        {/* <Counter/> */}

        {/* --------life cycle methods--------- */}
        {/* this is when the component is being created and inserted into to DOM */}

        {/* <Mounting/> */}
        <Update/>
      </div>
    )
  }
}




// probs state