import { render, screen } from "@testing-library/react";
import Permit from "@/pages/permit";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

describe("Permit Page will render", () => {
  it("renders a teble", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Permit />
      </QueryClientProvider>
    );
    const heading = screen.getByRole("table");

    expect(heading).toBeInTheDocument();
  });
});
