import "./WarehouseDetailsCard.scss";
import ErrorState from "../ErrorState/ErrorState";

const WarehouseDetailsCard = ({handleChangeWarehouse, handleChangeStreetAddress, handleChangeCity, handleChangeCountry, warehouse, streetAddress, city,
country, submit}) => {
    
    return (
    <div className="Warehouse_detail_container">
        <div className="Warehouse_detail_container__titlebox"> 
            <h2 className="Warehouse_detail_container__titlebox--title">Warehouse Details</h2>
        </div>

        <div className="Warehouse_detail_container__form">
            
            <div className="Warehouse_detail_container__form__box">
                <label for="warehouseName" className="Warehouse_detail_container__form__box--label">Warehouse Name</label>
                <input name="warehouseName" className={submit===true && !warehouse ? "Warehouse_detail_container__form__box--error" : "Warehouse_detail_container__form__box--input"}  
                
                placeholder="Warehouse Name" type="text" value = {warehouse} onChange = {handleChangeWarehouse} />
                {submit===true && !warehouse===true && <ErrorState/>}
            </div>

            <div className="Warehouse_detail_container__form__box">               
                <label for="StreetAddress" className="Warehouse_detail_container__form__box--label">Street Address</label>
                <input name="StreetAddress" className={submit===true && !streetAddress ? "Warehouse_detail_container__form__box--error" : "Warehouse_detail_container__form__box--input"} placeholder="Street Address" 
                type="text" value={streetAddress} onChange = {handleChangeStreetAddress}/>
                {submit===true && !streetAddress===true && <ErrorState/>}
            </div>

            <div className="Warehouse_detail_container__form__box"> 
                <label for="City" className="Warehouse_detail_container__form__box--label">City</label>
                <input name="City" className={submit===true && !city ? "Warehouse_detail_container__form__box--error" : "Warehouse_detail_container__form__box--input"} placeholder="City" 
                type="text" value={city} onChange={handleChangeCity}/>
                {submit===true && !city===true && <ErrorState/>}
            </div>

   
            <div className="Warehouse_detail_container__form__box"> 
                <label for="Country" className="Warehouse_detail_container__form__box--label">Country</label>
                <input name="Country" className={submit===true && !country ? "Warehouse_detail_container__form__box--error" : "Warehouse_detail_container__form__box--input"} placeholder="Country" 
                type="text" value={country} onChange={handleChangeCountry}/>
                {submit===true && !country===true && <ErrorState/>}
            </div>
 
   

        </div> 
    </div>


    );
};

export default WarehouseDetailsCard;