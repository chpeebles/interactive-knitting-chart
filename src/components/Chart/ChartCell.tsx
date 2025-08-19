import useColor from "../../hooks/useColor";

interface ChartCellProps {
  numStitches: number;
}

const ChartCell: React.FC<ChartCellProps> = ({ numStitches }) => {
  const { color } = useColor();

  return (
    <>
      {Array.from({ length: numStitches }).map((_, stitchIndex) => {
        return (
          <td
            key={`stitch-${stitchIndex}`}
            className={`w-7 h-7 border border-${color} text-xl text-center`}
          >
            O
          </td>
        );
      })}
    </>
  );
};

export default ChartCell;
