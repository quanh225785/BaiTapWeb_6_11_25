import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import AddUser from "./AddUser";
import ResultTable from "./ResultTable";

function App() {
  const [kw, setKeyword] = React.useState("");
  const [newUser, setNewUser] = React.useState(null);

  return (
    <div>
      <h1>Quản lý người dùng</h1>
      <SearchForm onChangeValue={setKeyword} />
      <AddUser onAdd={setNewUser} />
      <ResultTable
        keyword={kw}
        user={newUser}
        onAdded={() => setNewUser(null)}
      />
    </div>
  );
}

export default App;
