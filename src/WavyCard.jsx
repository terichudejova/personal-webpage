import "./WavyCard.css"
import EmailIcon from '@mui/icons-material/Email';

export default function WavyCard() {
    return (
        /* From Uiverse.io by MikeAndrewDesigner */ 
        <div class="e-card playing">
            <div class="image"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="infotop">

                Ing. Tereza Chudějová
                <br/>
                <div class="name"> <EmailIcon sx={{fontSize: "30px"}}/><br/>tereza.chudejova@gmail.com</div>
            </div>
        </div>

    )
}