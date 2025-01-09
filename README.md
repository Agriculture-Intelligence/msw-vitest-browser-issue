# Vitest Browser + MSW

[Mock Service Worker](https://github.com/mswjs/msw) usage example with [Vitest](https://github.com/vitest-dev/vitest) in browser mode.

When the vitest environment is setup with ANY `vi.mock` calls, it appears to disrupt the expected functionality of the worker, leading to intercepted calls not being properly mocked. Notice how the `downloadData` method will fail with `[ERROR] 18:46.980 xhr-http-handler - Network Error` when the `vi.mock` call is present, but will work as expected when it is removed.
