import useColor from "../../hooks/useColor";
import { getBorderColor } from "./helpers";

interface ChartCellProps {
  numStitches: number;
}

const ChartCell: React.FC<ChartCellProps> = ({ numStitches }) => {
  const { color } = useColor();
  const borderColor = getBorderColor(color);

  return (
    <>
      {Array.from({ length: numStitches }).map((_, stitchIndex) => {
        return (
          <td
            key={`stitch-${stitchIndex}`}
            className={`w-7 h-7 border ${borderColor} text-xl text-center`}
          >
            O
          </td>
        );
      })}
    </>
  );
};

export default ChartCell;
