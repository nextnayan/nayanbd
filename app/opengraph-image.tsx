import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Nayan Sarkar Full Stack Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
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
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(37, 99, 235) 55%, rgb(147, 51, 234) 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 700, opacity: 0.95 }}>
          nayanbd.com
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>
            Nayan Sarkar
          </div>
          <div style={{ fontSize: 38, fontWeight: 600, opacity: 0.95 }}>
            Full Stack Developer Portfolio
          </div>
          <div style={{ fontSize: 28, opacity: 0.92 }}>
            Next.js • React • Python • Django
          </div>
        </div>

        <div style={{ fontSize: 24, opacity: 0.9 }}>
          Projects, skills, and practical web solutions
        </div>
      </div>
    ),
    size
  );
}
