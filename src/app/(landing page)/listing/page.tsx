import { List } from "./components/list";
import { ListCategory } from "./components/list-category";
import prisma from "~/server/db";
async function Listing() {
  const property = await prisma.property.findMany({});
  return (
    <div className="h-screen  py-16">
      <div className="container mx-auto mt-16">
        <ListCategory />
        <List properties={property} />
      </div>
    </div>
  );
}
export default Listing;
