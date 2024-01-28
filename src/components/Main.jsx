import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { useState } from "react";
import { getAllItems, typeQuery, nameQuery } from "../http";

export default function Main() {
  const [typeSelection, setTypeSelection] = useState({
    typeName: "",
    queryFn: getAllItems,
  });
  function handleClick(type) {
    setTypeSelection({ typeName: type, queryFn: () => typeQuery(type) });
  }
  function handleSearch(name) {
    setTypeSelection({ typeName: "", queryFn: () => nameQuery(name) });
  }
  return (
    <main className=" sm:mx-[10%]  my-8 border-8 rounded-lg border-[#FFFFFF] mt-32">
      <SearchBar onSearch={handleSearch} />
      <div className="flex">
        <Sidebar
          handleClick={handleClick}
          selectedType={typeSelection.typeName}
        />
        <Content key={typeSelection.typeName} queryFn={typeSelection.queryFn} />
      </div>
    </main>
  );
}
