import React, { useState } from 'react';
import profile from '../photos/profile.jpg';
import { useSelector } from 'react-redux';
import Input from './Input';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../photos/logo_black_orange.jpeg';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const menu = useSelector(state => state.menuStore);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();
  const toggleOption = describe => {
    console.log(selectedOptions);
    setSelectedOptions(prevOptions => {
      if (prevOptions.includes(describe)) {
        // If the option is already selected, remove it
        return prevOptions.filter(option => option !== describe);
      } else {
        // If the option is not selected, add it
        return [...prevOptions, describe];
      }
    });
  };

  return (
    <div className="contact">
      <div class="logo-container">
        <img
          src={logo}
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
      <div className="verified">
        <img src={profile} alt="" className="profileImg" />
      </div>
      <div className="describe">
        <div>CONTACT Diel Apollo</div>
        <div>
          For contact with me, fill out the form with a valid email address, so
          we can get back to you as soon as possible. If you want to send us a
          track directly for mastering, you can attach a download link with the
          track in WAV 44100Hz -6 dB format, along with proof of payment, and in
          less than 48 hours, I will get back to you.
        </div>
      </div>
      <Input data={selectedOptions} />

      <div className="options">
        {menu &&
          menu.map(option => (
            <div className="option" key={option.describe}>
              <div>{option.describe}</div>
              <div className="price">price {option.price}</div>
              {/* <input
                type="checkbox"
                name=""
                onClick={() => toggleOption(option.describe)} // Use a function here
                checked={selectedOptions.includes(option.describe)} // Check if the option is selected
              /> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Contact;
