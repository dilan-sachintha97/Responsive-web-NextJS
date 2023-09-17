import './NavBar.css'
import{AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
  return (
    <div className="n-wrapper">
      {/* desktop version */}
        <div className="container">
            <div className="n-container">
               {/* left side */}
               <div className="n-logo">
                    <span>TEST APP</span>
               </div>

               {/* right-side */}
               <div className="n-right">
                    <div className="n-menu">
                        <span>What we do</span>
                        <span>How it works</span>
                        <span>who we invest</span>
                        <span>Testimonials</span>
                    </div>
                    <div className="found-button">
                      Get funded
                    </div>
               </div>
            </div>
        </div>

        {/* mobile/ tab version */}
        <div className="nm-container">
          <span>TEST APP</span>
          <AiOutlineMenu  size={30}/>

          {/* mobile menu */}
          <div className="nm-menu">
            <span>What we do</span>
            <span>How it works</span>
            <span>who we invest</span>
            <span>Testimonials</span>
            <div className="m-funded-button">Get funded</div>
          </div>
        </div>
    </div>
  )
}

export default NavBar
