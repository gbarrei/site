import { ImageResponse } from "next/og";

export const alt = "Guillermo Barreiro, Principal Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0b0d",
          color: "#ecebe6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#d7ff3c" }}>
          GUILLERMO BARREIRO / PRINCIPAL PRODUCT MANAGER
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, lineHeight: 1, letterSpacing: -3 }}>
          <span>Bringing order to chaos</span>
          <span style={{ display: "flex" }}>
            to make&nbsp;<span style={{ color: "#d7ff3c", fontStyle: "italic" }}>ship</span>&nbsp;
            <span style={{ color: "#9a9ea8" }}>happen.</span>
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9a9ea8" }}>
          Product strategy, AI, data and cross-functional leadership. Edmonton, Canada.
        </div>
      </div>
    ),
    size,
  );
}
