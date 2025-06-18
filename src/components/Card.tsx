import Button from "./Button";

const Card = () => {
  return (
    <div className="h-64 w-56 grid grid-rows-2 bg-white rounded-2xl shadow-lg">
      <img src="/assets/Coffee.jpg" alt="" />
      <div className="w-full grid grid-cols-2 p-2 ">
        <div>
          <h2 className="">Coffee</h2>
          <div>
            <img src="/resources/Star.svg" alt="" />
            <span>4.7(65 votes)</span>
          </div>
        </div>
        <div>
          <Button text="Tags" />
        </div>
      </div>
    </div>
  );
};

export default Card;
