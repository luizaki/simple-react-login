import './App.css';
import image from './silly-landing.gif';

function Landing() {
    return (
        <div className="box-container">
            <h2 className="landing-title">Login Successful!</h2>

            <img src={image} className="landing-image" />
            <p className="message">Nothing else to see here...</p>

            <button type="button" className="logout-button">Logout</button>
        </div>
    );
}

export default Landing;