import { getGists, gistsStart, gistsSuccess, gistsError } from "../../gists";

describe("get gists thunk", () => {
  it("get gists success", async () => {
    const PAGE = 2;

    const dipatch = jest.fn();
    const getGistsApi = jest.fn().mockResolvedValue({ data: "ok" });

    const thunk = getGists(PAGE);

    await thunk(dipatch, null, { getGistsApi });

    expect(getGistsApi).toBeCalledTimes(1);
    expect(getGistsApi).toBeCalledWith(PAGE);

    expect(dipatch).toBeCalledTimes(2);
    expect(dipatch).toHaveBeenNthCalledWith(1, gistsStart());
    expect(dipatch).toHaveBeenNthCalledWith(2, gistsSuccess("ok"));
  });

  it("get gists error", async () => {
    const PAGE = 2;

    const dipatch = jest.fn();
    const getGistsApi = jest.fn().mockRejectedValue({ error: "error" });

    const thunk = getGists(PAGE);

    await thunk(dipatch, null, { getGistsApi });

    expect(getGistsApi).toBeCalledTimes(1);
    expect(getGistsApi).toBeCalledWith(PAGE);

    expect(dipatch).toBeCalledTimes(2);
    expect(dipatch).toHaveBeenNthCalledWith(1, gistsStart());
    expect(dipatch).toHaveBeenNthCalledWith(2, gistsError({ error: "error" }));
  });
});
