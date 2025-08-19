interface StitchNumberCellProps {
  numStitches: number;
  index: number;
}

const StitchNumberCell: React.FC<StitchNumberCellProps> = ({
  numStitches,
  index,
}) => {
  const stitchNumber = numStitches - index;
  const isEven = stitchNumber % 2 === 0;

  return (
    <th className={`pt-2  text-center ${isEven ? "invisible" : ""}`}>
      {stitchNumber}
    </th>
  );
};

export default StitchNumberCell;
