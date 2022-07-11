import "@testing-library/jest-dom/extend-expect";
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      aspath: "",
      push: jest.fn(),
    };
  },
}));

jest.spyOn(require("next/router"), "useRouter");
