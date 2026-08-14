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
          justifyContent: "flex-end",
          backgroundColor: "#191B22",
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 75% 35%, rgba(11,110,153,0.35), transparent 55%)",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#3D8FB5",
          }}
        >
          UK tribunals only
        </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            fontSize: 64,
            fontWeight: 400,
            color: "#E8EDF2",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Independent Country Expert
        </div>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            fontSize: 26,
            color: "#C9C4BA",
            maxWidth: 720,
            lineHeight: 1.35,
          }}
        >
          Independent country evidence for UK immigration and asylum tribunals
        </div>
      </div>
    ),
    { ...size }
  );
}
