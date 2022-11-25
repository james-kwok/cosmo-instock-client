import "./WarehouseDetailsCard.scss";
import ErrorState from "../ErrorState.js/ErrorState";

const WarehouseDetailsCard = ({handleChangeWarehouse, handleChangeStreetAddress, handleChangeCity, handleChangeCountry, warehouse, streetAddress, city,
country, submit}) => {
    
    return (
    <div className="Warehouse_detail_container">
        <div className="Warehouse_detail_container__titlebox"> 
            <h2 className="Warehouse_detail_container__titlebox--title">Warehouse Details</h2>
        </div>

        <form className="Warehouse_detail_container__form">
            
            <div className="Warehouse_detail_container__form__box">
                <label for="videoTitle" className="Warehouse_detail_container__form__box--label">Warehouse Name</label>
                <input name="videoTitle"  className="Warehouse_detail_container__form__box--input" placeholder="Warehouse Name" 
                type="text" value = {warehouse} onChange = {handleChangeWarehouse} />
                {submit===true && !warehouse===true && <ErrorState/>}
            </div>

            <div className="Warehouse_detail_container__form__box">               
                <label for="videoDescription" className="Warehouse_detail_container__form--label">Street Address</label>
                <input name="videoDescription" className="Warehouse_detail_container__form--input" placeholder="Street Address" 
                type="text" value={streetAddress} onChange = {handleChangeStreetAddress}/>
                {submit===true && !streetAddress===true && <ErrorState/>}
            </div>

            <div className="Warehouse_detail_container__form__box"> 
                <label for="videoDescription" className="Warehouse_detail_container__form--label">City</label>
                <input name="videoDescription" className="Warehouse_detail_container__form--input" placeholder="City" 
                type="text" value={city} onChange={handleChangeCity}/>
                {submit===true && !city===true && <ErrorState/>}
            </div>

   
            <div className="Warehouse_detail_container__form__box"> 
                <label for="videoDescription" className="Warehouse_detail_container__form--label">Country</label>
                <input name="videoDescription" className="Warehouse_detail_container__form--input" placeholder="Country" 
                type="text" value={country} onChange={handleChangeCountry}/>
                {submit===true && !country===true && <ErrorState/>}
            </div>
 
   

        </form> 
    </div>


    );
};

export default WarehouseDetailsCard;