// const NavBar1 = () => {
//     return(
//         <nav>
            
//         </nav>
//     )
// }

const Navbar = () => {
    return (
    <nav className="nav-bar">
       <h1>EduHub <span className="dot">.</span></h1>
       <div className="nav-items">
       <a href="#">Home</a>
        <a href="#"> Our Staff</a>
        <a href="#">News</a>
        <a href="#">Gallery</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
       </div>
        
        <button className="nav-btn">Enroll Now</button>
    </nav>
    )

};

export default Navbar;