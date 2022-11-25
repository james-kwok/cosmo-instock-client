import ErrorState from "../EmptyState/EmptyState";

function EditWarehouseForm ({handleSubmit, handleCancel, handleChangeWarehouse, handleChangeStreetAddress, handleChangeCity, handleChangeCountry, handleChangeContactName, handleChangePosition, handleChangePhoneNumber, handleChangeEmail, submit, warehouse, streetAddress, city, country, contactName, position, phoneNumber, email}){


    return (
        <form className="edit-form" onSubmit={handleSubmit}>
            <div className="edit-form__warehouse">
            <h2 className="edit-form__title"> Warehouse Details</h2>
                <div className="edit-form__field">
                    <label htmlFor="warehouseName" className="edit-form__label">Warehouse Name</label>
                    <input name="warehouseName" className="edit-form__input" placeholder="Washington" type="text" value = {warehouse} onChange= {handleChangeWarehouse}/>
                    {submit===true && !warehouse===true && <ErrorState/>}

                    <label htmlFor="warehouseAddress" className="edit-form__label">Street Address</label>
                    <input name="warehouseAddress" className="edit-form__input" placeholder="33 Pearl Street SW" type="text" value = {streetAddress} onChange = {handleChangeStreetAddress}/>
                    {submit===true && !streetAddress===true && <ErrorState/>}

                    <label htmlFor="warehouseCity" className="edit-form__label">City</label>
                    <input name="warehouseCity" className="edit-form__input" placeholder="Washington" type="text" value={city} onChange = {handleChangeCity}/>
                    {submit===true && !city===true && <ErrorState/>}

                    <label htmlFor="warehouseCountry" className="edit-form__label">Country</label>
                    <input name="warehouseCountry" className="edit-form__input" placeholder="USA" type="text" value = {country} onChange={handleChangeCountry}/>
                    {submit===true && !country===true && <ErrorState/>}
                </div>
            </div>

            <div className="edit-form__contact">
                <h2 className="edit-form__title"> Contact Details</h2>
                <div className="edit-form__field">
                    <label htmlFor="warehouseContactName" className="edit-form__label">Contact Name</label>
                    <input name="warehouseContactName" className="edit-form__input" placeholder="Graeme Lyon" type="text" value={contactName} onChange={handleChangeContactName}/>
                    {submit===true && !contactName===true && <ErrorState/>}

                    <label htmlFor="warehousePosition" className="edit-form__label">Position</label>
                    <input name="warehousePosition" className="edit-form__input" placeholder="Warehouse Manager" type="text" value={position} onChange={handleChangePosition}/>
                    {submit===true && !position===true && <ErrorState/>}

                    <label htmlFor="warehousePhone" className="edit-form__label">Phone Number</label>
                    <input name="warehousePhone" className="edit-form__input" placeholder="+1 (647) 504-0911" type="text" value={phoneNumber} onChange={handleChangePhoneNumber}/>
                    {submit===true && !phoneNumber===true && <ErrorState/>}

                    <label htmlFor="warehouseEmail" className="edit-form__label">Email</label>
                    <input name="warehouseEmail" className="edit-form__input" placeholder="glyon@instock.com" type="text" value={email} onChange={handleChangeEmail}/>
                    {submit===true && !email===true && <ErrorState/>}
                </div>
            </div>
            <div className="edit-form__bottom">
                <button onClick={handleCancel} type="button" className="edit-form__button">Cancel</button>
                <button type="submit" className="edit-form__button--submit">Save</button>
            </div>
        </form>
    )
}


export default EditWarehouseForm;