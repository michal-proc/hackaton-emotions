const apiConfig = {
  host: "10.0.5.46",
  port: 8000,
};

export const apiRoute = (path = "/") =>
  `http://${apiConfig.host}:${apiConfig.port}${path}`;

export default apiRoute;
