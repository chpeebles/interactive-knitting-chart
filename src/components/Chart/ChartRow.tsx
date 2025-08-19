import ChartCell from "./ChartCell";

interface ChartRowProps {
  numRows: number;
  numStitches: number;
}

const ChartRow: React.FC<ChartRowProps> = ({ numRows, numStitches }) => {
  return (
    <>
      {Array.from({ length: numRows }).map((_, rowIndex) => {
        return (
          <tr key={`row-${rowIndex}`}>
            <ChartCell numStitches={numStitches} />
          </tr>
        );
      })}
    </>
  );
};

export default ChartRow;
