import React from 'react';
import WarehouseDetailsCard from '../WarehouseDetails/WarehouseDetailsCard';
import "./AddNewWarehouse.scss";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
import ContactDetails from '../ContactDetails/ContactDetails';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
/* eslint-disable no-useless-escape */

const AddNewWarehouse = () => {

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
    const [submit, Setsubmit] = useState(false);
    const [empty, SetEmpty] = useState(false);
    const [add, SetAdd] = useState(false);

    //use navigate to go to warehouse page
    const navigate = useNavigate();


    //change handler for all form input to update state 
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
    
    const handleChangePhoneNumber= (event) => {
        setPhoneNumber(event.target.value);
    };  

    const handleChangeEmail= (event) => {
        setEmail(event.target.value);
    }; 

    //special characters and space to validate user inputted phone number against 
    const specialChars = /^\d{15}$/.test(phoneNumber);

    //validating phone number length and makes sure it includes only numbers 
    const isPhoneNumberValid = () => phoneNumber.length >= 7 && phoneNumber.length <= 15 

    const isPhoneNumberValidTwo = () => specialChars;

    //validating email to see if it includes info + @ + 2nd level domain + top level domain  
    const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    //validating email
    const isEmailValid = () => { 
        return emailValidator;
    }

    //conditions to check if the form is valid 
    const isFormValid = () => {
        //Check if the fields are all filled
        if (warehouse === "" || streetAddress ===" " || city === "" || 
        country === "" || contactName === "" || position === "" || phoneNumber === "" || email === ""){
          
          return SetEmpty(true);

        }

        SetEmpty(false);
    
        // Check if the password field is valid
        if (!isPhoneNumberValid()) {
          return setPhoneError(true);
        }

        setPhoneError(false);

        if (!isPhoneNumberValidTwo()) {
            return setPhoneError(true);         
        }

        setPhoneError(false);

        if (!isEmailValid()) {
          return setEmailError(true);
        }
        setEmailError(false);
 
        return true;
      };

    //handle form submit
    const handleSubmit = (event) => {

    Setsubmit(true);
    event.preventDefault();

    if (isFormValid()) {
        console.log("add axios request here, to add warehouse to db")
        return SetAdd(true) && navigate("/warehouse");
    } 

}

    const handleCancel = () => {
        return navigate("/warehouse");
    }

    return (
        <section className="add_new_warehouse">
            <div className="add_new_warehouse__box">
                <div className='add_new_warehouse__box__titleblock'>
                    <img className='add_new_warehouse__box__titleblock--icons' src={backarrow} alt="back arrow"/>
                    <h1 className="add_new_warehouse__box__titleblock--title">Add New Warehouse</h1>
                </div>

                <div className='add_new_warehouse__notifications'>
                    {phoneError && <p>Please enter a 7-15 digit phone number</p>}
                    {emailError && <p>"Please enter a email in the following format: info@domain2.domain1"</p>}
                    {empty && <p>Please fill all fields</p> }
                    {add && <p>Successfully added warehouse! Returning to warehouse page</p> }
                </div>
            </div>


        {/* onSubmit on form to run front-end validation */}
            <form onSubmit={handleSubmit} > 
                <div className='add_new_warehouse__details'>
                    {/* passing down function props to handle input changes */}
                    <WarehouseDetailsCard 
                    handleChangeWarehouse={handleChangeWarehouse} handleChangeStreetAddress={handleChangeStreetAddress}
                    handleChangeCity={handleChangeCity} handleChangeCountry={handleChangeCountry} submit={submit}
                    warehouse={warehouse} streetAddress={streetAddress} city={city} country={country}/>

                    <ContactDetails 
                    handleChangeContactName={handleChangeContactName} handleChangePosition={handleChangePosition} 
                    handleChangePhoneNumber={handleChangePhoneNumber} handleChangeEmail={handleChangeEmail}
                    contactName={contactName} position={position} phoneNumber={phoneNumber} email ={email} submit={submit}/>
                </div>

                <div className='add_new_warehouse__container'>
                    <div className='add_new_warehouse__container__buttons'>
                        <button onClick={handleCancel} type='button' className="add_new_warehouse__container__buttons--button add_new_warehouse__container__buttons--cancel">cancel</button>
                        <button type='submit' className="add_new_warehouse__container__buttons--button add_new_warehouse__container__buttons--add">+ Add Warehouse</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddNewWarehouse;