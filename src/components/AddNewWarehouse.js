import React from 'react';
import WarehouseDetailsCard from './WarehouseDetailsCard';

const AddNewWarehouse = () => {
    return (
        <section className="add_new_warehouse">
            <div className='add_new_warehouse__titleblock'>
                <h1 className="add_new_warehouse__titleblock"> Add New Warehouse</h1>
            </div>

            <div className='add_new_warehouse__details'>
                <WarehouseDetailsCard/>
                <WarehouseDetailsCard/>
            </div>
            
        </section>
    );
};

export default AddNewWarehouse;