import Collection from "./components/Collection";

const App = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen  bg-amber-800">
      <img
        className="absolute top-0 left-0 -z-[1]"
        src="/resources/bg-cafe-lg.jpg"
        alt=""
      />
      <Collection />
    </div>
  );
};

export default App;
