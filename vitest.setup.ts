import { Amplify } from "aws-amplify";
import { worker } from "./src/mocks/worker.js";
import amplifyconfig from "./src/mocks/amplifyconfiguration_mock.json";
beforeAll(async () => {
  Amplify.configure(amplifyconfig);
  await worker.start();
});

afterEach(() => {
  worker.resetHandlers();
});

afterAll(() => {
  worker.stop();
});
