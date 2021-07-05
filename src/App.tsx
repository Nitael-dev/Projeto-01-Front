import { BrowserRouter, Route,  } from 'react-router-dom'
import { LoginRoom } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Home } from './pages/Home'

function App() {


  return (
    <BrowserRouter>
        <Route path="/" exact component={LoginRoom} />
        <Route path="/signup" component={SignUp}/>
        <Route path="/mail"  component={Home}/>
    </BrowserRouter>
    )
}

export default App;