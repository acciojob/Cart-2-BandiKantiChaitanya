import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import Cart from './Cart'
import Header from './Header'


function App() {
    
  return (
    <div className='main' >
       
       <Header/>

        <Switch>
            <Route exact path='/' component={Cart} />
            {/* <Route path='/cart' component={Cart}  />
            <Route path='/' /> */}
        </Switch>
    </div>
  )
}

export default App