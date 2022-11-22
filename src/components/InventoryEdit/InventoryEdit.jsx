import "./InventoryEdit.scss";
function InventoryEdit() {
  function yesnoCheck() {
    if (document.getElementById("instock").checked) {
      document.getElementById("quant").type = "text";
    } else {
      document.getElementById("quant").type = "hidden";
    }
  }

  return (
    <>
      <h2>Edit Inventory Item</h2>
      <section className="edit-details">
        <h3>Item Details</h3>
        <form action="" className="edit-details__form">
          <label htmlFor="item-name">Item Name</label>
          <input id="item-name" name="item-name" type="text"></input>
          <label htmlFor="item-description">Description</label>
          <textarea id="item-description" name="item-description"></textarea>
          <label htmlFor="categories">Category</label>
          <select id="categories">
            <option value="electronics">electronics</option>
            <option value="gear">gear</option>
          </select>
        </form>
      </section>

      <section classname="edit__availability">
        <h3>Item Availability</h3>
        <form action="" className="edit-availability__form">
          <div className="status">
            <label htmlFor="instock">Status</label>
            <div className="edit-availability__choice">
              <input
                id="instock"
                value="instock"
                name="instock"
                type="radio"
                onClick={yesnoCheck}
              ></input>
              <label htmlFor="instock">In stock</label>
              <input
                id="outstock"
                name="outstock"
                defaultValue="outstock"
                type="radio"
              ></input>
              <label htmlFor="outstock">Out of stock</label>
            </div>
          </div>
          <label for="quant">Quantity</label>
          <input id="quant" name="quant" value="quant" type="text"></input>
          <div className="edit-availability__warehouse">
            <label htmlFor="warehouse">Warehouse</label>
            <select id="warehouse">
              <option value="Manhattan">Manhattan</option>
              <option value="New york">New york</option>
            </select>
          </div>
        </form>
      </section>
      <div className="edit__buttons">
        <span className="edit__button">Cancel</span>
        <span className="edit__button">Save</span>
      </div>
    </>
  );
}
export default InventoryEdit;
