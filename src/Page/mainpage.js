import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "../Component/form";
import { ToastContainer, toast } from "react-toastify";

const Mainpage = () => {
  const [myBiodata, setMyBiodata] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
    currentWeek: "",
    bloodGroup: "",
    photo: "",
    address: "",
    message: "",
  });

  const error = {
    name: false,
    phoneNumber: false,
    email: false,
    password: false,
    gender: false,
    dob: false,
    currentWeek: false,
    bloodGroup: false,
    photo: false,
    address: false,
    message: false,
  };
  const [formError, setFormError] = useState("");

  const errorStatement = {
    nameError: "",
    phoneNumberError: "",
    emailError: "",
    passwordError: "",
    genderError: "",
    dobError: "",
    currentWeekError: "",
    bloodGroupError: "",
    photoError: "",
    addressError: "",
    messageError: "",
  };
  const [errorSpan, setErrorSpan] = useState("");
  /*const [nameError, setNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [dobError, setDobError] = useState(false);
  const [currentWeekError, setCurrentWeekError] = useState(false);
  const [bloodGroupError, setBloodGroupError] = useState(false);
  const [photoError, setPhotoError] = useState(false);
  const [address, setAddressError] = useState(false);
  const [messageError, setMessageError] = useState(false);*/

  const inputChange = (e) => {
    setMyBiodata({ ...myBiodata, [e.target.name]: e.target.value });
    if (formError !== "") {
      setFormError({ ...formError, [e.target.name]: false });
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (myBiodata.name === "") {
      error.name = true;
      errorStatement.nameError = "Name is required";
    }

    if (myBiodata.phoneNumber === "") {
      error.phoneNumber = true;
      errorStatement.phoneNumberError = "Phone number is required";
    }
    if (myBiodata.phoneNumber !== "" && myBiodata.phoneNumber.length !== 10) {
      error.phoneNumber = true;
      errorStatement.phoneNumberError = "Please enter a valid phone number";
    }

    if (myBiodata.email === "") {
      error.email = true;
      errorStatement.emailError = "email is required";
    }
    if (myBiodata.password === "") {
      error.password = true;
      errorStatement.passwordError = "password is required";
    }
    if (myBiodata.password !== "" && myBiodata.password.length <= 6) {
      error.password = true;
      errorStatement.passwordError = "Please enter a valid password";
    }
    if (myBiodata.gender === "") {
      error.gender = true;
      errorStatement.genderError = "Please choose your gender";
    }
    if (myBiodata.dob === "") {
      error.dob = true;
      errorStatement.dobError = "Dob is required";
    }
    if (myBiodata.currentWeek === "") {
      error.currentWeek = true;
      errorStatement.currentWeekError = "Current week is required";
    }
    if (myBiodata.bloodGroup === "") {
      error.bloodGroup = true;
      errorStatement.bloodGroupError = "Blood group is required";
    }

    if (myBiodata.photo === "") {
      error.photo = true;
      errorStatement.photoError = "Please upload your photo";
    }
    if (myBiodata.address === "") {
      error.address = true;
      errorStatement.addressError = "address is required";
    }
    if (myBiodata.message === "") {
      error.message = true;
      errorStatement.messageError = "Message is reqired";
    }
    setFormError(error);
    setErrorSpan(errorStatement);
  };

  return (
    <React.Fragment>
      <Form
        inputChange={inputChange}
        submit={submit}
        formError={formError}
        errorSpan={errorSpan}
      />
      <ToastContainer />
    </React.Fragment>
  );
};
export default Mainpage;
