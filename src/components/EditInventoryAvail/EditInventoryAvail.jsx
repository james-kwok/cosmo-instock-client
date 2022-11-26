import "./EditInventoryAvail.scss";
import ErrorState from "../ErrorState.js/ErrorState";

const EditInventoryAvail = ({
  handleChangeStatus,
  handleChangeWarehouse,
  handleChangeQuant,
  submit,
  status,
  warehouse,
  quant,
}) => {
  return (
    <>
      <section className="edit-availability">
        <h2 className="edit-availability__title">Item Availability</h2>
        <div action="" className="edit-availability__form">
          <div className="edit-availability__form__box">
            <label
              className="edit-availability__form__box--label"
            >
              Status
            </label>
            
          <div className="edit-availability__choices">
            <div className="edit-availability__choice">
              <input
                id="instock"
                name="radio"
                type="radio"
                value="In Stock"
                onChange={handleChangeStatus}
              ></input>
              <label className="edit-availability__value" htmlFor="instock">In stock</label>
            </div>

            <div className="edit-availability__choice">
              <input
                id="outstock"
                name="radio"
                type="radio"
                value="Out Of Stock"
                onChange={handleChangeStatus}
              ></input>
              <label className="edit-availability__value" htmlFor="outstock">Out of stock</label>
            </div>
            {submit === true && !status === true && <ErrorState />}
          </div>
          </div>
          <div className={`edit-availability__form__box  ${
            status === "Out Of Stock"
              ? "edit-availability__noshow"
              : ""
          }`}>
            <label
              className="edit-availability__form__box--label"
              htmlFor="quant"
            >
              Quantity
            </label>
            <input
              id="quant"
              name="quant"
              type="text"
              value={quant}
              className = {submit === true && !quant ? "edit-availability__form__box--error" : "edit-availability__form__box--input"}
              onChange={handleChangeQuant}
            ></input>
            {submit === true && !quant === true && <ErrorState />}
          </div>
          <div className="edit-availability__form__box">
            <label
              className="edit-availability__form__box--label"
              htmlFor="warehouse"
            >
              Warehouse
            </label>
            <select
              required
              id="warehouse"
              name="warehouse"
              className = {submit === true && !warehouse ? "edit-availability__form__box--error" : "edit-availability__form__box--input"}
              value={warehouse}
              onChange={handleChangeWarehouse}
            >
              <option value="" disabled>Please select</option>
              <option value="Washington">Washington</option>
              <option value="Manhattan">Manhattan</option>
              <option value="Santa Monica">Santa Monica</option>
              <option value="Jersey">Jersey</option>
              <option value="Seattle">Seattle</option>
              <option value="Miami">Miami</option>
              <option value="SF">SF</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};
export default EditInventoryAvail;
