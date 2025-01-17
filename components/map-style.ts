// eslint-disable-next-line import/named
import { LayerProps } from "react-map-gl";

export const gridLayer: LayerProps = {
  id: "grid-layer",
  type: "fill",
  paint: {
    "fill-color": "#FFFFFF",
    "fill-outline-color": "#000000",
    "fill-opacity": 0.2,
  },
};
export const gridHighlightLayer: LayerProps = {
  id: "grid-highlight-layer",
  type: "fill",
  source: "grid-layer",
  paint: {
    "fill-color": "#FFFFFF",
    "fill-outline-color": "#000000",
    "fill-opacity": 0.5,
  },
};
export function claimLayer(isValid: boolean): LayerProps {
  return {
    id: "claim-layer",
    type: "fill",
    source: "grid-layer",
    paint: {
      "fill-color": isValid ? "#FAFF00" : "#E11515",
      "fill-opacity": 0.75,
    },
  };
}
export const parcelLayer: LayerProps = {
  id: "parcels-layer",
  type: "fill",
  paint: {
    "fill-color": "#2FC1C1",
    "fill-opacity": 0.5,
  },
};
export const parcelHighlightLayer: LayerProps = {
  id: "parcels-highlight-layer",
  type: "fill",
  paint: {
    "fill-color": "#2FC1C1",
    "fill-opacity": 1.0,
  },
};
