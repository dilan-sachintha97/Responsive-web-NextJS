import './NavBar.css'

const NavBar = () => {
  return (
    <div className="n-wrapper">
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
                       <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolores vero facere aliquam, laboriosam modi maiores, id ex beatae praesentium alias similique nemo doloribus fuga placeat unde. Autem, maxime adipisci!</h1>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
