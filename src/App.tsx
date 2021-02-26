import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar';

const Home = React.lazy(() => import('./Home'))

const App = () => {
    return (
        <Suspense fallback='loading...'>
            <Navbar></Navbar>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/'>
                    <div>404</div>
                </Route>
            </Switch>
        </Suspense>
    )
}

export default App
