import useColor from "../../hooks/useColor";

const Header: React.FC = () => {
  const { color } = useColor();

  return (
    <header className="py-10">
      <h1 className={`text-6xl font-bold pb-5 text-${color}`}>
        "i can make that" designs
      </h1>
      <h2 className="text-2xl">interactive knitting chart</h2>
    </header>
  );
};

export default Header;
