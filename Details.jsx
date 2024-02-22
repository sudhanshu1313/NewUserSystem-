import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Style.css";

import { Link } from "react-router-dom";
import { deleteUser } from "./userReducer";
function Details() {
  const users = useSelector((state) => state.users);
  // console.log(users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <>
      <section
        id="cntact_us"
        class="contact-us-single container  mt-4 MainList shadow-lg p-3 mb-5 bg-body rounded"
      >
        <div className="">
          <div className="">
            <div className="Title">
              <h2 className=" pb-2 mb-4 text-center"> LIST OF USERS </h2>
            </div>

            <div className="col-12">
              <div className="contact-form">
                <table className="table caption-top">
                  <caption>
                    {/* it is create button */}
                    <button>
                      <Link to="/Create" className="btn btn-primary  px-4 mb-4">
                        Create New User
                      </Link>
                    </button>
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col"> # </th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>

                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => {
                      return (
                        <>
                          <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                              <Link
                                to={`/edit/${user.id}`}
                                className="btn btn-warning btn-sm px-4 mb-4"
                              >
                                Edit
                              </Link>
                              <button
                                onClick={() => handleDelete(user.id)}
                                className="btn btn-danger btn-sm px-4 mb-4 mx-3"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
