import './topbar.scss'
// import PersonIcon from '@material-ui/icons/Person';
// import MailIcon from '@material-ui/icons/Mail';

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">IAM</a>
                    {/* <div className="itemContainer">
                        <PersonIcon className="icon"/>
                        <span>1234567890</span>  
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon"/>
                        <span>mail@mail.com</span>  
                    </div> */}
                </div>
                <div className="right">
                <ul>
                <li>
                    <a href="#intro">Home</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#works">Works</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="item1"></span>
                        <span className="item2"></span>
                        <span className="item3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
