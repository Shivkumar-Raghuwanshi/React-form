import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const[valid, setValid] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setValues({ ...values, firstName: e.target.value })
  }
  const handleLastNameInputChange = (e) => {
    setValues({ ...values, lastName: e.target.value })
  }

  const handleEmailInputChange = (e) => {
    setValues({ ...values, email: e.target.value })
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }



  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <div className="title"><h2>Registration form</h2></div>

        <input
          type="text"
          id="first_name"
          placeholder="First Name"
          name="first_name"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        {submitted && !values.firstName ? <span id="error">Please enter your first name</span> : null}

        <input
          type="text"
          id="last_name"
          placeholder="Last Name"
          name="last_name"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
        {submitted && !values.lastName ? <span id="error">Please enter your lastname</span> : null}

        <input
          type="email"
          id="email"
          placeholder="abd@example.com"
          name="first_name"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email ? <span id="error">Please enter your email address</span> : null}

        <button className="button" type="submit" >Register</button>

        {submitted && valid? <div className="success-message">Thankyou for registration</div> : null}
      </form>



    </div>
  );
}

export default App;
