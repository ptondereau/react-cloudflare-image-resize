import { CloudflareImageParameters } from "../@types/index.d";

const cfImageParametersToQuery = (
  parameters: CloudflareImageParameters
): string => {
  const { src, ...parametersWithoutSrc } = parameters;

  return `?${(Object.keys(parametersWithoutSrc) as Array<
    keyof typeof parametersWithoutSrc
  >)
    .map(
      parameter => `${parameter}=${encodeURIComponent(parameters[parameter])}`
    )
    .join("&")}/${src}`.trim();
};

export default cfImageParametersToQuery;
