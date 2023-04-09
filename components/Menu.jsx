import { Routes, Route, Link} from 'react-router-dom'
import CV from './CV'
import Examples from './Expamples'
const Menu = () => {
    const padding = {
        padding: 5,
        color: "#FFF",
    }
    return <>
        <div className='menu'>
            <Link style={padding} to="/" >CV-page</Link>
            <Link style={padding} to="/examples" >Examples Pages</Link>
        </div>
        <Routes>
            <Route path="/" element={<CV />} />
            <Route path="/examples" element={<Examples />} />
        </Routes>
    </>
}
export default Menu