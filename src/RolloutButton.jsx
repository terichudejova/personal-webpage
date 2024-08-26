import MessageIcon from '@mui/icons-material/Message';
import "./RolloutButton.css"


export default function RolloutButton() {
    return (
        <button className="rolloutButton">
            <MessageIcon className="rolloutIcon" />
        </button>
    )
}