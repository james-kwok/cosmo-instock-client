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
              htmlFor="instock"
            >
              Status
            </label>
            <div className="edit-availability__choice">
              <input
                id="instock"
                name="instock"
                type="radio"
                value={status}
                onChange={handleChangeStatus}
              ></input>
              <label htmlFor="instock">In stock</label>
              <input
                id="outstock"
                name="outstock"
                type="radio"
                value={status}
                onChange={handleChangeStatus}
              ></input>
              <label htmlFor="outstock">Out of stock</label>
            </div>
          </div>
          <div className="edit-availability__form__box">
            <label
              className="edit-availability__form__box--label"
              htmlFor="quant"
            >
              Quantity
            </label>
            <input
              className="edit-availability__form__box--input"
              id="quant"
              name="quant"
              type="text"
              value={quant}
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
              id="warehouse"
              name="warehouse"
              className="edit-availability__form__box--input"
              value={warehouse}
              onChange={handleChangeWarehouse}
            >
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
