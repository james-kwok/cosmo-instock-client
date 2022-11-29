import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
import EditWarehouseForm from "../EditWarehouseForm/EditWarehouseForm";

import "./WareHouseEdit.scss";
/* eslint-disable no-useless-escape */

function WarehouseEdit() {
  //setting form input as state variables

  const [warehouse, setWarehouse] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [edit, setEdit] = useState(false);

  const { id } = useParams();
  const getURL = `http://localhost:8080/api/warehouses/${id}`;

  useEffect(() => {
    axios.get(getURL).then((response) => {
      setWarehouse(response.data.warehouse_name);
      setStreetAddress(response.data.address);
      setCity(response.data.city);
      setCountry(response.data.country);
      setContactName(response.data.contact_name);
      setPosition(response.data.contact_position);
      setPhoneNumber(response.data.contact_phone);
      setEmail(response.data.contact_email);
    });
  }, []);

  //navigate to warehouse page
  const navigate = useNavigate();

  //change handler for form input to update state
  const handleChangeWarehouse = (event) => {
    setWarehouse(event.target.value);
  };

  const handleChangeStreetAddress = (event) => {
    setStreetAddress(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeContactName = (event) => {
    setContactName(event.target.value);
  };

  const handleChangePosition = (event) => {
    setPosition(event.target.value);
  };

  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  //phone number validation
  const specialChars = /^[0-9+()]*$/.test(phoneNumber);
  const isPhoneNumberValid = () =>
    phoneNumber.length >= 7 && phoneNumber.length <= 15;
  const isPhoneNumberValidTwo = () => specialChars;

  //email validation
  const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isEmailValid = () => emailValidator;

  const isFormValid = () => {
    if (
      warehouse === "" ||
      streetAddress === "" ||
      city === "" ||
      country === "" ||
      contactName === "" ||
      position === "" ||
      phoneNumber === "" ||
      email === ""
    ) {
      return setEmpty(true);
    }

    setEmpty(false);

    if (!isPhoneNumberValid() || !isPhoneNumberValidTwo()) {
      return setPhoneError(true);
    }

    setPhoneError(false);

    if (!isEmailValid()) {
      return setEmailError(true);
    }
    setEmailError(false);

    return true;
  };

  const handleSubmit = (event) => {
    setSubmit(true);
    event.preventDefault();
    if (isFormValid()) {
      axios
        .patch(getURL, {
          warehouse_id: id,
          warehouse_name: warehouse,
          address: streetAddress,
          city: city,
          country: country,
          contact_name: contactName,
          contact_position: position,
          contact_email: email,
          contact_phone: phoneNumber,
        })
        .catch((error) => {
          console.log(error.response);
        });
      setEdit(true);
      return setTimeout(() => {
        navigate("/warehouses");
      }, 2000);
    }
  };

  const handleCancel = () => {
    return navigate("/warehouses");
  };

  return (
    <div className="edit-warehouse">
      <section className="edit-warehouse__container">
        <div className=" edit-warehouse__box">
          <div className="edit-warehouse__title">
            <Link to="/warehouses">
              <img
                className="edit-warehouse__arrow"
                src={backarrow}
                alt=" back arrow"
              />
            </Link>
            <h1 className="edit-warehouse__title-text">Edit Warehouse</h1>
          </div>
        </div>

        <div className="edit-warehouse__notification">
          {phoneError && (
            <p>Please enter a 7-15 digit phone number, digits only</p>
          )}
          {emailError && (
            <p>
              Please enter an email in the following format:
              info@domain2.domain1
            </p>
          )}
          {empty && <p>Please fill all fields</p>}
          {edit && (
            <p>
              Successfully edit warehouse {warehouse}! Returning to warehouse
              page
            </p>
          )}
        </div>
        <EditWarehouseForm
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          handleChangeWarehouse={handleChangeWarehouse}
          handleChangeStreetAddress={handleChangeStreetAddress}
          handleChangeCity={handleChangeCity}
          handleChangeCountry={handleChangeCountry}
          handleChangeContactName={handleChangeContactName}
          handleChangePosition={handleChangePosition}
          handleChangePhoneNumber={handleChangePhoneNumber}
          handleChangeEmail={handleChangeEmail}
          submit={submit}
          warehouse={warehouse}
          streetAddress={streetAddress}
          city={city}
          country={country}
          contactName={contactName}
          position={position}
          phoneNumber={phoneNumber}
          email={email}
        />
      </section>
    </div>
  );
}

export default WarehouseEdit;
