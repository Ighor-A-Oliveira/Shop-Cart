import Rating from "./Rating";
import { CartState } from "../Context/Context";

const Filters = () => {
  const {
       state: { byStock, byFastDelivery, sort, byRating },
  } = CartState();

  return (
    <div className=" bg-gray-600 flex  w-[20%] m-[10px] h-[86vh] text-whiteflex flex-col gap-3 p-4 border rounded shadow-md max-w-xs text-sm">
      <span className="text-lg font-semibold pb-[20px]">Filter Products</span>

      <label className="inline-flex items-center gap-2">
        <input
          type="radio"
          name="sort"
          checked={sort === "lowToHigh"}
        />
        <span>Ascending</span>
      </label>

      <label className="inline-flex items-center gap-2">
        <input
          type="radio"
          name="sort"
          checked={sort === "highToLow"}
        />
        <span>Descending</span>
      </label>

      <label className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          checked={byStock}
        />
        <span>Include Out of Stock</span>
      </label>

      <label className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          checked={byFastDelivery}
        />
        <span>Fast Delivery Only</span>
      </label>

      <div className="flex items-center gap-2">
        <label className="whitespace-nowrap">Rating:</label>
        <Rating
          rating={byRating}
          style={{ cursor: "pointer" }}
        />
      </div>
 
      <button
        className="mt-2 px-3 py-1 bg-gray-100 border rounded hover:bg-gray-200 select-none"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
