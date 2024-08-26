import "./WavyCard.css"
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function WavyCard() {
    return (
        /* From Uiverse.io by MikeAndrewDesigner + modified by terichudejova*/ 
        <div class="e-card playing">
            <div class="image"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="infotop">

                <h4>Ing. Tereza Chudějová</h4>
                <a class="name" href="mailto:tereza.chudejova@gmail.com" target="_isBlank">
                    <EmailIcon sx={{fontSize: "30px"}}/>
                    <p>tereza.chudejova@gmail.com</p>
                </a>
                <a class="name" href="https://www.instagram.com/terichudejova/" target="_isBlank">
                    <InstagramIcon sx={{fontSize: "30px"}}/>
                    <p>terichudejova</p>
                </a>
                <a class="name" href="https://github.com/terichudejova" target="_isBlank">
                    <GitHubIcon sx={{fontSize: "30px"}}/>
                    <p>terichudejova</p>
                </a>
                <div className="contactPicture">
                    <img src="images/contact.png"/>
                </div>
            </div>
        </div>

    )
}