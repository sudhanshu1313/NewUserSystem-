import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { upaDateUser } from "./userReducer";

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setUname] = useState(name);
  const [uemail, setUemail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      upaDateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
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
              <h2 className=" pb-2 mb-4">Upadate User</h2>
            </div>

            <div className="col-12">
              <div className="contact-form">
                <form onSubmit={handleUpdate}>
                  <div className="AllInputs">
                    <label for="disabledTextInput">Full Name</label>
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control mt-2"
                      value={uname}
                      onChange={(e) => {
                        setUname(e.target.value);
                      }}
                    ></input>

                    <label className="mt-2" for="Email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="Email"
                      className="form-control mt-2"
                      value={uemail}
                      onChange={(e) => {
                        setUemail(e.target.value);
                      }}
                    ></input>
                  </div>

                  <div className="d-flex mt-3">
                    <button
                      class="btn btn-primary btn-sm  px-4"
                      type="text"
                      id="sendMessageButton"
                    >
                      Upadte
                    </button>
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

export default Update;
