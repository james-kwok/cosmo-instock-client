import "./EmptyState.scss"
const EmptyState = ({message}) => {
//   let emptyText = ["warehouses", "inventories", "inventory items"];
  return (
    <div className="EmptyState">
      <p className="EmptyState__text">
        There are no {message} in this warehouse.
      </p>
    </div>
    
  );
};

export default EmptyState;

//(emptyText[Number(index)])
