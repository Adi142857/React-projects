import ItemList from "./ItemList.js";

const ResCategory = ({ category }) => {
  return (
    <div>
      {/* Header */}
      <div className="w-7/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between">
          <span className="font-bold sm:text-sm lg:text-lg">
            {category.title} ({category.itemCards.length})
          </span>
          <span>⬇️ </span>
          {/* Fix: Use category.itemCards instead of data.itemCards */}
        </div>
        <ItemList items={category.itemCards} />
      </div>
      {/* Accordion Body */}
    </div>
  );
};

export default ResCategory;
