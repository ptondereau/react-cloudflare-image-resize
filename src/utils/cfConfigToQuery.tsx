import { CloudflareImageParameters, Gravity } from "../@types/CloudflareImage";

const gravityToQuery = (gravity: "side" | Gravity): string =>
  `gravity=${gravity === "side" ? "side" : `${gravity.x}x${gravity.y}`}`;

const cfImageParametersToQuery = (
  parameters: CloudflareImageParameters
): string => {
  const { gravity, ...parametersWithoutGravity } = parameters;

  const query = `?${(Object.keys(parametersWithoutGravity) as Array<
    keyof typeof parametersWithoutGravity
  >)
    .filter(
      parameter =>
        Boolean(parametersWithoutGravity[parameter]) ||
        parametersWithoutGravity[parameter] === 0
    )
    .map(
      parameter =>
        `${parameter}=${encodeURIComponent(
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          parametersWithoutGravity[parameter]!
        )}`
    )
    .join("&")}`.trim();

  return gravity ? `${query}&${gravityToQuery(gravity)}` : query;
};

export default cfImageParametersToQuery;
