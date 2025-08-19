import { useState } from "react";
import { ChartColor } from "../enums";

interface UseColorReturnProps {
  color: ChartColor;
  setColor: (color: ChartColor) => void;
}

const useColor = (): UseColorReturnProps => {
  const [color, setColor] = useState(ChartColor.COBALT);

  return { color, setColor };
};

export default useColor;
