import styled from "@emotion/styled";
import { theme, mediaQuery } from "@/lib/theme";

// 기본 컨테이너
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};

  ${mediaQuery.md} {
    padding: 0 ${theme.spacing.lg};
  }
`;

// 섹션 래퍼
export const Section = styled.section<{
  background?: string;
  padding?: string;
}>`
  padding: ${(props) => props.padding || `${theme.spacing["5xl"]} 0`};
  background: ${(props) => props.background || theme.colors.background.light};

  ${mediaQuery.md} {
    padding: ${(props) => props.padding || `${theme.spacing["5xl"]} 0`};
  }
`;

// 그라데이션 배경
export const GradientBackground = styled.div<{ gradient?: string }>`
  background: ${(props) => props.gradient || theme.colors.gradients.pinkToBlue};
  position: relative;
  overflow: hidden;
`;

// 텍스트 스타일
export const Heading1 = styled.h1<{ color?: string; align?: string }>`
  font-size: ${theme.typography.fontSize["4xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${(props) => props.color || theme.colors.text.primary};
  text-align: ${(props) => props.align || "left"};
  margin: 0;
  line-height: ${theme.typography.lineHeight.tight};

  ${mediaQuery.md} {
    font-size: ${theme.typography.fontSize["5xl"]};
  }

  ${mediaQuery.lg} {
    font-size: ${theme.typography.fontSize["6xl"]};
  }
`;

export const Heading2 = styled.h2<{ color?: string; align?: string }>`
  font-size: ${theme.typography.fontSize["3xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${(props) => props.color || theme.colors.text.primary};
  text-align: ${(props) => props.align || "left"};
  margin: 0;
  line-height: ${theme.typography.lineHeight.tight};

  ${mediaQuery.md} {
    font-size: ${theme.typography.fontSize["4xl"]};
  }
`;

export const Heading3 = styled.h3<{ color?: string; align?: string }>`
  font-size: ${theme.typography.fontSize["2xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${(props) => props.color || theme.colors.text.primary};
  text-align: ${(props) => props.align || "left"};
  margin: 0;
  line-height: ${theme.typography.lineHeight.tight};

  ${mediaQuery.md} {
    font-size: ${theme.typography.fontSize["3xl"]};
  }
`;

export const Text = styled.p<{ color?: string; size?: string; align?: string }>`
  font-size: ${(props) => props.size || theme.typography.fontSize.base};
  color: ${(props) => props.color || theme.colors.text.primary};
  text-align: ${(props) => props.align || "left"};
  margin: 0;
  line-height: ${theme.typography.lineHeight.relaxed};
`;

// 버튼 스타일
export const Button = styled.button<{
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  border: none;
  border-radius: ${theme.borderRadius.full};
  font-weight: ${theme.typography.fontWeight.bold};
  cursor: pointer;
  transition: all ${theme.animation.duration.normal}
    ${theme.animation.easing.easeOut};
  text-decoration: none;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  /* 크기 스타일 */
  ${(props) => {
    switch (props.size) {
      case "sm":
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.typography.fontSize.sm};
        `;
      case "lg":
        return `
          padding: ${theme.spacing.lg} ${theme.spacing.xl};
          font-size: ${theme.typography.fontSize.lg};
        `;
      default:
        return `
          padding: ${theme.spacing.md} ${theme.spacing.lg};
          font-size: ${theme.typography.fontSize.base};
        `;
    }
  }}

  /* 변형 스타일 */
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return `
          background: ${theme.colors.gradients.pinkToBlue};
          color: ${theme.colors.text.white};
          box-shadow: ${theme.shadows.md};
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.lg};
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
      case "secondary":
        return `
          background: ${theme.colors.background.light};
          color: ${theme.colors.primary.pink};
          border: 2px solid ${theme.colors.primary.pink};
          
          &:hover {
            background: ${theme.colors.primary.pink};
            color: ${theme.colors.text.white};
            transform: translateY(-2px);
          }
        `;
      case "outline":
        return `
          background: transparent;
          color: ${theme.colors.text.primary};
          border: 2px solid ${theme.colors.border.light};
          
          &:hover {
            border-color: ${theme.colors.primary.pink};
            color: ${theme.colors.primary.pink};
          }
        `;
      case "ghost":
        return `
          background: transparent;
          color: ${theme.colors.text.primary};
          
          &:hover {
            background: ${theme.colors.background.pinkLight};
            color: ${theme.colors.primary.pink};
          }
        `;
      default:
        return `
          background: ${theme.colors.primary.pink};
          color: ${theme.colors.text.white};
          
          &:hover {
            background: ${theme.colors.primary.red};
            transform: translateY(-2px);
          }
        `;
    }
  }}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;

// 카드 스타일
export const Card = styled.div<{
  borderColor?: string;
  hoverEffect?: boolean;
  padding?: string;
}>`
  background: ${theme.colors.background.light};
  border: 2px solid ${(props) => props.borderColor || theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  padding: ${(props) => props.padding || theme.spacing.xl};
  transition: all ${theme.animation.duration.normal}
    ${theme.animation.easing.easeOut};

  ${(props) =>
    props.hoverEffect &&
    `
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.lg};
    }
  `}
`;

// 배지 스타일
export const Badge = styled.span<{
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.full};
  font-weight: ${theme.typography.fontWeight.medium};
  text-align: center;

  ${(props) => {
    switch (props.size) {
      case "sm":
        return `
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: ${theme.typography.fontSize.xs};
        `;
      default:
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.typography.fontSize.sm};
        `;
    }
  }}

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return `
          background: ${theme.colors.primary.pink};
          color: ${theme.colors.text.white};
        `;
      case "secondary":
        return `
          background: ${theme.colors.primary.blue};
          color: ${theme.colors.text.white};
        `;
      case "outline":
        return `
          background: transparent;
          color: ${theme.colors.primary.pink};
          border: 1px solid ${theme.colors.primary.pink};
        `;
      default:
        return `
          background: ${theme.colors.background.pinkLight};
          color: ${theme.colors.primary.pink};
        `;
    }
  }}
`;

// 그리드 레이아웃
export const Grid = styled.div<{
  columns?: number;
  gap?: string;
  mdColumns?: number;
  lgColumns?: number;
}>`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.gap || theme.spacing.lg};

  ${mediaQuery.md} {
    grid-template-columns: repeat(
      ${(props) => props.mdColumns || props.columns || 2},
      1fr
    );
  }

  ${mediaQuery.lg} {
    grid-template-columns: repeat(
      ${(props) => props.lgColumns || props.columns || 3},
      1fr
    );
  }
`;

// 플렉스 레이아웃
export const Flex = styled.div<{
  direction?: "row" | "column";
  justify?: "start" | "center" | "end" | "between" | "around";
  align?: "start" | "center" | "end" | "stretch";
  gap?: string;
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => {
    switch (props.justify) {
      case "start":
        return "flex-start";
      case "center":
        return "center";
      case "end":
        return "flex-end";
      case "between":
        return "space-between";
      case "around":
        return "space-around";
      default:
        return "flex-start";
    }
  }};
  align-items: ${(props) => {
    switch (props.align) {
      case "start":
        return "flex-start";
      case "center":
        return "center";
      case "end":
        return "flex-end";
      case "stretch":
        return "stretch";
      default:
        return "flex-start";
    }
  }};
  gap: ${(props) => props.gap || "0"};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
`;
