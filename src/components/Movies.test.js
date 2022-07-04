import { render, screen } from "@testing-library/react";

import MovieCard from "./MovieCard";

describe("MovieCard component", () => {
  test("renders movies", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: "1",
          title: "movies",
          overview: "overview",
          poster: { medium: "https://www.image.com" },
        },
      ],
    });
    render(<MovieCard />);
    const listElements = await screen.findAllByRole("listitem");
    expect(listElements).not.toHaveLength(0);
  });
});
