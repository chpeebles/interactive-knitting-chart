import { ChartColor } from "../../enums";

export const getBorderColor = (color: ChartColor) => {
  switch (color) {
    case ChartColor.VANILLA:
      return "border-vanilla";
    case ChartColor.COBALT:
      return "border-cobalt";
    case ChartColor.MOSS:
      return "border-moss";
    case ChartColor.ROSE:
      return "border-rose";
    case ChartColor.BUTTERSCOTCH:
      return "border-butterscotch";
    default:
      return "border-cobalt";
  }
};
