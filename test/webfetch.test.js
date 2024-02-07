// Hack: Jest does not want to work with normal fetch, importing it via external JS works though
const { extFetch } = require("./extFetch.js");
const PROJECT_ID = "";

const endpointResponseList = [
  {
    endpoint: "/assets/test.json",
    response: 404,
  },
  {
    endpoint: "/api/test.json",
    response: 404,
  },
  {
    endpoint: "/",
    response: 200,
  },
  {
    endpoint: "/something/test.json",
    response: 200,
  },
  {
    endpoint: "/help/test.json",
    response: 200,
  },
  {
    endpoint: "/a/test.json",
    response: 200,
  },
  {
    endpoint: "/as/test.json",
    response: 200,
  },
  {
    endpoint: "/ass/test.json",
    response: 200,
  },
  {
    endpoint: "/asse/test.json",
    response: 200,
  },
  {
    endpoint: "/asset/test.json",
    response: 200,
  },
  {
    endpoint: "/ap/test.json",
    response: 200,
  },
  {
    endpoint: "/assetss/test.json",
    response: 200,
  },
  {
    endpoint: "/assets2/test.json",
    response: 200,
  },
  {
    endpoint: "/apii/test.json",
    response: 200,
  },
  {
    endpoint: "/api2/test.json",
    response: 200,
  },
  {
    endpoint: "/test.json",
    response: 200,
  },
];

for (let endpointResponse of endpointResponseList) {
  it(`should return ${endpointResponse["response"]} on ${endpointResponse["endpoint"]}`, async () => {
    const res = await extFetch(
      `https://${PROJECT_ID}.web.app${endpointResponse["endpoint"]}`
    );
    expect(res.status).toEqual(endpointResponse["response"]);
  });
}
