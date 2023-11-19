import React, { useRef, useState } from 'react';

function Input({ data }) {
  const [nameValue, setNameValue] = useState('');
  const [phoneNumValue, setPhoneNumValue] = useState('');
  const [headerValue, setHeaderValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const handelSubmit = e => {
    e.preventDefault();
    console.log('here');
    const recipient = 'dielapollo@gmail.com'; // Replace with the recipient's email address
    const subject = encodeURIComponent(headerValue); // Replace with your desired subject
    const body = encodeURIComponent(messageValue);

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="form">
      <form className="c-form" onSubmit={e => handelSubmit(e)}>
        <input
          className="c-form__input"
          placeholder="Your Name"
          type="text"
          value={nameValue}
          onChange={e => setNameValue(e.target.value)}
          required
        />
        <input
          className="c-form__input"
          placeholder="email"
          type="text"
          value={phoneNumValue}
          onChange={e => setPhoneNumValue(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          value={headerValue}
          onChange={e => setHeaderValue(e.target.value)}
        />

        <textarea
          placeholder="Message"
          value={messageValue}
          onChange={e => setMessageValue(e.target.value)}
        ></textarea>

        <button className="c-form__button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Input;
