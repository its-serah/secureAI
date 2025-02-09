import {Link} from 'react-router'
import PropTypes from 'prop-types'
import Logo from './Logo';
import GithubLink from './GithubLink';

const Item = ({children, link}) =>{
  return (<li className='hover:text-gray-800'><Link className='inline-flex items-center gap-1 p-2 [&_svg]:size-4 text-sm font-stretch-expanded' to = {link}>{children}</Link></li>)
}
Item.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

const Navbar = () => {
  return (
    <header className='shadow-sm min-w-fit w-9/10 place-self-center m-4 fixed box-border z-20 text-gray-600 flex flex-row bg-light bg-neutral-100/70  border-1 border-gray-200/70 rounded-xl align-middle'>
      <nav className='mr-auto w-full flex flex-row align-middle md:flex-nowrap flex-wrap'>
      <Logo/>
      <ul className=' flex align-middle w-full md:pl-4 pl-0 '>
        <div className='flex align-middle pt-1.5 '>
        <Item link = "/">Dashboard</Item>
        <Item link = "/people">People</Item>
        <Item link = "/logs">Logs</Item>
        <Item link = "/addperson"><p className='hidden sm:inline xs:inline'>Add Person</p><p className='sm:hidden xs:hidden'>Add</p></Item>
        </div>
        <div className='flex ml-auto align-middle'>
        <GithubLink/>
        </div>
      </ul>
      </nav>
    </header>
  )
}

export default Navbar