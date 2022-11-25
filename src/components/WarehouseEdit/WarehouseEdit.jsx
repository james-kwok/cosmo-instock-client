import {useState} from "react";
import { useNavigate } from "react-router-dom";

import backarrow from "../../assets/icons/arrow_back-24px.svg";
import EditWarehouseForm from "../EditWarehouseForm/EditWarehouseForm";



function WarehouseEdit (){

    //setting form input as state variables

    const [warehouse, setWarehouse] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState ("");
    const [contactName, setContactName] = useState("");
    const [position, setPosition] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [submit, setSubmit] = useState (false);
    const [empty, setEmpty] = useState (false);
    const [edit, setEdit] = useState(false);

    //navigate to warehouse page
    const navigate = useNavigate();

    //change handler for form input to update state
    const handleChangeWarehouse = (event) =>{
        setWarehouse(event.target.value);
    }

    const handleChangeStreetAddress = (event) =>{
        setStreetAddress(event.target.value);
    }

    const handleChangeCity = (event) =>{
        setCity(event.target.value);
    }

    const handleChangeCountry = (event) =>{
        setCountry(event.target.value);
    }

    const handleChangeContactName = (event) =>{
        setContactName(event.target.value);
    }

    const handleChangePosition = (event) =>{
        setPosition(event.target.value);
    }

    const handleChangePhoneNumber = (event) =>{
        setPhoneNumber(event.target.value);
    }

    const handleChangeEmail = (event) =>{
        setEmail(event.target.value);
    }

    //phone number validation
    const specialChars = /^[0-9]*$/.test(phoneNumber);
    const isPhoneNumberValid = ()=> phoneNumber.length >=7 && phoneNumber.length <= 15;
    const isPhoneNumberValidTwo = () => specialChars;

    //email validation
    const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2, 3})+$/.test(email);
    const isEmailValid = () => emailValidator;

    const isFormValid = () =>{
        if (warehouse ==="" || streetAddress === "" || city === "" || country ===""|| contactName===""|| position===""|| phoneNumber==="" || email ===""){
            return setEmpty(true);
        }

        setEmpty(false);

        if(!isPhoneNumberValid() || !isPhoneNumberValidTwo()){
            return setPhoneError(true);
        }

        setPhoneError(false);

        if(!isEmailValid()){
            return setEmailError(true);
        }
        setEmailError(false);

        return true;
    };

    const handleSubmit = (event) =>{
        setSubmit(true);
        event.preventDefault();
        if (isFormValid()){
            console.log("add axios request here, to edit warehouse to db")
            setEdit(true)
            return setTimeout(()=>{
                navigate("/warehouses")}, 2000) ;
        }
    }

    const handleCancel = () => {
        return navigate("/warehouses");
    }


    return (
        <section className="edit-warehouse">
            <div className =" edit-warehouse__box">
                <div className="edit-warehouse__title">
                    <img className="edit-warehouse__arrow" src={backarrow} alt =" back arrow"/>
                    <h1 className = "edit-warehouse__title-text">Edit Warehouse</h1>
                </div>
            </div>

            <div className="edit-warehouse__notification">
                {phoneError && <p>Please enter a 7-15 digit phone number</p>}
                {emailError && <p>Please enter an email in the following format: info@domain2.domain1</p>}
                {empty && <p>Please fill all fields</p>}
                {edit && <p>Successfully added warehouse! Retruning to warehouse page</p>}
            </div>
            <EditWarehouseForm 
            handleSubmit={handleSubmit} 
            handleCancel = {handleCancel}
            handleChangeWarehouse = {handleChangeWarehouse}
            handleChangeStreetAddress = {handleChangeStreetAddress}
            handleChangeCity = {handleChangeCity}
            handleChangeCountry = {handleChangeCountry}
            handleChangeContactName = {handleChangeContactName}
            handleChangePosition = {handleChangePosition}
            handleChangePhoneNumber = {handleChangePhoneNumber}
            handleChangeEmail={handleChangeEmail}

            submit = {submit}

            warehouse= {warehouse}
            streetAddress = {streetAddress}
            city = {city}
            country = {country}

            contactName = {contactName}
            position = {position}
            phoneNumber = {phoneNumber}
            email = {email}

            />
        </section>
    )
}

export default WarehouseEdit;