import './Navbar.css'
const Navbar =()=>{
  return(
    <div className='nav'>
      
      <div className="nav-logo">Orchid Academy Nuwakot</div>
       <ul className="nav-menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Our Commitment</li>
        <li className="nav-contact">Contact Us</li>
       </ul>
    </div>
  )
}
export default Navbar;