import './App.css';
import image from './silly-landing.gif';
import { useNavigate } from 'react-router-dom';

function Landing() {
    let navigate = useNavigate();

    return (
        <div className="content">
            <div className="box-container">
                <h2 className="landing-title">Login Successful!</h2>

                <img src={image} alt="Happy cat dancing GIF" className="landing-image" />
                <p className="message">Nothing else to see here...</p>

                <button type="button" className="logout-button"
                onClick={() => navigate('/login')}>Logout</button>
            </div>
        </div>
    );
}

export default Landing;