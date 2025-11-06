import React from "react";

function AddUser({ onAdd }) {
  const [adding, setAdding] = React.useState(false);
  const [user, setUser] = React.useState({
    name: "",
    username: "",
    email: "",
    address: { street: "", suite: "", city: "" },
    phone: "",
    website: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (["street", "suite", "city"].includes(id)) {
      setUser({ ...user, address: { ...user.address, [id]: value } });
    } else {
      setUser({ ...user, [id]: value });
    }
  };

  const handleAdd = () => {
    if (user.name === "" || user.username === "") {
      alert("Vui lòng nhập Name và Username!");
      return;
    }
    onAdd(user);
    setUser({
      name: "",
      username: "",
      email: "",
      address: { street: "", suite: "", city: "" },
      phone: "",
      website: "",
    });
    setAdding(false);
  };

  return (
    <div>
      <button onClick={() => setAdding(true)}>Thêm</button>
      {adding && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Thêm người dùng</h4>
            <div>
              <label htmlFor="name">Name: </label>
              <input
                id="name"
                type="text"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="username">Username: </label>
              <input
                id="username"
                type="text"
                value={user.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                id="email"
                type="text"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="street">Street: </label>
              <input
                id="street"
                type="text"
                value={user.address.street}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="suite">Suite: </label>
              <input
                id="suite"
                type="text"
                value={user.address.suite}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="city">City: </label>
              <input
                id="city"
                type="text"
                value={user.address.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone: </label>
              <input
                id="phone"
                type="text"
                value={user.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="website">Website: </label>
              <input
                id="website"
                type="text"
                value={user.website}
                onChange={handleChange}
              />
            </div>
            <div>
              <button onClick={handleAdd}>Lưu</button>
              <button onClick={() => setAdding(false)}>Hủy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddUser;
