import Collection from "./components/Collection";

const App = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen  bg-black/90">
      <img
        className="absolute top-0 left-0 -z-0 "
        src="/resources/bg-cafe-lg.jpg"
        alt=""
      />
      <Collection />
    </div>
  );
};

export default App;
