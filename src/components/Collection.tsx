import Card from "./Card";

// interface CardDetails {
//   id: number;
//   name: string;
//   image: string;
//   price: string;
//   rating: number;
//   votes: number;
//   popular: boolean;
//   available: boolean;
// }

const Collection = () => {
  return (
    <div className="w-[70dvw] h-[80dvh] bg-black/90 rounded-2xl z-10">
      <div className="flex flex-col items-center justify-center w-full space-y-4 py-8">
        <h2 className="text-white text-2xl ">Our Collection</h2>
        <p className="w-[40%] text-center text-gray-500">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="flex items-center gap-6 text-white">
          <button className="bg-gray-500 px-2 py-1 rounded-md">
            All Products{" "}
          </button>
          <button>Available Now </button>
        </div>
      </div>

      <div>
        <Card />
      </div>
    </div>
  );
};

export default Collection;
