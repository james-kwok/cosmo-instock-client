import "./ContactDetails.scss";
import ErrorState from "../ErrorState.js/ErrorState";

const ContactDetails = ({handleChangeContactName, handleChangePosition, handleChangePhoneNumber, 
    handleChangeEmail, contactName, position, phoneNumber, email, submit}) => {
    return (
    <div className="Warehouse_detail_container border_contact">
        <div className="Warehouse_detail_container__titlebox"> 
            <h2 className="Warehouse_detail_container__titlebox--title">Contact Details</h2>
        </div>

        <form className="Warehouse_detail_container__form">
            <div className="Warehouse_detail_container__form__box">
                <label for="videoTitle" className="Warehouse_detail_container__form--label">Contact Name </label>
                <input name="videoTitle"  className="Warehouse_detail_container__form--input" placeholder="Contact Name" 
                type="text" value={contactName} onChange={handleChangeContactName}/>
                {submit===true && !contactName===true && <ErrorState/>}
            </div>

            <div className="Warehouse_detail_container__form__box">
                <label for="videoDescription" className="Warehouse_detail_container__form--label">Position</label>
                <input name="videoDescription" className="Warehouse_detail_container__form--input" placeholder="Position" 
                type="text" value={position} onChange={handleChangePosition}/> 
                {submit===true && !position===true && <ErrorState/>}
            </div>  

            <div className="Warehouse_detail_container__form__box">
                <label for="videoDescription" className="Warehouse_detail_container__form--label">Phone Number</label>
                <input name="videoDescription" className="Warehouse_detail_container__form--input" placeholder="Phone Number" 
                type="text" value={phoneNumber} onChange={handleChangePhoneNumber}/>
                {submit===true && !phoneNumber===true && <ErrorState/>}
            </div>   

            <div className="Warehouse_detail_container__form__box">
                <label for="videoDescription" className="Warehouse_detail_container__form--label">Email</label>
                <input name="videoDescription" className="Warehouse_detail_container__form--input" placeholder="Email" 
                type="text" value={email} onChange={handleChangeEmail}/>  
                {submit===true && !email===true && <ErrorState/>}
            </div>   


        </form> 
    </div>


    );
};

export default ContactDetails;