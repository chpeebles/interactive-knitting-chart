import ChartRow from "./ChartRow";
import StitchNumberRow from "./StitchNumberRow";
import useColor from "../../hooks/useColor";
import { getBorderColor } from "./helpers";

const Chart: React.FC = () => {
  const { color } = useColor();
  const borderColor = getBorderColor(color);
  const numRows = 15;
  const numStitches = 20;

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl pb-5">Test Chart 1</h2>
      <table className="table-fixed">
        <tbody className={`border-5 ${borderColor} shadow-lg`}>
          <ChartRow numRows={numRows} numStitches={numStitches} />
        </tbody>
        <tfoot>
          <StitchNumberRow numStitches={numStitches} />
        </tfoot>
      </table>
    </div>
  );
};

export default Chart;
