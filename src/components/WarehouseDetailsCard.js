import React from 'react';

const WarehouseDetailsCard = () => {
    return (
    <div className="Warehouse_detail_container">
        <div className="Warehouse_detail_container__title"> 
            <h2>Warehouse Details</h2>
        </div>

        <form className="Warehouse_detail_container__form">
            <label for="videoTitle" className="Warehouse_detail_container__form--title">Warehouse Name</label>
            <input name="videoTitle"  className="Warehouse_detail_container__form--titlebox" placeholder="Warehouse Name" type="text"/>
                                
            <label for="videoDescription" className="Warehouse_detail_container__form--description">Street Address</label>
            <input name="videoDescription" className="Warehouse_detail_container__form--descriptionbox" placeholder="Street Address" type="text"/>   

            <label for="videoDescription" className="Warehouse_detail_container__form--description">City</label>
            <input name="videoDescription" className="Warehouse_detail_container__form--descriptionbox" placeholder="City" type="text"/>   

            <label for="videoDescription" className="Warehouse_detail_container__form--description">Country</label>
            <input name="videoDescription" className="Warehouse_detail_container__form--descriptionbox" placeholder="Country" type="text"/>   

            <div className='Warehouse_detail_container__button'>
                <button type='submit' className="Warehouse_detail_container__button--cancel">cancel</button>
                <button type='button' className="Warehouse_detail_container__buttons--save">save</button>
            </div>
        </form> 
    </div>


    );
};

export default WarehouseDetailsCard;