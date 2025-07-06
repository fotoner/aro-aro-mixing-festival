import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "로싱스 - 아로아로 믹싱 페스티벌 2025",
  description:
    "아로아로 애니송 클럽 주최 온라인 믹싱 대회 - 새로운 뉴비 디제이 발굴과 자유로운 믹싱 문화 확산",
  keywords: "아로아로, 믹싱, 페스티벌, 애니송, DJ, 공모, 로싱스",
  openGraph: {
    title: "아로아로 믹싱 페스티벌 2025",
    description: "아로아로 애니송 클럽 주최 믹싱 페스티벌",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "아로아로 믹싱 페스티벌 2025",
    description: "아로아로 애니송 클럽 주최 믹싱 페스티벌",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          lineHeight: 1.6,
          color: "#1a1a1a",
          margin: 0,
          padding: 0,
          backgroundColor: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
