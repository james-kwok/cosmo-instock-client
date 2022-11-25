import "./ContactDetails.scss";
import ErrorState from "../ErrorState/ErrorState";

const ContactDetails = ({handleChangeContactName, handleChangePosition, handleChangePhoneNumber, 
    handleChangeEmail, contactName, position, phoneNumber, email, submit}) => {
    return (
    <div className="Warehouse_detail_container border_contact">
        <div className="Warehouse_detail_container__titlebox"> 
            <h2 className="Warehouse_detail_container__titlebox--title">Contact Details</h2>
        </div>

        <form className="Warehouse_detail_container__form">
            <div className="Warehouse_detail_container__form__box">
                <label for="ContactName" className="Warehouse_detail_container__form__box--label">Contact Name </label>
                <input name="ContanctName"  className="Warehouse_detail_container__form__box--input" placeholder="Contact Name" 
                type="text" value={contactName} onChange={handleChangeContactName}/>
                {submit===true && !contactName===true && <ErrorState/>}
            </div>

            <div className="Warehouse_detail_container__form__box">
                <label for="position" className="Warehouse_detail_container__form__box--label">Position</label>
                <input name="position" className="Warehouse_detail_container__form__box--input" placeholder="Position" 
                type="text" value={position} onChange={handleChangePosition}/> 
                {submit===true && !position===true && <ErrorState/>}
            </div>  

            <div className="Warehouse_detail_container__form__box">
                <label for="phoneNumber" className="Warehouse_detail_container__form__box--label">Phone Number</label>
                <input name="phoneNumber" className="Warehouse_detail_container__form__box--input" placeholder="Phone Number" 
                type="text" value={phoneNumber} onChange={handleChangePhoneNumber}/>
                {submit===true && !phoneNumber===true && <ErrorState/>}
            </div>   

            <div className="Warehouse_detail_container__form__box">
                <label for="email" className="Warehouse_detail_container__form__box--label">Email</label>
                <input name="email" className="Warehouse_detail_container__form__box--input" placeholder="Email" 
                type="text" value={email} onChange={handleChangeEmail}/>  
                {submit===true && !email===true && <ErrorState/>}
            </div>   


        </form> 
    </div>


    );
};

export default ContactDetails;