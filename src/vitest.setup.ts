import { worker } from "./mocks/worker.js";

beforeAll(() => {
  worker.start();
});

afterEach(() => {
  worker.resetHandlers();
});

afterAll(() => {
  worker.stop();
});
