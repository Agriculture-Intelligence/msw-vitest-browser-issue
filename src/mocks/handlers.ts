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
  http.options(
    `https://mock-staging.s3.us-east-2.amazonaws.com/path/to/file.json`,
    () => {
      return new Response(null, {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,PUT,POST,DELETE",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Expose-Headers":
            "x-amz-server-side-encryption, x-amz-request-id, x-amz-id-2, ETag",
          "Access-Control-Max-Age": "3000",
          "Content-Length": "0",
          Date: "Fri, 03 Jan 2025 03:30:11 GMT",
          Server: "AmazonS3",
          Vary: "Origin, Access-Control-Request-Headers, Access-Control-Request-Method",
          "x-amz-id-2": "mock",
          "x-amz-request-id": "mock",
        },
      });
    }
  ),
  http.get(
    `https://mock-staging.s3.us-east-2.amazonaws.com/path/to/file.json`,
    () => {
      return undefined;
    }
  ),
];
