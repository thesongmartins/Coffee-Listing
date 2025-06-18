interface Tags {
  text: string;
}

const Button = ({ text }: Tags) => {
  return (
    <div className=" bg-teal-50 py-1 px-4 rounded-md w-24 text-black flex items-center justify-center">
      {text}
    </div>
  );
};

export default Button;
