import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from './Logo';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <Logo
            className="fa"
            content="&#xf16d;"
            href="https://www.instagram.com/dielapollo/"
          />

          <Logo
            className="fa"
            content="&#xf1bc;"
            href="https://open.spotify.com/artist/0acDPupzgf3WNa5teZtt6R?si=cDuNfxc0Ttq4of71E10Wsw&utm_source=copy-link&utm_medium=copy-link&nd=1&_branch_match_id=1230085492065016727&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy7IL8lMq9TLyczL1i93zgt3LzLxT3JJAgCCoEzQIAAAAA%3D%3D"
          />
          <Logo
            className="fa"
            content="&#xf16a;"
            href="https://www.youtube.com/@dielapollo"
          />
          <Logo
            className="fa"
            content="&#xf1be;"
            href="https://soundcloud.com/dielapollo"
          />
          <Logo
            className="fa"
            content="&#xf025;"
            href="https://www.beatport.com/artist/diel-apollo/842344"
          />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
