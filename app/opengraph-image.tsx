import { ImageResponse } from "next/og";

export const alt = "Independent Country Expert — UK Immigration Tribunal Expert Witness Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2C3E50",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Independent Country Expert
        </div>
        <p
          style={{
            marginTop: 32,
            fontSize: 32,
            fontWeight: 600,
            color: "#B87333",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          UK Immigration Tribunal Expert Witness Services
        </p>
      </div>
    ),
    { ...size }
  );
}
