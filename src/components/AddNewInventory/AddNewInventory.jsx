import backIcon from "../../assets/icons/arrow_back-24px.svg";
import ErrorState from "../ErrorState.js/ErrorState";
const AddNewInventory = ({
  handleChangeItemName,
  handleChangeDescription,
  handleChangeCategory,
  handleChangeStatus,
  handleChangeQuantity,
  handleChangeWarehouse,
  handleSubmit,
  handleCancel,
  submit,
  itemName,
  description,
  category,
  status,
  quantity,
  warehouse,
}) => {
  return (
    <div className="AddNewInventory">
      <div className="AddNewInventory__title-container">
        <img
          className="AddNewInventory__back-icon"
          src={backIcon}
          alt="back to inventory list"
        />
        <h1 className="AddNewInventory__title">Add New Inventory Item</h1>
      </div>
      <form onSubmit={handleSubmit} className="AddNewInventory__form">
        <h2 className="AddNewInventory__form-title">Item Details</h2>
        <div className="AddNewInventory__input-container">
          <label htmlFor="itemName" className="AddNewInventory__label">
            Item Name
          </label>
          <input
            name="itemName"
            className="AddNewInventory__item-input"
            placeholder="Item Name"
            type="text"
            onChange={handleChangeItemName}
          />
          {submit === true && !itemName === true && <ErrorState />}
        </div>
        <div className="AddNewInventory__input-container">
          <label htmlFor="itemDescription" className="AddNewInventory__label">
            Description
          </label>
          <textarea
            name="itemDescription"
            className="AddNewInventory__description-input"
            placeholder="Please enter a brief item description..."
            onChange={handleChangeDescription}
          />
          {submit === true && !description === true && <ErrorState />}
        </div>
        <div className="AddNewInventory__input-container">
          <label htmlFor="itemCategory" className="AddNewInventory__label">
            Category
          </label>
          <select
            id="itemCategory"
            name="itemCategory"
            className="AddNewInventory__category-dropdown"
            placeholder="Please select"
            value={category}
            onChange={handleChangeCategory}
          >
            <option
              className="AddNewInventory__placeholder"
              value=""
              disabled={true}
            >
              Please select
            </option>
            <option value="Electronics">Electronics</option>
            <option value="Gear">Gear</option>
            <option value="Accessories">Accessories</option>
            <option value="Health">Health</option>
            <option value="Apparel">Apparel</option>
          </select>
        </div>
        <h2 className="AddNewInventory__form-title">Item Details</h2>
        <div className="AddNewInventory__input-container">
          <label htmlFor="status" className="AddNewInventory__label">
            Status
          </label>
          <div className="AddNewInventory__status">
            <div className="AddNewInventory__option">
              <input
                id="instock"
                name="radio"
                type="radio"
                value="In Stock"
                onChange={handleChangeStatus}
              ></input>
              <label className="AddNewInventory__value" htmlFor="instock">In stock</label>
            </div>

            <div className="AddNewInventory__option">
              <input
                id="outstock"
                name="radio"
                type="radio"
                value="Out Of Stock"
                onChange={handleChangeStatus}
              ></input>
              <label className="AddNewInventory__value" htmlFor="outstock">Out of stock</label>
            </div>
            {submit === true && !status === true && <ErrorState />}
          </div>
          </div>
          <div className={`AddNewInventory__option ${
            status === "Out Of Stock"
              ? "AddNewInventory__no-show"
              : ""
          }`}>
            <label
              className="AddNewInventory__label"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="text"
              value={quantity}
              className = {submit === true && !quantity ? "AddNewInventory__error" : "AddNewInventory__item-input"}
              onChange={handleChangeQuantity}
            ></input>
            {submit === true && !quant === true && <ErrorState />}
          </div>
        <div className="AddNewInventory__input-container">
          <label htmlFor="warehouse" className="AddNewInventory__label">
            Warehouse
          </label>
          <select
            id="warehouse"
            name="warehouse"
            className="AddNewInventory__category-dropdown"
            placeholder="Please select"
            value={warehouse}
            onChange={handleChangeWarehouse}
          >
            <option
              className="AddNewInventory__placeholder"
              value=""
              disabled={true}
            >
              Please select
            </option>
            <option value="Washington">Washington</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Santa Monica">Santa Monica</option>
            <option value="Jersey">Jersey</option>
            <option value="Seattle">Seattle</option>
            <option value="Miami">Miami</option>
            <option value="SF">SF</option>
          </select>
        </div>
        <div className="AddNewInventory__buttons">
          <button
            onClick={handleCancel}
            type="button"
            className="AddNewInventory__cancel-button"
          >
            Cancel
          </button>
          <button type="submit" className="AddNewInventory__submit-button">
            + Add Item
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddNewInventory;
