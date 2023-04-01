import { Routes, Route, Link} from 'react-router-dom'
import Menu from "./components/Menu"
import Algo from './components/Algo'
import Algo2 from './components/Algo2'
const app = () => {
    return <>
        <div>
            <Link to="/" >algo</Link>
            <Link to="/algo" >algo2</Link>
        </div>
        <Routes>
            <Route path="/" element={<Algo />} />
            <Route path="/algo" element={<Algo2 />} />
        </Routes>
    </>
}
export default app