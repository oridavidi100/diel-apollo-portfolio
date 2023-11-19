import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../photos/logo_black_orange.jpeg';

function Portfolio() {
  const navigate = useNavigate();
  const homePage = () => {
    navigate('/');
  };
  return (
    <div>
      <div class="logo-container">
        <img src={logo} onClick={homePage} />
      </div>
      <div className="iframe">
        <iframe
          src={`https://www.youtube.com/embed/ulJC1_WRIKc?autoplay=1`}
          allow="autoplay"
        ></iframe>
      </div>
      <div className="spotify">
        <iframe
          className="spotify_iframe"
          src="https://open.spotify.com/embed/track/3xyg4uLJYMkzEEPlblVnKL?utm_source=generator&theme=0"
          width="55%"
          height="152"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className="spotify_iframe"
          src="https://open.spotify.com/embed/track/0pXVnZNEPewvClYK6hGYQ9?utm_source=generator&theme=0"
          width="55%"
          height="152"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className="spotify_iframe"
          src="https://open.spotify.com/embed/track/5SQfSnyd6BWztqFxGS9LEW?utm_source=generator&theme=0"
          width="55%"
          height="152"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className="spotify_iframe"
          src="https://open.spotify.com/embed/track/1pQR8ZYsKo1qeGiKnOwsIT?utm_source=generator&theme=0"
          width="55%"
          height="152"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className="spotify_iframe"
          src="https://open.spotify.com/embed/track/6mYwFiA4dOdy86F4ek9ds8?utm_source=generator&theme=0"
          width="55%"
          height="152"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className="spotify_iframe"
          src="https://open.spotify.com/embed/track/5PYQK8hBqOFYtLR2B7lvHH?utm_source=generator&theme=0"
          width="55%"
          height="152"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div class="button-container">
        <button
          className="contact-button"
          onClick={() => {
            navigate('/contact');
          }}
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
