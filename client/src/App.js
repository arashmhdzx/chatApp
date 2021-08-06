import { BrowserRouter as Router , Route } from 'react-router-dom'
import React from 'react'
import Join from "./components/Join/Join.js"
import Chat from "./components/Chat/Chat.js"

 const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
        </Router>
    )
}

export default App