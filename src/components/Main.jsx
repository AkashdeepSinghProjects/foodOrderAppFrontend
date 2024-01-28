import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import Content from "./Content";
export default function Main() {
  return (
    <main className=" sm:mx-[10%]  my-8 border-8 rounded-lg border-[#FFFFFF]">
      <SearchBar />
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </main>
  );
}
