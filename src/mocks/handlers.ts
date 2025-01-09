import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("https://cognito-identity.us-east-2.amazonaws.com/", () => {
    return HttpResponse.json({
      Credentials: {
        AccessKeyId: "mock",
        Expiration: 1,
        SecretKey: "mock",
        SessionToken: "mock",
      },
      IdentityId: "us-east-2:mock",
    });
  }),
  http.get(
    `https://mock-staging.s3.us-east-2.amazonaws.com/path/to/file.json`,
    () => {
      return HttpResponse.json("mocked!");
    }
  ),
];
