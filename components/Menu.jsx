import { Routes, Route, Link} from 'react-router-dom'
import Algo from './Algo'
import Algo2 from './Algo2'
const Menu = () => {
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
export default Menu