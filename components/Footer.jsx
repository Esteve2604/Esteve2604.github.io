import pdf from '../aa.pdf'
const Footer = () => {
  return (<div className='footer'>
    <a className='download-footer' href={pdf} >Download</a>
    <a className='icons' href='https://github.com/Esteve2604?tab=repositories'>{<img src='../icons/github-mark.svg' width={30} height={25} ></img>}</a>
    <a className='icons' href='https://www.linkedin.com/in/esteban-aspe-ruiz/'>{<img src='../icons/linkedin.png' width={30} height={25} ></img>}</a>
  </div>
  )
}
export default Footer