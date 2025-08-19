import StitchNumberCell from "./StitchNumberCell";

interface StitchNumberRowProps {
  numStitches: number;
}

const StitchNumberRow: React.FC<StitchNumberRowProps> = ({ numStitches }) => {
  return (
    <tr>
      {Array.from({ length: numStitches }).map((_, footerStitchIndex) => {
        return (
          <StitchNumberCell
            key={`stitch-number-${footerStitchIndex}`}
            numStitches={numStitches}
            index={footerStitchIndex}
          />
        );
      })}
    </tr>
  );
};

export default StitchNumberRow;
