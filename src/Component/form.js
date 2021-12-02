import React from "react";
import ReactDOM from "react-dom";

const Form = ({ inputChange, submit, formError, errorSpan }) => {
  return (
    <React.Fragment>
      <div className="mydiv">
        <div className="container card card-body maincontainer">
          <div className="headerdiv">
            <div className="row heading">
              <h2>Welcome To Our Google Form</h2>
            </div>
          </div>

          <div className="formdiv">
            <form onSubmit={submit}>
              <div className="row m-5 p-4 rowdiv">
                <div className="col-6">
                  <div className="labelAndInputDiv">
                    <label htmlFor="name" className="form-label">
                      Name :
                    </label>
                    <br />
                    <input
                      type="text"
                      id="name"
                      className="inputbox form-control"
                      placeholder="Enter your name"
                      onChange={inputChange}
                      name="name"
                    />
                  </div>
                  {formError.name === true && (
                    <span className="errorField">{errorSpan.nameError}</span>
                  )}
                </div>

                <div className="col-6">
                  <div className="labelAndInputDiv">
                    <label htmlFor="phoneNumber" className="form-label">
                      Phone Number :
                    </label>
                    <br />
                    <input
                      type="number"
                      id="phoneNumber"
                      className="inputbox form-control"
                      placeholder="Enter your phone number"
                      onChange={inputChange}
                      name="phoneNumber"
                    />
                  </div>
                  {formError.phoneNumber === true && (
                    <span className="errorField">
                      {errorSpan.phoneNumberError}
                    </span>
                  )}
                </div>
              </div>

              <div className="row m-5 p-4 rowdiv">
                <div className="col-6">
                  <div className="labelAndInputDiv">
                    <label htmlFor="email" className="form-label">
                      Email :
                    </label>
                    <br />
                    <input
                      type="email"
                      id="email"
                      className="inputbox form-control"
                      placeholder="Enter your email-Id"
                      onChange={inputChange}
                      name="email"
                    />
                  </div>
                  {formError.email === true && (
                    <span className="errorField">{errorSpan.emailError}</span>
                  )}
                </div>

                <div className="col-6">
                  <div className="labelAndInputDiv">
                    <label htmlFor="password" className="form-label">
                      Password :
                    </label>
                    <br />
                    <input
                      type="password"
                      id="password"
                      className="inputbox form-control"
                      placeholder="Enter your password"
                      onChange={inputChange}
                      name="password"
                    />
                  </div>
                  {formError.password === true && (
                    <span className="errorField">
                      {errorSpan.passwordError}
                    </span>
                  )}
                </div>
              </div>

              <div className="row m-5 p-4 rowdiv">
                <div className="col">
                  <div className="labelAndInputDiv">
                    <label>Gender :</label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="radiobutton"
                      onChange={inputChange}
                    />
                    <span>Male</span>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="radiobutton"
                      onChange={inputChange}
                    />
                    <span>Female</span>
                    <input
                      type="radio"
                      name="gender"
                      value="Others"
                      className="radiobutton"
                      onChange={inputChange}
                    />
                    <span>others</span>
                  </div>
                  {formError.gender === true && (
                    <span className="errorField">{errorSpan.genderError}</span>
                  )}
                </div>
              </div>

              <div className="row m-5 p-4 rowdiv">
                <div className="col-6">
                  <div className="labelAndInput">
                    <label htmlFor="dob" className="form-label">
                      Date Of Birth :
                    </label>
                    <br />
                    <input
                      type="date"
                      id="dob"
                      className="inputbox form-control"
                      placeholder="Enter your DOB"
                      onChange={inputChange}
                      name="dob"
                    />
                  </div>
                  {formError.dob === true && (
                    <span className="errorField">{errorSpan.dobError}</span>
                  )}
                </div>

                <div className="col-6">
                  <div className="labelAndInputDiv">
                    <label htmlFor="week" className="form-label">
                      Current week
                    </label>
                    <br />
                    <input
                      type="week"
                      id="week"
                      className="inputbox form-control"
                      placeholder="Enter the current week"
                      onChange={inputChange}
                      name="currentWeek"
                    />
                  </div>
                  {formError.currentWeek === true && (
                    <span className="errorField">
                      {errorSpan.currentWeekError}
                    </span>
                  )}
                </div>
              </div>

              <div className="row m-5 p-4 rowdiv">
                <div className="col-6">
                  <div className="labelAndInputDiv">
                    <label htmlFor="bloodGroup" className="form-label">
                      Blood Group :
                    </label>
                    <br />
                    <input
                      type="text"
                      id="bloodGroup"
                      className="inputbox form-control"
                      placeholder="Enter your blood group"
                      onChange={inputChange}
                      name="bloodGroup"
                    />
                  </div>
                  {formError.bloodGroup === true && (
                    <span className="errorField">
                      {errorSpan.bloodGroupError}
                    </span>
                  )}
                </div>

                <div className="col-6">
                  <div className="labelAndInputDiv">
                    <label htmlFor="photo" className="form-label">
                      Photo :
                    </label>
                    <br />
                    <input
                      type="file"
                      id="photo"
                      className="inputbox form-control"
                      onChange={inputChange}
                      name="photo"
                    />
                  </div>
                  {formError.photo === true && (
                    <span className="errorField">{errorSpan.photoError}</span>
                  )}
                </div>
              </div>

              <div className="row m-5 p-4 rowdiv">
                <div className="col-6">
                  <div className="labelAndInputDiv">
                    <label htmlFor="address" className="form-label">
                      Address :
                    </label>
                    <br />
                    <input
                      type="text"
                      id="address"
                      className="inputbox form-control"
                      placeholder="Enter your address"
                      onChange={inputChange}
                      name="address"
                    />
                  </div>
                  {formError.address === true && (
                    <span className="errorField">{errorSpan.addressError}</span>
                  )}
                </div>
                <div className="col-6">
                  <div className="labelAndInputDiv">
                    <label htmlFor="message" className="form-label">
                      Message :
                    </label>
                    <br />
                    <textarea
                      id="message"
                      className="form-control"
                      placeholder="Enter your message"
                      onChange={inputChange}
                      name="message"
                    ></textarea>
                  </div>
                  {formError.message === true && (
                    <span className="errorField">{errorSpan.messageError}</span>
                  )}
                </div>
              </div>

              <div className="row m-5 p-5 rowdiv">
                <div className="col-11"></div>

                <div className="col-1">
                  <button type="submit" className="btn btn-info">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Form;
