import Rating from "./Rating";
import { CartState } from "../Context/Context";

const Filters = () => {
  const {
    productDispatch,
    productState: {  byFastDelivery, sort, byRating },
  } = CartState();

  return (
    <div className=" bg-black hidden md:flex md:w-[200px] lg:w-[20%] m-[10px] h-[86vh] text-white flex-col gap-3 p-4 border rounded shadow-md max-w-xs text-sm">
      <span className="text-lg font-semibold pb-[20px]">Filter Products</span>

      <label className="inline-flex items-center gap-2">
        <input
          type="radio"
          name="sort"
          checked={sort === "lowToHigh" ? true : false}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
        />
        <span>Ascending Price</span>
      </label>

      <label className="inline-flex items-center gap-2">
        <input
          type="radio"
          name="sort"
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
        <span>Descending Price</span>
      </label>

      <label className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
        <span>Fast Delivery Only</span>
      </label>

      <div className="flex items-center gap-2">
        <label className="whitespace-nowrap">Rating:</label>
        <Rating
          rating={byRating}
          style={{ cursor: "pointer" }}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
        />
      </div>
 
      <button
        className="mt-2 px-3 py-2 bg-gray-100 border rounded hover:bg-gray-200 select-none text-black"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
