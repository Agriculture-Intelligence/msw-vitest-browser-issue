# Vitest Browser + MSW

[Mock Service Worker](https://github.com/mswjs/msw) usage example with [Vitest](https://github.com/vitest-dev/vitest) in browser mode.

The amplifyconfiguration_mock.json file is used to configure the Amplify SDK to use a mock server instead of the real backend, however there is a bug that seems to actually perform network requests, since providing a IdentityPoolId is required, and the SDK will try to fetch the credentials from the server.

Providing `"aws_cognito_identity_pool_id": "us-east-2:mock",` throws `ValidationException: 1 validation error detected: Value 'us-east-2:mock' at 'identityPoolId' failed to satisfy constraint: Member must satisfy regular expression pattern: [\w-]+:[0-9a-f-]+`

When the regex is satisfied with a fake id, throws `ResourceNotFoundException: IdentityPool 'us-east-2:<fake_id>' not found.`

The only way to make it work is to provide a real IdentityPoolId, which is not the expected behavior. And in this scenario, the `downloadData` method will fail with `[ERROR] 18:46.980 xhr-http-handler - Network Error`
