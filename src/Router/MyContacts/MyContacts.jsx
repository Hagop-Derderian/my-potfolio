import React, { useState, useRef } from "react";
import "./MyContacts.scss";
import emailjs from "@emailjs/browser";
import { BiDownArrow } from "react-icons/bi";
function MyContacts() {
  const [inputs, setInputs] = useState({
    nameI: "",
    lastNameI: "",
    email: "",
    textarea: "",
  });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a7ugy55",
        "template_1983tl8",
        form.current,
        "GiQmq2q2ZxDgpeYtq"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="Main-ContactsDiv">
      <div className="top-pic-contacts">
        <div className="top-insideContent">
          <h1>
            ~ FrontEnd ~<br />
            ~Contact Me :) ~
          </h1>
          <button onClick={handleClick}>
            Learn More <br />
            <BiDownArrow
              style={{ width: "20px", height: "20px", color: "grey" }}
            />
          </button>
        </div>
      </div>

      <div data-aos="zoom-in" ref={ref} className="inside-div">
        <div data-aos="fade-left" className="bottom-div-content">
          <h1>Let's Project & Get a Free Consultation.</h1>

          <div className="div-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="ToFill-div">
                <label className="LabelForName">
                  ~ First Name ~
                  <input
                    onChange={(e) =>
                      setInputs({ ...inputs, nameI: e.target.value })
                    }
                    className="InputForName"
                    type="text"
                    name="user_name"
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
                    name="user_lastname"
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
                    name="user_email"
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
