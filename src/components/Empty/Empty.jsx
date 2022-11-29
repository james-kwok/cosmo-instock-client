const EmptyState = (index) => {
  let emptyText = ["warehouses", "inventories", "inventory items"];
  console.log(index);
  return (
    <div className="WarehouseDetailsPage__empty-state">
      <p className="WarehouseDetailsPage__empty-text">
        There are no {emptyText} in this warehouse.
      </p>
    </div>
  );
};
export default EmptyState;
