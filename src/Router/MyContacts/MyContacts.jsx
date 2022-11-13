import React from "react";
import "./MyContacts.scss";

function MyContacts() {
  return (
    <div className="Main-ContactsDiv">
      <div className="First-Bg-pic"></div>

      <div data-aos="zoom-in" className="inside-div">
        <div data-aos="fade-left" className="bottom-div-content">
          <h1>Let's Project & Get a Free Consultation.</h1>
          <div className="div-form">
            <form action="">
              <div className="ToFill-div">
                <label className="LabelForName">
                  ~ First Name ~
                  <input className="InputForName" type="text" />
                </label>
                <label className="LabelForLastName">
                  ~ Last Name ~
                  <input className="InputForLastName" type="text" />
                </label>
              </div>
              <div className="ForSubmit-div">
                <input
                  className="ForEmail"
                  required
                  type="email"
                  placeholder="Your Email"
                />
                <button type="submit">Submit</button>
              </div>
              <div className="TextArea-div">
                <label className="LabelForTextArea" htmlFor="textarea">
                  Message :
                  <textarea
                    className="Textarea"
                    name="Message"
                    id="textarea"
                    cols="30"
                    rows="10"
                    placeholder="click here"
                  ></textarea>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default MyContacts;
