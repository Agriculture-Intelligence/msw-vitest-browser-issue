import { downloadData } from "aws-amplify/storage";

it("calls Amplify downloadData", async () => {
  const data = downloadData({ path: "path/to/file.json" });
  expect(data).toBeDefined();
  const response = await data.result;
  expect(response).toBeDefined();
});
