import { Amplify } from "aws-amplify";
import { worker } from "./src/mocks/worker.js";
import amplifyconfig from "./src/mocks/amplifyconfiguration_mock.json";

beforeAll(async () => {
  await worker.start();
  Amplify.configure(amplifyconfig);
  vi.mock(""); // FIXME: this line causes the test with network requests to fail, comment out to see passing test
});

afterEach(() => {
  worker.resetHandlers();
});

afterAll(() => {
  worker.stop();
});
