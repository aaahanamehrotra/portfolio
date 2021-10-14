import './footer.scss'
import { useState } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="left">
                <img src="./assets/undraw_contact_us_15o2.png" alt=""/>
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <GitHubIcon />
                <InstagramIcon />
                <LinkedInIcon />

            </div>
        </div>
    )
}

export default Footer
