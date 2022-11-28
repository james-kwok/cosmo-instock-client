import "./EditInventoryDetails.scss";
import ErrorState from "../ErrorState.js/ErrorState";
import arrowDropdown from "../../assets/icons/arrow_drop_down-24px.svg";

const EditInventoryDetails = ({
  handleChangeItemname,
  handleChangeDescriptions,
  handleChangeCategory,
  submit,
  itemName,
  description,
  category,
}) => {
  return (
    <>
      <section className="edit-details">
        <div className="edit-details__titlebox">
          <h2 className="edit-details__title">Item Details</h2>
        </div>

        <div className="edit-details__form">
          <div className="edit-details__form__box">
            <label
              htmlFor="inventoryName"
              className="edit-details__form__box--label"
            >
              Item Name
            </label>
            <input
              name="inventoryName"
              className={submit === true && !itemName ? "edit-details__form__box--error" : "edit-details__form__box--input"}
              placeholder="Item Name"
              type="text"
              value={itemName}
              onChange={handleChangeItemname}
            />
            {submit === true && !itemName === true && <ErrorState />}
          </div>

          <div className="edit-details__form__box">
            <label
              htmlFor="description"
              className="edit-details__form__box--label"
            >
              Description
            </label>
            <textarea
              name="description"
              className={submit === true && !description ? "edit-details__form__box--error" : "edit-details__form__box--textarea"}
              placeholder="Please enter a brief item description..."
              value={description}
              onChange={handleChangeDescriptions}
            />
            {submit === true && !description === true && <ErrorState />}
          </div>
          <div className="edit-details__form__box">
            <label
              htmlFor="categories"
              className="edit-details__form__box--label"
            >
              Category
            </label>
            <div className={
                  submit === true && !category
                    ? "edit-details__dropdown--error"
                    : "edit-details__dropdown"
                }>
            <select 
              id="categories"
              name="categories"
              className="edit-details__category-dropdown"
              value={category}
              onChange={handleChangeCategory}
            >
              <option value="" disabled>Please select</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Accessories">Accessories</option>
              <option value="Health">Health</option>
              <option value="Apparel">Apparel</option>
            </select>
            <img
                className="edit-details__dropdown-icon"
                src={arrowDropdown}
                alt="dropdown menu"
              />
            </div>
            {submit === true && !category === true && <ErrorState />}
          </div>
        </div>
      </section>
    </>
  );
};
export default EditInventoryDetails;
