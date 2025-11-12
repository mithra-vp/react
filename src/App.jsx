
import './App.css'
import ProductDetail from './dynamic-routing/ProductDetail'
import Products from './dynamic-routing/Products'
// import Products from './dynamic-routing/Products'
import { Routes, Route} from 'react-router-dom'
import Home from './nested-routing/pages/Home'
import Navbar from './nested-routing/Navbar'
import About from './nested-routing/pages/About'
import Services from './nested-routing/pages/Services'
import WebDev from './nested-routing/pages/services/WebDev'
import AppDev from './nested-routing/pages/services/AppDev'
// import Home from './react-router-dom/Home'
// import About from './react-router-dom/About'
// import Ref from './tasks/Ref'
// import { UserApiProvider } from './functional-components/hooks/useContext/userList/UserApiContext'
// import UserList from './functional-components/hooks/useContext/userList/UserList'
// import Home from './functional-components/hooks/useContext/theme/Home'
// import { ThemeProvider } from './functional-components/hooks/useContext/theme/ThemeContext'
// import UserList from './functional-components/hooks/useEffect/UserList'
// import UseUpdate from './functional-components/hooks/useEffect/UseUpdate'
// import UseEff from './functional-components/hooks/useEffect/useEff'
// import Object from './functional-components/hooks/useState/Object'
// import ToggleButton from './functional-components/hooks/useState/ToggleButton'
// import Input from './functional-components/hooks/useState/Input'
// import Counter from './functional-components/hooks/useState/Counter'
// import Props from './functional-components/Props'
// import State from './functional-components/State'
// import Basic from './functional-components/Basic'
// import Conditional from './embedding-expression/Conditional'
// import CallingFunction from './embedding-expression/CallingFunction'
// import Welcome from './embedding-expression/Welcome'

function App() {

  return (
    <>
      {/* -------embedding-expression-------}
    {/* <Basic/> */}
      {/* <Welcome/> */}
      {/* <Conditional/>*/}


      {/* functional-components */}
      {/* <Basic/> */}
      {/* <State/> */}
      {/* <Props/> */}

      {/* -------hooks--------- */}
      {/* -------useState----- */}
      {/* <Counter/> */}
      {/* <Input/> */}
      {/* <ToggleButton/> */}
      {/* <Object/> */}

      {/* ------useEffect------ */}
      {/* <UseEff/> */}
      {/* <UserList /> */}
      {/* <UseUpdate/> */}

      {/* ------useContext------ */}
      {/* 1. --(theme)-- */}
      {/* <ThemeProvider> */}
      {/* <Home/> */}
      {/* </ThemeProvider> */}
      {/* 2. user list */}

      {/* <UserApiProvider>
        <UserList/>
      </UserApiProvider> */}
      {/* <Ref/> */}

      {/* -----react-router-dom------ */}
      {/* 1. basic */}
      {/* <div>
        <nav>
          <Link to='/'>Home</Link>|
          <Link to='/about'>About</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div> */}

      {/* 2. ----dynamic-routing------ */}
      {/* <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
      </Routes> */}

      {/* 3. ----nested routing---- */}
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* nested route */}
          <Route path='/services' element={<Services/>}>
            <Route path='web-dev' element={<WebDev/>}/>
            <Route path='app-dev' element={<AppDev/>}/>
          </Route>          
        </Routes>
    </>
  )
}

export default App


// internal area    state
// probs     passing data



// class components
// import React, { Component } from 'react'
// import List from './embedding-expression/List'
// import ShouldUpdate from './class-components/life-cycle-methods/ShouldUpdate'
// import UnMounting from './class-components/life-cycle-methods/Unmounting'
// import Counter from './class-components/Counter'
// import Mounting from './class-components/life-cycle-methods/Mounting'
// import Update from './class-components/life-cycle-methods/Update'
// import BasicClass from './class-components/BasicClass'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
{/* <BasicClass/> */ }
{/* <Counter/> */ }

{/* --------life cycle methods--------- */ }
{/* this is when the component is being created and inserted into to DOM */ }

{/* <Mounting/> */ }
{/* <Update/> */ }
{/* <List/> */ }
{/* <ShouldUpdate/> */ }
{/* //         <UnMounting/>
//       </div> */}
{/* //     )
//   }
// } */}




// probs state