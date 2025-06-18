// import Button from "./Button";

const Card = () => {
  return (
    <div className="h-64 w-56 grid grid-rows-2 row-span-7 bg-white rounded-2xl shadow-lg">
      <img src="/assets/Coffee.jpg" alt="" />
      <div className="w-full grid grid-cols-2 "></div>
      {/* <Button text="Tags" /> */}
    </div>
  );
};

export default Card;
