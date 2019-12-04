import React from "react";
import { CloudflareImageParameters } from "../../@types/index.d";
import cfImageParametersToQuery from "../../utils/cfConfigToQuery";

export const CloudflareImage: React.FC<CloudflareImageParameters> = props => (
  <img src={`/cdn-cgi/image/${cfImageParametersToQuery(props)}`} />
);
