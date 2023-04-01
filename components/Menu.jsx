import { Routes, Route, Link} from 'react-router-dom'
import CV from './CV'
import Algo2 from './Algo2'
const Menu = () => {
    const padding = {
        padding: 5
    }
    return <>
        <div>
            <Link style={padding} to="/" >CV-page</Link>
            <Link style={padding} to="/examples" >Examples Pages</Link>
        </div>
        <Routes>
            <Route path="/" element={<CV />} />
            <Route path="/examples" element={<Algo2 />} />
        </Routes>
    </>
}
export default Menu