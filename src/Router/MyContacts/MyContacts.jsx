import React, { useState } from "react";
import "./MyContacts.scss";

function MyContacts() {
  const [inputs, setInputs] = useState({
    nameI: "",
    lastNameI: "",
    email: "",
    textarea: "",
  });

  return (
    <div className="Main-ContactsDiv">
      <div className="top-pic-contacts">
        <div className="top-insideContent">
          <p>Contact Me</p>
        </div>
      </div>

      <div data-aos="zoom-in" className="inside-div">
        <div data-aos="fade-left" className="bottom-div-content">
          <h1>Let's Project & Get a Free Consultation.</h1>
          <div className="div-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="ToFill-div">
                <label className="LabelForName">
                  ~ First Name ~
                  <input
                    onChange={(e) =>
                      setInputs({ ...inputs, nameI: e.target.value })
                    }
                    className="InputForName"
                    type="text"
                  />
                </label>
                <label className="LabelForLastName">
                  ~ Last Name ~
                  <input
                    onChange={(e) =>
                      setInputs({ ...inputs, lastNameI: e.target.value })
                    }
                    className="InputForLastName"
                    type="text"
                  />
                </label>
              </div>
              <div className="ForSubmit-div">
                <label className="LabelForEmail">
                  ~ Email ~
                  <input
                    onChange={(e) =>
                      setInputs({ ...inputs, email: e.target.value })
                    }
                    className="InputForEmail"
                    required
                    type="email"
                  />
                </label>
              </div>

              <div className="TextArea-div">
                <label className="LabelForTextArea" htmlFor="textarea">
                  Message :
                  <textarea
                    onChange={(e) =>
                      setInputs({ ...inputs, textarea: e.target.value })
                    }
                    className="Textarea"
                    name="Message"
                    id="textarea"
                    cols="30"
                    rows="10"
                    placeholder="Remember, Be Nice!"
                  ></textarea>
                </label>
              </div>
              <button className="Submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyContacts;
