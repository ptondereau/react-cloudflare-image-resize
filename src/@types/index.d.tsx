export interface CloudflareImageParameters {
  src: string;
  width?: number;
  height?: number;
  fit?: FitMode;
  gravity?: "side" | Gravity;
  quality?: number;
  format?: "auto";
  onerror?: "redirect" | string;
}

export type Gravity = {
  x: number;
  y: number;
};

export type FitMode = "scale-down" | "contain" | "cover" | "crop";
