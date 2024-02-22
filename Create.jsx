import React, { useState } from "react";

import Git from "./assets/github.png";
import Linkdin from "./assets/linkedin.png";
import Insta from "./assets/instagram.png";
import X from "./assets/twitter.png";
import "./Style.css";

import { addUser } from "./userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const dispath = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispath(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/Details");
  };

  return (
    <>
      <section
        id="cntact_us"
        class="contact-us-single container  mt-4 Main shadow-lg p-3 mb-5 bg-body rounded"
      >
        <div>
          <div>
            <div className="Title">
              <h2 className=" pb-2 mb-4"> ADD NEW USER </h2>
            </div>

            <div className="col-12">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="AllInputs">
                    <label for="disabledTextInput">Full Name</label>
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control mt-2"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></input>

                    <label className="mt-2" for="Email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="Email"
                      className="form-control mt-2"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                    <div className="mt-3">
                      <p>
                        <b>Name</b> :- {name}
                      </p>
                    </div>
                    <div className="mt-3">
                      <p>
                        <b>Email</b> :- {email}
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mt-3">
                    <button
                      class="btn btn-primary btn-sm  px-4"
                      type="text"
                      id="sendMessageButton"
                    >
                      Submit
                    </button>

                    <div className=" d-flex mx-3 mt-1">
                      <span>
                        <a
                          href="https://github.com/sudhanshu1313"
                          target="_blank"
                        >
                          <img src={Git} width="25px" alt="" />
                        </a>
                      </span>
                      <span className="mx-1">
                        <a
                          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                          target="_blank"
                        >
                          <img src={Linkdin} width="25px" alt="" />
                        </a>
                      </span>
                      <span className="mx-1">
                        <a
                          href="https://www.instagram.com/sudhanshu_1313/"
                          target="_blank"
                        >
                          <img src={Insta} width="25px" alt="" />
                        </a>
                      </span>
                      <span className="mx-1">
                        <a
                          href="https://twitter.com/SudhanshuG17981"
                          target="_blank"
                        >
                          <img src={X} width="25px" alt="" />
                        </a>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Create;
