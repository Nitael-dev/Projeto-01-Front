import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LoginRoom } from './pages/login'

function App() {


  return (
    <BrowserRouter>
        <Route path="/signin" component={LoginRoom} />
    </BrowserRouter>
    )
}

export default App;