import pdf from '../icons/Esteban_Aspe_CV.pdf'
import gitIcon from '../icons/github-mark.svg'
import linkedinIcon from '../icons/linkedin.png'
const Footer = () => {
  return (<div className='footer'>
    <a className='download-footer' href={pdf} >Download</a>
    <a className='icons' href='https://github.com/Esteve2604?tab=repositories'>{<img src={gitIcon} width={30} height={25} ></img>}</a>
    <a className='icons' href='https://www.linkedin.com/in/esteban-aspe-ruiz/'>{<img src={linkedinIcon} width={30} height={25} ></img>}</a>
  </div>
  )
}
export default Footer