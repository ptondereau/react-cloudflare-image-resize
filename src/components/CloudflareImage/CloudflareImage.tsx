import React from "react";
import { CloudflareImageParameters } from "../../@types/CloudflareImage";
import cfImageParametersToQuery from "../../utils/cfConfigToQuery";

interface CloudflareImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  cloudflareParameters: CloudflareImageParameters;
}

export const CloudflareImage: React.FC<CloudflareImageProps> = props => {
  const { cloudflareParameters, src, ...imgProps } = props;

  return (
    <img
      src={`/cdn-cgi/image/${cfImageParametersToQuery(
        cloudflareParameters
      )}/${src}`}
      {...imgProps}
    />
  );
};
