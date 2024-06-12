import { List } from "./components/list";
import { ListCategory } from "./components/list-category";

function Listing() {
  return (
    <div className="h-screen  py-16">
      <div className="container mx-auto mt-16">
        <ListCategory />
        <List />
      </div>
    </div>
  );
}
export default Listing;
