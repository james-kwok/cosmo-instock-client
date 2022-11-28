
import "./EditWarehouseForm.scss"
function EditWarehouseForm ({handleSubmit, handleCancel, handleChangeWarehouse, handleChangeStreetAddress, handleChangeCity, handleChangeCountry, handleChangeContactName, handleChangePosition, handleChangePhoneNumber, handleChangeEmail, submit, warehouse, streetAddress, city, country, contactName, position, phoneNumber, email}){



    return (
        <form className="edit-form" onSubmit={handleSubmit}>
            <div className="edit-form__warehouse">
            <h2 className="edit-form__title"> Warehouse Details</h2>
                <div className="edit-form__field">
                    <label htmlFor="warehouseName" className="edit-form__label">Warehouse Name</label>
                    <input name="warehouseName" className={submit ===true && !warehouse ? "edit-form__input--error" : "edit-form__input"} type="text" value = {warehouse} onChange= {handleChangeWarehouse}/>

                    <label htmlFor="warehouseAddress" className="edit-form__label">Street Address</label>
                    <input name="warehouseAddress" className={submit ===true && !streetAddress ? "edit-form__input--error" : "edit-form__input"} type="text" value = {streetAddress} onChange = {handleChangeStreetAddress}/>
                    
                    <label htmlFor="warehouseCity" className="edit-form__label">City</label>
                    <input name="warehouseCity" className={submit ===true && !city ? "edit-form__input--error" : "edit-form__input"} type="text" value={city} onChange = {handleChangeCity}/>

                    <label htmlFor="warehouseCountry" className="edit-form__label">Country</label>
                    <input name="warehouseCountry" className={submit ===true && !country ? "edit-form__input--error" : "edit-form__input"} type="text" value = {country} onChange={handleChangeCountry}/>

                </div>
            </div>

            <div className="edit-form__contact">
                <h2 className="edit-form__title"> Contact Details</h2>
                <div className="edit-form__field">
                    <label htmlFor="warehouseContactName" className="edit-form__label">Contact Name</label>
                    <input name="warehouseContactName" className={submit ===true && !contactName ? "edit-form__input--error" : "edit-form__input"} type="text" value={contactName} onChange={handleChangeContactName}/>

                    <label htmlFor="warehousePosition" className="edit-form__label">Position</label>
                    <input name="warehousePosition" className={submit ===true && !position ? "edit-form__input--error" : "edit-form__input"} type="text" value={position} onChange={handleChangePosition}/>

                    <label htmlFor="warehousePhone" className="edit-form__label">Phone Number</label>
                    <input name="warehousePhone" className={submit ===true && !phoneNumber ? "edit-form__input--error" : "edit-form__input"} type="text" value={phoneNumber} onChange={handleChangePhoneNumber}/>

                    <label htmlFor="warehouseEmail" className="edit-form__label">Email</label>
                    <input name="warehouseEmail" className={submit ===true && !email ? "edit-form__input--error" : "edit-form__input"} type="text" value={email} onChange={handleChangeEmail}/>
                </div>
            </div>
            <div className="edit-form__bottom">
                <button onClick={handleCancel} type="button" className="edit-form__button edit-form__button--cancel">Cancel</button>
                <button type="submit" className="edit-form__button--submit edit-form__button">Save</button>
            </div>
        </form>
    )
}


export default EditWarehouseForm;