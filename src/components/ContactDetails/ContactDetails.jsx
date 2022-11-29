import "./ContactDetails.scss";
import ErrorState from "../ErrorState.js/ErrorState";

const ContactDetails = ({handleChangeContactName, handleChangePosition, handleChangePhoneNumber, 
    handleChangeEmail, contactName, position, phoneNumber, email, submit}) => {
    return (
    <div className="Warehouse_detail_container border_contact">
        <div className="Warehouse_detail_container__titlebox"> 
            <h2 className="Warehouse_detail_container__titlebox--title">Contact Details</h2>
        </div>

        <div className="Warehouse_detail_container__form">
            <div className="Warehouse_detail_container__form__box">
                <label htmlFor="ContactName" className="Warehouse_detail_container__form__box--label">Contact Name </label>
                <input name="ContanctName"  className={submit===true && !contactName ? "Warehouse_detail_container__form__box--error" : "Warehouse_detail_container__form__box--input"} placeholder="Contact Name" 
                type="text" value={contactName} onChange={handleChangeContactName}/>
                {submit===true && !contactName===true && <ErrorState/>}
            </div>

            <div className="Warehouse_detail_container__form__box">
                <label htmlFor="position" className="Warehouse_detail_container__form__box--label">Position</label>
                <input name="position" className={submit===true && !position ? "Warehouse_detail_container__form__box--error" : "Warehouse_detail_container__form__box--input"} placeholder="Position" 
                type="text" value={position} onChange={handleChangePosition}/> 
                {submit===true && !position===true && <ErrorState/>}
            </div>  

            <div className="Warehouse_detail_container__form__box">
                <label htmlFor="phoneNumber" className="Warehouse_detail_container__form__box--label">Phone Number</label>
                <input name="phoneNumber" className={submit===true && !phoneNumber ? "Warehouse_detail_container__form__box--error" : "Warehouse_detail_container__form__box--input"} placeholder="Phone Number" 
                type="text" value={phoneNumber} onChange={handleChangePhoneNumber}/>
                {submit===true && !phoneNumber===true && <ErrorState/>}
            </div>   

            <div className="Warehouse_detail_container__form__box">
                <label htmlFor="email" className="Warehouse_detail_container__form__box--label">Email</label>
                <input name="email" className={submit===true && !email ? "Warehouse_detail_container__form__box--error" : "Warehouse_detail_container__form__box--input"} placeholder="Email" 
                type="text" value={email} onChange={handleChangeEmail}/>  
                {submit===true && !email===true && <ErrorState/>}
            </div>   


        </div> 
    </div>


    );
};

export default ContactDetails;