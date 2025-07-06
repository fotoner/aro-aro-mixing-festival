"use client";

import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { theme, mediaQuery } from "@/lib/theme";
import {
  Container,
  Section,
  GradientBackground,
  Heading1,
  Heading2,
  Heading3,
  Text,
  Button,
  Card,
  Badge,
  Grid,
  Flex,
} from "@/components/styled/base";
import {
  Music,
  Headphones,
  Disc3,
  Sparkles,
  Calendar,
  Trophy,
  Users,
  Mail,
  Twitter,
  ExternalLink,
  Star,
  Volume2,
  Zap,
  Heart,
  Gift,
} from "lucide-react";

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setScreenSize({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        width,
        height,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

// 히어로 섹션 스타일
const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${theme.colors.primary.red};
`;

const AnimatedBackground = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

const FloatingIcon = styled.div<{
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  animation?: string;
  opacity?: string;
}>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  opacity: ${(props) => props.opacity || "0.1"};

  ${(props) => {
    switch (props.animation) {
      case "spin":
        return "animation: spin-slow 3s linear infinite;";
      case "bounce":
        return "animation: bounce 1s infinite;";
      case "pulse":
        return "animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;";
      default:
        return "";
    }
  }}

  svg {
    color: ${theme.colors.text.white};
  }
`;

const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: ${theme.colors.text.white};
`;

const TopText = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  letter-spacing: 0.1em;
  text-align: center;
  padding: 0 1rem;

  ${mediaQuery.md} {
    font-size: ${theme.typography.fontSize.base};
  }

  ${mediaQuery.lg} {
    font-size: ${theme.typography.fontSize.lg};
  }

  ${mediaQuery.xl} {
    font-size: ${theme.typography.fontSize.xl};
  }
`;

// 리팩토링된 타이틀 컴포넌트들
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing["2xl"]};
  width: 100%;
  max-width: 1000px;
  position: relative;
`;

const TitleRow = styled.div<{ offset?: number }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  left: ${(props) => (props.offset ? `${props.offset * 0.6}rem` : "0")};

  ${mediaQuery.md} {
    left: ${(props) => (props.offset ? `${props.offset * 0.7}rem` : "0")};
  }

  ${mediaQuery.lg} {
    left: ${(props) => (props.offset ? `${props.offset * 0.85}rem` : "0")};
  }

  ${mediaQuery.xl} {
    left: ${(props) => (props.offset ? `${props.offset}rem` : "0")};
  }
`;

const MainText = styled.span`
  font-size: 5rem;
  font-weight: ${theme.typography.fontWeight.black};
  line-height: 1;
  -webkit-text-stroke: 3px white;
  text-stroke: 2px white;
  color: transparent;

  ${mediaQuery.md} {
    font-size: 6rem;
  }

  ${mediaQuery.lg} {
    font-size: 7rem;
  }

  ${mediaQuery.xl} {
    font-size: 8rem;
  }
`;

const AccentText = styled.span`
  font-size: 5rem;
  font-weight: ${theme.typography.fontWeight.black};
  line-height: 0.9;
  color: ${theme.colors.primary.gold};
  -webkit-text-stroke: 2px white;
  text-stroke: 2px white;

  ${mediaQuery.md} {
    font-size: 6rem;
  }

  ${mediaQuery.lg} {
    font-size: 7rem;
  }

  ${mediaQuery.xl} {
    font-size: 8rem;
  }
`;

const YearText = styled.span`
  font-size: 3.5rem;
  font-weight: ${theme.typography.fontWeight.black};
  margin-right: ${theme.spacing.sm};
  color: ${theme.colors.text.white};
  line-height: 1;

  ${mediaQuery.md} {
    font-size: 4rem;
  }

  ${mediaQuery.lg} {
    font-size: 5rem;
  }

  ${mediaQuery.xl} {
    font-size: 6rem;
  }
`;

const DateText = styled.div`
  font-size: ${theme.typography.fontSize["3xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  text-align: center;

  ${mediaQuery.md} {
    font-size: ${theme.typography.fontSize["4xl"]};
  }
`;

const HashtagText = styled.div`
  font-size: ${theme.typography.fontSize["5xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing["2xl"]};
  text-align: center;

  ${mediaQuery.md} {
    font-size: ${theme.typography.fontSize["5xl"]};
  }
`;

const CTAButton = styled(Button)`
  background: ${theme.colors.background.light};
  color: ${theme.colors.primary.red};
  padding: ${theme.spacing.md} ${theme.spacing["2xl"]};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  border-radius: ${theme.borderRadius.full};
  box-shadow: ${theme.shadows.lg};
  transition: all ${theme.animation.duration.normal}
    ${theme.animation.easing.easeOut};

  &:hover {
    background: ${theme.colors.background.lightGray};
    transform: scale(1.05);
    box-shadow: ${theme.shadows.xl};
  }
`;

// 타임라인 스타일
const TimelineSection = styled(Section)`
  background: ${theme.colors.background.gradientLight};
`;

const TimelineContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;

  ${mediaQuery.md} {
    max-width: 800px;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  background: ${theme.colors.gradients.pinkToBlue};

  ${mediaQuery.md} {
    width: 4px;
  }
`;

const TimelineItem = styled.div<{ align: "left" | "right" }>`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.xl};

  ${(props) =>
    props.align === "right" &&
    `
    flex-direction: row-reverse;
  `}

  ${mediaQuery.md} {
    margin-bottom: ${theme.spacing["2xl"]};
  }
`;

const TimelineContent = styled.div<{ align: "left" | "right" }>`
  flex: 1;
  ${(props) =>
    props.align === "left"
      ? `
    text-align: right;
    padding-right: ${theme.spacing.lg};
  `
      : `
    text-align: left;
    padding-left: ${theme.spacing.lg};
  `}

  ${mediaQuery.md} {
    ${(props) =>
      props.align === "left"
        ? `
      padding-right: ${theme.spacing.xl};
    `
        : `
      padding-left: ${theme.spacing.xl};
    `}
  }
`;

const TimelineDot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background: ${(props) => props.color};
  border-radius: ${theme.borderRadius.full};
  border: 3px solid ${theme.colors.background.light};
  box-shadow: ${theme.shadows.md};
  z-index: 10;

  ${mediaQuery.md} {
    width: 16px;
    height: 16px;
    border: 4px solid ${theme.colors.background.light};
    box-shadow: ${theme.shadows.lg};
  }
`;

const TimelineCard = styled(Card)<{ borderColor: string }>`
  display: inline-block;
  border-color: ${(props) => props.borderColor};
  border-width: 2px;
`;

// 탭 스타일
const TabContainer = styled.div`
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
`;

const TabList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: ${theme.spacing["2xl"]};
  gap: 0;
`;

const TabTrigger = styled.button<{ active: boolean; variant: "pink" | "blue" }>`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: none;
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.medium};
  transition: all ${theme.animation.duration.normal}
    ${theme.animation.easing.easeOut};
  background: ${theme.colors.background.light};
  color: ${theme.colors.text.secondary};

  ${(props) =>
    props.active &&
    props.variant === "pink" &&
    `
    background: ${theme.colors.primary.pink};
    color: ${theme.colors.text.white};
  `}

  ${(props) =>
    props.active &&
    props.variant === "blue" &&
    `
    background: ${theme.colors.primary.blue};
    color: ${theme.colors.text.white};
  `}
  
  &:hover {
    background: ${(props) =>
      props.variant === "pink"
        ? theme.colors.background.pinkLight
        : theme.colors.background.blueLight};
  }
`;

const TabContent = styled.div`
  margin-top: ${theme.spacing.md};
`;

// 공모 주제 관련 스타일 추가
const ThemeCard = styled(Card)`
  margin-bottom: ${theme.spacing["2xl"]};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.colors.gradients.pinkToBlue};
  }
`;

const ThemeNumber = styled.div<{ color: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: ${(props) => props.color};
  color: ${theme.colors.text.white};
  border-radius: ${theme.borderRadius.full};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.lg};
  margin-right: ${theme.spacing.md};
  flex-shrink: 0;
`;

const ThemeTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
`;

const TaskSongTable = styled.div`
  overflow-x: auto;
  margin: ${theme.spacing.md} 0;
  border-radius: ${theme.borderRadius.md};
  border: 1px solid ${theme.colors.border.light};
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${theme.colors.background.lightGray};
  padding: ${theme.spacing.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  border-bottom: 1px solid ${theme.colors.border.light};
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.border.light};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${theme.colors.background.lightGray};
  }
`;

const SongTitle = styled.div`
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.text.primary};
`;

const AnimeInfo = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
`;

const ExampleTag = styled.span`
  display: inline-block;
  background: ${theme.colors.primary.pink};
  color: ${theme.colors.text.white};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.xs};
  margin: ${theme.spacing.xs} ${theme.spacing.xs} 0 0;
`;

// 응모 규정 관련 스타일 추가
const RuleSection = styled(Section)`
  background: ${theme.colors.background.light};
`;

const RuleCard = styled(Card)`
  margin-bottom: ${theme.spacing.xl};
  border-left: 4px solid ${theme.colors.primary.pink};
  border-radius: ${theme.borderRadius.md};

  &:nth-of-type(even) {
    border-left-color: ${theme.colors.primary.blue};
  }
`;

const RuleTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.primary.pink};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.lg};
`;

const RuleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: ${theme.spacing.md};
    padding-left: ${theme.spacing.md};
    position: relative;

    &:before {
      content: "•";
      color: ${theme.colors.primary.pink};
      position: absolute;
      left: 0;
      font-weight: ${theme.typography.fontWeight.bold};
    }
  }
`;

const ImportantNote = styled.div`
  background: ${theme.colors.background.pinkLight};
  border: 1px solid ${theme.colors.primary.pink};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};

  strong {
    color: ${theme.colors.primary.pink};
  }
`;

const HashtagBox = styled.div`
  background: ${theme.colors.background.lightGray};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin: ${theme.spacing.md} 0;
  font-family: monospace;
  font-size: ${theme.typography.fontSize.sm};

  div {
    margin-bottom: ${theme.spacing.xs};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

// 응모 CTA 관련 스타일 추가
const SubmissionCTASection = styled(Section)`
  background: ${theme.colors.gradients.pinkToBlue};
  color: ${theme.colors.text.white};
  text-align: center;
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xl};
`;

const CTAText = styled.div`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing.md};

  ${mediaQuery.md} {
    font-size: ${theme.typography.fontSize.xl};
  }
`;

const CTAButtonLarge = styled(Button)`
  background: ${theme.colors.background.light};
  color: ${theme.colors.primary.pink};
  padding: ${theme.spacing.lg} ${theme.spacing["2xl"]};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  border-radius: ${theme.borderRadius.full};
  box-shadow: ${theme.shadows.xl};
  transition: all ${theme.animation.duration.normal}
    ${theme.animation.easing.easeOut};
  min-width: 280px;

  &:hover {
    background: ${theme.colors.background.lightGray};
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  ${mediaQuery.md} {
    font-size: ${theme.typography.fontSize["2xl"]};
    padding: ${theme.spacing.xl} ${theme.spacing["3xl"]};
    min-width: 320px;
  }
`;

const CTASubText = styled.div`
  font-size: ${theme.typography.fontSize.base};
  opacity: 0.9;

  ${mediaQuery.md} {
    font-size: ${theme.typography.fontSize.lg};
  }
`;

const CTAInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};

  ${mediaQuery.md} {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.xl};
  }
`;

const CTAInfoCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const CTAInfoIcon = styled.div`
  font-size: ${theme.typography.fontSize["2xl"]};
  margin-bottom: ${theme.spacing.md};
`;

const CTAInfoTitle = styled.div`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.sm};
`;

const CTAInfoText = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  opacity: 0.9;
`;

// 푸터 관련 스타일 추가
const FooterSection = styled.footer`
  background: ${theme.colors.background.dark};
  color: ${theme.colors.text.white};
  padding: ${theme.spacing["4xl"]} 0 ${theme.spacing.xl} 0;
  border-top: 1px solid ${theme.colors.border.dark};
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing["2xl"]};
  margin-bottom: ${theme.spacing["2xl"]};

  ${mediaQuery.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing["3xl"]};
  }

  ${mediaQuery.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const FooterTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.pink};
  margin-bottom: ${theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const FooterLink = styled.a`
  color: ${theme.colors.text.lightGray};
  text-decoration: none;
  transition: color ${theme.animation.duration.fast}
    ${theme.animation.easing.easeOut};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  &:hover {
    color: ${theme.colors.primary.pink};
  }
`;

const FooterText = styled.p`
  color: ${theme.colors.text.lightGray};
  font-size: ${theme.typography.fontSize.sm};
  line-height: 1.6;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${theme.colors.background.lightGray};
  border-radius: ${theme.borderRadius.full};
  color: ${theme.colors.text.dark};
  transition: all ${theme.animation.duration.fast}
    ${theme.animation.easing.easeOut};

  &:hover {
    background: ${theme.colors.primary.pink};
    color: ${theme.colors.text.white};
    transform: translateY(-2px);
  }
`;

const FooterDivider = styled.div`
  height: 1px;
  background: ${theme.colors.border.dark};
  margin: ${theme.spacing.xl} 0;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  text-align: center;

  ${mediaQuery.md} {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const FooterCopyright = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.lightGray};
`;

const FooterHashtags = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;

  ${mediaQuery.md} {
    justify-content: flex-end;
  }
`;

const FooterHashtag = styled.span`
  background: ${theme.colors.primary.pink};
  color: ${theme.colors.text.white};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
`;

const FooterLogoIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${theme.colors.gradients.pinkToBlue};
  border-radius: ${theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text.white};
`;

const FooterLogoText = styled.div`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.white};
`;

export default function AroAroFestival() {
  const { width, height } = useResponsive();
  const [activeTab, setActiveTab] = useState("event");

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #faf5ff 0%, #fce7f3 50%, #eff6ff 100%)",
      }}
    >
      {/* Hero Section */}
      <HeroSection>
        {/* Animated Background Elements */}
        <AnimatedBackground>
          <FloatingIcon top="80px" left="40px" animation="spin" opacity="0.1">
            <Disc3 size={64} />
          </FloatingIcon>
          <FloatingIcon
            top="160px"
            right="80px"
            animation="bounce"
            opacity="0.2"
          >
            <Sparkles size={48} />
          </FloatingIcon>
          <FloatingIcon
            bottom="128px"
            left="80px"
            animation="pulse"
            opacity="0.15"
          >
            <Headphones size={80} />
          </FloatingIcon>
          <FloatingIcon
            top="240px"
            right="160px"
            animation="spin"
            opacity="0.1"
          >
            <Disc3 size={96} />
          </FloatingIcon>
          <FloatingIcon
            bottom="80px"
            right="40px"
            animation="bounce"
            opacity="0.25"
          >
            <Star size={32} />
          </FloatingIcon>
        </AnimatedBackground>

        <Container style={{ padding: "0" }}>
          <HeroContent>
            <TopText>PRESENTED BY AROARO'S ANISONG CLUB</TopText>

            <TitleContainer>
              {/* 첫 번째 줄: 아로아로 (기본 위치) */}
              <TitleRow offset={0}>
                <MainText>
                  아로아<AccentText>로</AccentText>
                </MainText>
              </TitleRow>

              {/* 두 번째 줄: 2025 믹싱 (2글자만큼 들여쓰기) */}
              <TitleRow offset={-1}>
                <YearText>2025</YearText>
                <MainText>
                  믹<AccentText>싱</AccentText>
                </MainText>
              </TitleRow>

              {/* 세 번째 줄: 페스티벌 (6글자만큼 들여쓰기) */}
              {!!width && width < 530 && (
                <TitleRow
                  offset={-28}
                  style={{ position: "absolute", top: "10rem" }}
                >
                  <MainText>페스티벌</MainText>
                </TitleRow>
              )}
              <TitleRow offset={14}>
                <MainText>
                  페<AccentText>스</AccentText>티벌
                </MainText>
              </TitleRow>
            </TitleContainer>

            <DateText>7/8 ~ 8/24</DateText>
            <HashtagText>#로싱스 #로싱스2025</HashtagText>

            <CTAButton onClick={() => scrollToSection("rules")}>
              <Music size={20} />
              공모 접수하기
            </CTAButton>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* About Section */}
      <Section>
        <Container>
          <Flex direction="column" align="center" gap={theme.spacing["4xl"]}>
            <Heading2 align="center">
              <Users
                size={32}
                style={{
                  display: "inline",
                  marginRight: theme.spacing.md,
                  color: theme.colors.primary.pink,
                }}
              />
              로싱스가 뭔가요?
            </Heading2>

            <div style={{ maxWidth: "600px", textAlign: "center" }}>
              <Text
                style={{
                  fontSize: theme.typography.fontSize.lg,
                  lineHeight: "1.8",
                  marginBottom: theme.spacing.lg,
                  color: theme.colors.text.primary,
                }}
              >
                <strong>2025 아로아로 믹싱 페스티벌, 줄여서 #로싱스</strong>는
                <br />
                애니송을 중심으로 한 믹스를 공유하는 오픈 믹싱 페스티벌입니다.
              </Text>
              <Text
                style={{
                  fontSize: theme.typography.fontSize.base,
                  lineHeight: "1.7",
                  marginBottom: theme.spacing.lg,
                }}
              >
                믹싱 실력이나 경력에 관계없이, 3가지 공모 주제 중 하나를 선택해
                <br />
                나만의 개성과 취향이 담긴 35분 이상의 믹스를 자유롭게 제출할 수
                있습니다.
              </Text>
              <Text
                style={{
                  fontSize: theme.typography.fontSize.base,
                  lineHeight: "1.7",
                  marginBottom: theme.spacing.lg,
                }}
              >
                형식과 스타일에 제한은 없으며, 각자 좋아하는 방식으로 애니송을
                플레이해 <br />
                나만의 애니송 믹싱을 많은 사람들과 공유해보세요.
              </Text>
              <Text
                style={{
                  fontSize: theme.typography.fontSize.base,
                  lineHeight: "1.7",
                  color: theme.colors.text.primary,
                }}
              >
                초보든 베테랑이든 상관없습니다, 각자의 스타일대로 즐겁게
                참여해주세요!
              </Text>
            </div>

            <Grid
              columns={3}
              gap={theme.spacing.xl}
              style={{ marginTop: theme.spacing["2xl"] }}
            >
              <Card borderColor={theme.colors.primary.pink} hoverEffect>
                <div style={{ textAlign: "center" }}>
                  <Headphones
                    size={48}
                    style={{
                      color: theme.colors.primary.pink,
                      marginBottom: theme.spacing.md,
                    }}
                  />
                  <Heading3 color={theme.colors.primary.pink}>
                    오픈 믹싱 페스티벌
                  </Heading3>
                  <Text
                    color={theme.colors.text.secondary}
                    style={{ marginTop: theme.spacing.sm }}
                  >
                    믹싱 실력이나 경력에 관계없이 누구나 참여할 수 있는 열린
                    무대입니다.
                  </Text>
                </div>
              </Card>

              <Card borderColor={theme.colors.primary.blue} hoverEffect>
                <div style={{ textAlign: "center" }}>
                  <Sparkles
                    size={48}
                    style={{
                      color: theme.colors.primary.blue,
                      marginBottom: theme.spacing.md,
                    }}
                  />
                  <Heading3 color={theme.colors.primary.blue}>
                    개성과 취향 표현
                  </Heading3>
                  <Text
                    color={theme.colors.text.secondary}
                    style={{ marginTop: theme.spacing.sm }}
                  >
                    3가지 공모 주제 중 하나를 선택해 35분 이상의 나만의 개성과
                    취향이 담긴 믹스를 제출하세요.
                  </Text>
                </div>
              </Card>

              <Card borderColor={theme.colors.primary.pink} hoverEffect>
                <div style={{ textAlign: "center" }}>
                  <Heart
                    size={48}
                    style={{
                      color: theme.colors.primary.pink,
                      marginBottom: theme.spacing.md,
                    }}
                  />
                  <Heading3 color={theme.colors.primary.pink}>
                    애니송 믹싱 공유하기
                  </Heading3>
                  <Text
                    color={theme.colors.text.secondary}
                    style={{ marginTop: theme.spacing.sm }}
                  >
                    형식과 스타일에 제한 없이 나만의 애니송 믹싱을 많은 사람들과
                    나눠보세요.
                  </Text>
                </div>
              </Card>
            </Grid>
          </Flex>
        </Container>
      </Section>

      {/* Schedule Timeline */}
      <TimelineSection>
        <Container>
          <Flex direction="column" align="center" gap={theme.spacing["2xl"]}>
            <Heading2 align="center">
              <Calendar
                size={32}
                style={{
                  display: "inline",
                  marginRight: theme.spacing.md,
                  color: theme.colors.primary.blue,
                }}
              />
              공모 일정
            </Heading2>
            <Grid columns={3} gap={theme.spacing["2xl"]}>
              <Card borderColor={theme.colors.primary.pink} hoverEffect>
                <Heading3 color={theme.colors.primary.pink}>
                  <Zap
                    size={24}
                    style={{ display: "inline", marginRight: theme.spacing.sm }}
                  />
                  공모 접수
                </Heading3>
                <Text
                  style={{ marginTop: theme.spacing.md }}
                  color={theme.colors.text.secondary}
                >
                  7월 8일(화) ~ 8월 24일(일) 까지 접수
                </Text>
              </Card>

              <Card borderColor={theme.colors.primary.blue} hoverEffect>
                <Heading3 color={theme.colors.primary.blue}>
                  <Heart
                    size={24}
                    style={{ display: "inline", marginRight: theme.spacing.sm }}
                  />
                  심사 기간
                </Heading3>
                <Text
                  style={{ marginTop: theme.spacing.md }}
                  color={theme.colors.text.secondary}
                >
                  8월 25일(월) ~ 9월 5일(금) 까지 심사
                </Text>
              </Card>

              <Card borderColor={theme.colors.primary.pink} hoverEffect>
                <Heading3 color={theme.colors.primary.pink}>
                  <Sparkles
                    size={24}
                    style={{ display: "inline", marginRight: theme.spacing.sm }}
                  />
                  결과 발표
                </Heading3>
                <Text
                  style={{ marginTop: theme.spacing.md }}
                  color={theme.colors.text.secondary}
                >
                  9월 6일(토) 온라인 발표
                </Text>
              </Card>
            </Grid>
          </Flex>
        </Container>
      </TimelineSection>

      {/* Contest Themes */}
      <Section>
        <Container style={{ boxSizing: "border-box" }}>
          <Heading2 style={{ textAlign: "center" }}>
            <Music
              size={32}
              style={{
                display: "inline",
                marginRight: theme.spacing.md,
                color: theme.colors.primary.pink,
              }}
            />
            공모 주제
          </Heading2>
          <Flex direction="column" align="center" gap={theme.spacing["4xl"]}>
            <div style={{ textAlign: "center" }}>
              <Text
                color={theme.colors.text.secondary}
                style={{ marginTop: theme.spacing.md }}
              >
                하단 세 가지 주제 중 반드시 하나만 선택하여 제출해주세요.
              </Text>
              <Text
                color={theme.colors.text.secondary}
                style={{ marginTop: theme.spacing.sm }}
              >
                복수 선택은 불가하며, 여러 믹스를 제출하고 싶은 경우에는 각
                믹스를 개별 주제에 맞춰 별도로 제출하셔야 합니다.
              </Text>
            </div>

            <div style={{ width: "100%" }}>
              {/* 유니존 */}
              <ThemeCard>
                <ThemeTitle>
                  <ThemeNumber color={theme.colors.primary.pink}>1</ThemeNumber>
                  <Heading3 color={theme.colors.primary.pink}>유니존</Heading3>
                </ThemeTitle>
                <div style={{ marginLeft: "48px" }}>
                  <Text style={{ marginBottom: theme.spacing.md }}>
                    • <strong>전체 믹스를 애니송으로만 구성해주세요.</strong>
                  </Text>
                  <Text
                    color={theme.colors.text.secondary}
                    style={{
                      marginBottom: theme.spacing.md,
                      paddingLeft: theme.spacing.md,
                    }}
                  >
                    TV, OVA, 극장판 애니메이션으로 송출된 적이 없는 일반 곡이나
                    게임 음악 등은 포함할 수 없습니다.
                  </Text>
                  <Text style={{ marginBottom: theme.spacing.md }}>
                    •{" "}
                    <strong>최근 1년 이내(2024년 7월 ~ 2025년 7월 사이)</strong>{" "}
                    방영된 애니메이션 중 가장 재밌게 본 애니메이션을 공모폼에
                    작성해주세요.
                  </Text>
                </div>
              </ThemeCard>
              {/* 오타쿠 붐박스 */}
              <ThemeCard>
                <ThemeTitle>
                  <ThemeNumber color={theme.colors.primary.blue}>2</ThemeNumber>
                  <Heading3 color={theme.colors.primary.blue}>
                    오타쿠 붐박스
                  </Heading3>
                </ThemeTitle>
                <div style={{ marginLeft: "48px" }}>
                  <Text style={{ marginBottom: theme.spacing.md }}>
                    • 믹스에는 참가자가 직접 정한{" "}
                    <strong>서브컬처 기반 테마 2가지</strong>를 설정해 주셔야
                    합니다.
                  </Text>
                  <Text
                    style={{
                      marginBottom: theme.spacing.md,
                      paddingLeft: theme.spacing.md,
                    }}
                  >
                    예시 :{" "}
                    <span>
                      <ExampleTag>여름, 아이돌</ExampleTag>
                      <ExampleTag>청춘, 학교</ExampleTag>
                      <ExampleTag>리듬게임, 스포츠</ExampleTag>
                    </span>
                  </Text>

                  <Text>
                    • 테마의 조합은 자유이며, 신선하고 개성 있는 발상이
                    환영됩니다!
                  </Text>
                </div>
              </ThemeCard>

              {/* 애니송 슬라이드 */}
              <ThemeCard>
                <ThemeTitle>
                  <ThemeNumber color={theme.colors.primary.pink}>3</ThemeNumber>
                  <Heading3 color={theme.colors.primary.pink}>
                    애니송 슬라이드
                  </Heading3>
                </ThemeTitle>
                <div style={{ marginLeft: "48px" }}>
                  <Text style={{ marginBottom: theme.spacing.md }}>
                    • 아래 표에 제시된 과제곡{" "}
                    <strong>총 11곡 중 반드시 2곡 이상을 포함하여 믹스</strong>
                    를 제작해주세요.
                  </Text>
                  <Text
                    color={theme.colors.primary.blue}
                    style={{
                      marginBottom: theme.spacing.md,
                      fontWeight: theme.typography.fontWeight.semibold,
                    }}
                  >
                    과제곡 리스트
                  </Text>
                  <TaskSongTable>
                    <TableHeader>
                      <div>🎵 곡명</div>
                      <div>📺 애니메이션 / 곡 정보</div>
                    </TableHeader>
                    <TableRow>
                      <SongTitle>adrenaline!!!</SongTitle>
                      <AnimeInfo>TVA 『에로망가 선생』 ED</AnimeInfo>
                    </TableRow>
                    <TableRow>
                      <SongTitle>味噌汁とバター</SongTitle>
                      <AnimeInfo>
                        TVA 『흘러가는 나날, 밥은 맛있어』 ED
                      </AnimeInfo>
                    </TableRow>
                    <TableRow>
                      <SongTitle>やれんの？エンドレス</SongTitle>
                      <AnimeInfo>TVA 『닌자와 암살자의 동거』 OP</AnimeInfo>
                    </TableRow>
                    <TableRow>
                      <SongTitle>火星人</SongTitle>
                      <AnimeInfo>TVA 『소시민 시리즈 2기』 OP</AnimeInfo>
                    </TableRow>
                    <TableRow>
                      <SongTitle>つよがるガール</SongTitle>
                      <AnimeInfo>TVA 『패배 히로인이 너무 많아!』 OP</AnimeInfo>
                    </TableRow>
                    <TableRow>
                      <SongTitle>アイドル</SongTitle>
                      <AnimeInfo>TVA 『【최애의 아이】』 OP</AnimeInfo>
                    </TableRow>
                    <TableRow>
                      <SongTitle>65535</SongTitle>
                      <AnimeInfo>
                        TVA 『16bit 센세이션 ANOTHER LAYER』 OP
                      </AnimeInfo>
                    </TableRow>
                    <TableRow>
                      <SongTitle>Flashback</SongTitle>
                      <AnimeInfo>TVA 『째깍째깍』 OP</AnimeInfo>
                    </TableRow>
                    <TableRow>
                      <SongTitle>葛藤Tomorrow</SongTitle>
                      <AnimeInfo>
                        TVA 『비탄의 망령은 은퇴하고 싶다』 OP
                      </AnimeInfo>
                    </TableRow>
                    <TableRow>
                      <SongTitle>君色のキセキ</SongTitle>
                      <AnimeInfo>
                        TVA 『원룸, 햇볕 보통, 천사 딸림.』 OP
                      </AnimeInfo>
                    </TableRow>
                    <TableRow>
                      <SongTitle>
                        二千年… 若しくは… 二万年後の君へ・・・
                      </SongTitle>
                      <AnimeInfo>
                        TVA 『진격의 거인 The Final Season 완결편 후편』
                      </AnimeInfo>
                    </TableRow>
                  </TaskSongTable>
                </div>
              </ThemeCard>
            </div>
          </Flex>
        </Container>
      </Section>

      {/* Awards Section */}
      <Section background={theme.colors.background.gradientLight}>
        <Container style={{ boxSizing: "border-box" }}>
          <Flex direction="column" align="center" gap={theme.spacing["4xl"]}>
            <Heading2 align="center">
              <Trophy
                size={32}
                style={{
                  display: "inline",
                  marginRight: theme.spacing.md,
                  color: theme.colors.primary.pink,
                }}
              />
              시상 안내
            </Heading2>

            <div style={{ width: "100%" }}>
              {/* 이벤트상 */}
              <Card
                style={{
                  marginBottom: theme.spacing["2xl"],
                  borderLeft: `4px solid ${theme.colors.primary.gold}`,
                }}
              >
                <Heading3
                  style={{
                    color: theme.colors.primary.gold,
                    marginBottom: theme.spacing.lg,
                  }}
                >
                  🎖 이벤트상
                </Heading3>

                <div style={{ marginBottom: theme.spacing.xl }}>
                  <Text
                    style={{
                      fontWeight: theme.typography.fontWeight.bold,
                      marginBottom: theme.spacing.md,
                      color: theme.colors.primary.pink,
                    }}
                  >
                    아로아로상
                  </Text>
                  <Text
                    style={{
                      marginBottom: theme.spacing.sm,
                      paddingLeft: theme.spacing.md,
                    }}
                  >
                    전체 최종 수상 1명 (심사위원별 1~3위 선정, 가중치 반영)
                  </Text>
                  <div
                    style={{
                      backgroundColor: theme.colors.background.pinkLight,
                      padding: theme.spacing.md,
                      borderRadius: theme.borderRadius.md,
                      marginLeft: theme.spacing.md,
                    }}
                  >
                    <Text
                      style={{ fontWeight: theme.typography.fontWeight.medium }}
                    >
                      🎁 아로아로 행사 선택 출연권 + 기념 티셔츠
                    </Text>
                  </div>
                </div>

                <div>
                  <Text
                    style={{
                      fontWeight: theme.typography.fontWeight.bold,
                      marginBottom: theme.spacing.md,
                      color: theme.colors.primary.blue,
                    }}
                  >
                    부문상 (각 행사별 1명 선정)
                  </Text>
                  <Text
                    style={{
                      marginBottom: theme.spacing.sm,
                      paddingLeft: theme.spacing.md,
                    }}
                  >
                    유니존상 / 슬라이드상 / 붐박스상
                  </Text>
                  <div
                    style={{
                      backgroundColor: theme.colors.background.blueLight,
                      padding: theme.spacing.md,
                      borderRadius: theme.borderRadius.md,
                      marginLeft: theme.spacing.md,
                    }}
                  >
                    <Text
                      style={{ fontWeight: theme.typography.fontWeight.medium }}
                    >
                      🎁 해당 행사 출연권 + 기념 티셔츠
                    </Text>
                  </div>
                </div>
              </Card>

              {/* 특별상 */}
              <Card
                style={{
                  marginBottom: theme.spacing["2xl"],
                  borderLeft: `4px solid ${theme.colors.primary.pink}`,
                }}
              >
                <Heading3
                  style={{
                    color: theme.colors.primary.pink,
                    marginBottom: theme.spacing.lg,
                  }}
                >
                  🌟 특별상
                </Heading3>

                <div style={{ marginBottom: theme.spacing.lg }}>
                  <Text style={{ marginBottom: theme.spacing.md }}>
                    심사위원 7인이 선정하고 수상하는 7가지의 상
                  </Text>
                  <div
                    style={{
                      backgroundColor: theme.colors.background.pinkLight,
                      padding: theme.spacing.md,
                      borderRadius: theme.borderRadius.md,
                      marginLeft: theme.spacing.md,
                    }}
                  >
                    <Text
                      style={{ fontWeight: theme.typography.fontWeight.medium }}
                    >
                      🎁 드링크 티켓 + 심사위원별 선정 상품
                    </Text>
                  </div>
                </div>

                {/* 첫 번째 그리드 */}
                <Grid
                  columns={3}
                  gap={theme.spacing.lg}
                  style={{ marginBottom: theme.spacing.xl }}
                >
                  <Card borderColor={theme.colors.primary.pink} hoverEffect>
                    <div style={{ textAlign: "center" }}>
                      <Badge
                        style={{
                          background: theme.colors.primary.pink,
                          color: theme.colors.text.white,
                          marginBottom: theme.spacing.md,
                        }}
                      >
                        포토네
                      </Badge>
                      <Heading3
                        style={{
                          marginBottom: theme.spacing.sm,
                          fontSize: theme.typography.fontSize.base,
                        }}
                      >
                        전파상
                      </Heading3>
                      <Text
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          marginBottom: theme.spacing.md,
                          lineHeight: "1.5",
                        }}
                      >
                        전파계 애니송들을 어디로 넘겨도 사운드가 비는곳이 없이
                        파격적으로 써주시는 분에게 이 상을 수여함
                      </Text>
                      <div
                        style={{
                          backgroundColor: theme.colors.background.pinkLight,
                          padding: theme.spacing.sm,
                          borderRadius: theme.borderRadius.sm,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: theme.typography.fontSize.xs,
                            fontWeight: theme.typography.fontWeight.medium,
                          }}
                        >
                          🎁 주문제작 전자파 차단 스티커
                        </Text>
                      </div>
                    </div>
                  </Card>

                  <Card borderColor={theme.colors.primary.pink} hoverEffect>
                    <div style={{ textAlign: "center" }}>
                      <Badge
                        style={{
                          background: theme.colors.primary.pink,
                          color: theme.colors.text.white,
                          marginBottom: theme.spacing.md,
                        }}
                      >
                        냐
                      </Badge>
                      <Heading3
                        style={{
                          marginBottom: theme.spacing.sm,
                          fontSize: theme.typography.fontSize.base,
                        }}
                      >
                        마리아의아잉, 귀여운💕상
                      </Heading3>
                      <Text
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          marginBottom: theme.spacing.md,
                          lineHeight: "1.5",
                        }}
                      >
                        여아애니 혹은 귀여운 노래를 귀엽고 신나게 써주신 분께
                        드립니다.
                      </Text>
                      <div
                        style={{
                          backgroundColor: theme.colors.background.pinkLight,
                          padding: theme.spacing.sm,
                          borderRadius: theme.borderRadius.sm,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: theme.typography.fontSize.xs,
                            fontWeight: theme.typography.fontWeight.medium,
                          }}
                        >
                          🎁 마리아의 귀여워 스티커(외 조금 더)
                        </Text>
                      </div>
                    </div>
                  </Card>

                  <Card borderColor={theme.colors.primary.pink} hoverEffect>
                    <div style={{ textAlign: "center" }}>
                      <Badge
                        style={{
                          background: theme.colors.primary.pink,
                          color: theme.colors.text.white,
                          marginBottom: theme.spacing.md,
                        }}
                      >
                        암딜
                      </Badge>
                      <Heading3
                        style={{
                          marginBottom: theme.spacing.sm,
                          fontSize: theme.typography.fontSize.base,
                        }}
                      >
                        신토불이상
                      </Heading3>
                      <Text
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          marginBottom: theme.spacing.md,
                          lineHeight: "1.5",
                        }}
                      >
                        음원발매일이 10년 이상 지난 곡들을 다수 사용하여 과거의
                        추억을 가장 잘 표현한 참가자에게 수여함
                      </Text>
                      <div
                        style={{
                          backgroundColor: theme.colors.background.pinkLight,
                          padding: theme.spacing.sm,
                          borderRadius: theme.borderRadius.sm,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: theme.typography.fontSize.xs,
                            fontWeight: theme.typography.fontWeight.medium,
                          }}
                        >
                          🎁 관절건강 관련 영양제
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Grid>

                {/* 두 번째 그리드 */}
                <Grid
                  columns={3}
                  gap={theme.spacing.lg}
                  style={{ marginBottom: theme.spacing.xl }}
                >
                  <Card borderColor={theme.colors.primary.blue} hoverEffect>
                    <div style={{ textAlign: "center" }}>
                      <Badge
                        style={{
                          background: theme.colors.primary.blue,
                          color: theme.colors.text.white,
                          marginBottom: theme.spacing.md,
                        }}
                      >
                        냥여러
                      </Badge>
                      <Heading3
                        style={{
                          marginBottom: theme.spacing.sm,
                          fontSize: theme.typography.fontSize.base,
                        }}
                      >
                        비상
                      </Heading3>
                      <Text
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          marginBottom: theme.spacing.md,
                          lineHeight: "1.5",
                        }}
                      >
                        고 BPM의 캇코이한 노래들을 맛있게 사용하는 믹스를 선보인
                        분에게 수상 (남성밴드 많을시 가산점)
                      </Text>
                      <div
                        style={{
                          backgroundColor: theme.colors.background.blueLight,
                          padding: theme.spacing.sm,
                          borderRadius: theme.borderRadius.sm,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: theme.typography.fontSize.xs,
                            fontWeight: theme.typography.fontWeight.medium,
                          }}
                        >
                          🎁 냥여러와 라멘데이트권
                        </Text>
                      </div>
                    </div>
                  </Card>

                  <Card borderColor={theme.colors.primary.blue} hoverEffect>
                    <div style={{ textAlign: "center" }}>
                      <Badge
                        style={{
                          background: theme.colors.primary.blue,
                          color: theme.colors.text.white,
                          marginBottom: theme.spacing.md,
                        }}
                      >
                        몽크
                      </Badge>
                      <Heading3
                        style={{
                          marginBottom: theme.spacing.sm,
                          fontSize: theme.typography.fontSize.base,
                        }}
                      >
                        카피바라상
                      </Heading3>
                      <Text
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          marginBottom: theme.spacing.md,
                          lineHeight: "1.5",
                        }}
                      >
                        시원한 밤산책하면서 듣기좋은 믹스셋을 선보인 분에게 수상
                      </Text>
                      <div
                        style={{
                          backgroundColor: theme.colors.background.blueLight,
                          padding: theme.spacing.sm,
                          borderRadius: theme.borderRadius.sm,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: theme.typography.fontSize.xs,
                            fontWeight: theme.typography.fontWeight.medium,
                          }}
                        >
                          🎁 카피바라 슬리퍼
                        </Text>
                      </div>
                    </div>
                  </Card>

                  <Card borderColor={theme.colors.primary.blue} hoverEffect>
                    <div style={{ textAlign: "center" }}>
                      <Badge
                        style={{
                          background: theme.colors.primary.blue,
                          color: theme.colors.text.white,
                          marginBottom: theme.spacing.md,
                        }}
                      >
                        우라
                      </Badge>
                      <Heading3
                        style={{
                          marginBottom: theme.spacing.sm,
                          fontSize: theme.typography.fontSize.base,
                        }}
                      >
                        대상
                      </Heading3>
                      <Text
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          marginBottom: theme.spacing.md,
                          lineHeight: "1.5",
                        }}
                      >
                        들으면 엉덩이가 절로 움직이는 믹스셋을 만든 분에게
                        드리고 싶습니다
                      </Text>
                      <div
                        style={{
                          backgroundColor: theme.colors.background.blueLight,
                          padding: theme.spacing.sm,
                          borderRadius: theme.borderRadius.sm,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: theme.typography.fontSize.xs,
                            fontWeight: theme.typography.fontWeight.medium,
                          }}
                        >
                          🎁 아로아로 프리드링크 쿠폰 10개 + 랜덤 굿즈
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Grid>

                {/* 세 번째 그리드 */}
                <Grid columns={3} gap={theme.spacing.lg}>
                  <Card borderColor={theme.colors.primary.gold} hoverEffect>
                    <div style={{ textAlign: "center" }}>
                      <Badge
                        style={{
                          background: theme.colors.primary.gold,
                          color: theme.colors.text.white,
                          marginBottom: theme.spacing.md,
                        }}
                      >
                        김샤메
                      </Badge>
                      <Heading3
                        style={{
                          marginBottom: theme.spacing.sm,
                          fontSize: theme.typography.fontSize.base,
                        }}
                      >
                        세라믹상
                      </Heading3>
                      <Text
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          marginBottom: theme.spacing.md,
                          lineHeight: "1.5",
                        }}
                      >
                        세련된 노래로 세련된 비트를 써서 세련된
                        편곡을쓰거나안쓰거나 세련된 흐름으로 세련된 믹싱을
                        완성해주시는 분
                      </Text>
                      <div
                        style={{
                          backgroundColor: theme.colors.background.lightGray,
                          padding: theme.spacing.sm,
                          borderRadius: theme.borderRadius.sm,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: theme.typography.fontSize.xs,
                            fontWeight: theme.typography.fontWeight.medium,
                          }}
                        >
                          🎁 김샤메가 공모를 열때마다 상품으로 걸어온 USB
                          이번에도 지급
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <div></div>
                  <div></div>
                </Grid>
              </Card>

              {/* 레귤러상 */}
              <Card
                style={{
                  marginBottom: theme.spacing["2xl"],
                  borderLeft: `4px solid ${theme.colors.primary.blue}`,
                }}
              >
                <Heading3
                  style={{
                    color: theme.colors.primary.blue,
                    marginBottom: theme.spacing.lg,
                  }}
                >
                  💰 레귤러상
                </Heading3>

                <div style={{ marginBottom: theme.spacing.lg }}>
                  <Text style={{ marginBottom: theme.spacing.sm }}>
                    공모 심사에는 참여하지 않는 아로아로 레귤러들이 직접
                    수상합니다.
                  </Text>
                  <div
                    style={{
                      backgroundColor: theme.colors.background.blueLight,
                      padding: theme.spacing.md,
                      borderRadius: theme.borderRadius.md,
                    }}
                  >
                    <Text
                      style={{ fontWeight: theme.typography.fontWeight.medium }}
                    >
                      🎁 레귤러 선정 상품
                    </Text>
                  </div>
                </div>

                {/* 첫 번째 레귤러상 그리드 */}
                <Grid
                  columns={3}
                  gap={theme.spacing.lg}
                  style={{ marginBottom: theme.spacing.xl }}
                >
                  <Card borderColor={theme.colors.primary.blue} hoverEffect>
                    <div style={{ textAlign: "center" }}>
                      <Badge
                        style={{
                          background: theme.colors.primary.blue,
                          color: theme.colors.text.white,
                          marginBottom: theme.spacing.md,
                        }}
                      >
                        무니
                      </Badge>
                      <Heading3
                        style={{
                          marginBottom: theme.spacing.sm,
                          fontSize: theme.typography.fontSize.base,
                        }}
                      >
                        일상물 난민 상
                      </Heading3>
                      <Text
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          marginBottom: theme.spacing.md,
                          lineHeight: "1.5",
                        }}
                      >
                        일상물 계열 작품의 음악을 1곡이상 앞 뒷곡과 잘 어우러져
                        사용하면 무니가 판단하여 선정
                      </Text>
                      <div
                        style={{
                          backgroundColor: theme.colors.background.blueLight,
                          padding: theme.spacing.sm,
                          borderRadius: theme.borderRadius.sm,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: theme.typography.fontSize.xs,
                            fontWeight: theme.typography.fontWeight.medium,
                          }}
                        >
                          🎁 1만원 상당 스타벅스 기프티콘 및 굿즈
                        </Text>
                      </div>
                    </div>
                  </Card>

                  <Card borderColor={theme.colors.primary.blue} hoverEffect>
                    <div style={{ textAlign: "center" }}>
                      <Badge
                        style={{
                          background: theme.colors.primary.blue,
                          color: theme.colors.text.white,
                          marginBottom: theme.spacing.md,
                        }}
                      >
                        준
                      </Badge>
                      <Heading3
                        style={{
                          marginBottom: theme.spacing.sm,
                          fontSize: theme.typography.fontSize.base,
                        }}
                      >
                        Jun 賞 상
                      </Heading3>
                      <Text
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          marginBottom: theme.spacing.md,
                          lineHeight: "1.5",
                        }}
                      >
                        계절과 어울리는 두근거림 만든 믹싱에게 주는 상
                      </Text>
                      <div
                        style={{
                          backgroundColor: theme.colors.background.blueLight,
                          padding: theme.spacing.sm,
                          borderRadius: theme.borderRadius.sm,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: theme.typography.fontSize.xs,
                            fontWeight: theme.typography.fontWeight.medium,
                          }}
                        >
                          🎁 싸이버거 세트
                        </Text>
                      </div>
                    </div>
                  </Card>

                  <Card borderColor={theme.colors.primary.blue} hoverEffect>
                    <div style={{ textAlign: "center" }}>
                      <Badge
                        style={{
                          background: theme.colors.primary.blue,
                          color: theme.colors.text.white,
                          marginBottom: theme.spacing.md,
                        }}
                      >
                        적발추
                      </Badge>
                      <Heading3
                        style={{
                          marginBottom: theme.spacing.sm,
                          fontSize: theme.typography.fontSize.base,
                        }}
                      >
                        오늘은 내가 든든한 애니송 국밥 요리사! 상
                      </Heading3>
                      <Text
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          marginBottom: theme.spacing.md,
                          lineHeight: "1.5",
                        }}
                      >
                        위 DJ는 많은 컨텐츠곡들로 위화감없이 세트리를 준비하여
                        많은 이들에게 여러 컨텐츠를 맛있게 먹여주었음을 인정하여
                        이상을 수여함
                      </Text>
                      <div
                        style={{
                          backgroundColor: theme.colors.background.blueLight,
                          padding: theme.spacing.sm,
                          borderRadius: theme.borderRadius.sm,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: theme.typography.fontSize.xs,
                            fontWeight: theme.typography.fontWeight.medium,
                          }}
                        >
                          🎁 돼지국밥 한 그릇
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Grid>

                {/* 두 번째 레귤러상 그리드 */}
                <Grid columns={3} gap={theme.spacing.lg}>
                  <Card borderColor={theme.colors.primary.pink} hoverEffect>
                    <div style={{ textAlign: "center" }}>
                      <Badge
                        style={{
                          background: theme.colors.primary.pink,
                          color: theme.colors.text.white,
                          marginBottom: theme.spacing.md,
                        }}
                      >
                        서마루
                      </Badge>
                      <Heading3
                        style={{
                          marginBottom: theme.spacing.sm,
                          fontSize: theme.typography.fontSize.base,
                        }}
                      >
                        호우주의보 상
                      </Heading3>
                      <Text
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          marginBottom: theme.spacing.md,
                          lineHeight: "1.5",
                        }}
                      >
                        BPM이 내려가는 믹스 (처음에는 강력하게 시작하지만 점점
                        BPM이 느려지며 차분하게 마무리 되는 세트리스트를
                        듣고싶습니다)
                      </Text>
                      <div
                        style={{
                          backgroundColor: theme.colors.background.pinkLight,
                          padding: theme.spacing.sm,
                          borderRadius: theme.borderRadius.sm,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: theme.typography.fontSize.xs,
                            fontWeight: theme.typography.fontWeight.medium,
                          }}
                        >
                          🎁 ROJI 프리미엄 UV 자외선차단 원터치 3단 암막
                          자동우산 양산
                        </Text>
                      </div>
                    </div>
                  </Card>

                  <Card borderColor={theme.colors.primary.pink} hoverEffect>
                    <div style={{ textAlign: "center" }}>
                      <Badge
                        style={{
                          background: theme.colors.primary.pink,
                          color: theme.colors.text.white,
                          marginBottom: theme.spacing.md,
                        }}
                      >
                        나메
                      </Badge>
                      <Heading3
                        style={{
                          marginBottom: theme.spacing.sm,
                          fontSize: theme.typography.fontSize.base,
                        }}
                      >
                        상상 그 이상
                      </Heading3>
                      <Text
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          marginBottom: theme.spacing.md,
                          lineHeight: "1.5",
                        }}
                      >
                        이사람 이런거 틀꺼같다 싶은것에서 좋은 방향으로 다른모습
                        보여주는 사람에게 주는 상
                      </Text>
                      <div
                        style={{
                          backgroundColor: theme.colors.background.pinkLight,
                          padding: theme.spacing.sm,
                          borderRadius: theme.borderRadius.sm,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: theme.typography.fontSize.xs,
                            fontWeight: theme.typography.fontWeight.medium,
                          }}
                        >
                          🎁 트라페지움 소설책
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <div></div>
                </Grid>
              </Card>

              {/* 히든상 */}
              <Card
                style={{
                  marginBottom: theme.spacing["2xl"],
                  borderLeft: `4px solid ${theme.colors.primary.gold}`,
                  background: `linear-gradient(135deg, ${theme.colors.background.light} 0%, ${theme.colors.background.lightGray} 100%)`,
                }}
              >
                <Heading3
                  style={{
                    color: theme.colors.primary.gold,
                  }}
                >
                  🥷 히든상
                </Heading3>

                <div style={{ textAlign: "center", padding: theme.spacing.xl }}>
                  <Text
                    style={{
                      fontSize: theme.typography.fontSize.lg,
                      fontWeight: theme.typography.fontWeight.medium,
                      fontStyle: "italic",
                    }}
                  >
                    심사가 끝나기 전까지 아무도 모르는 히든상이 있습니다!
                  </Text>
                  <div style={{ marginTop: theme.spacing.md, opacity: 0.7 }}>
                    <Text style={{ fontSize: theme.typography.fontSize.sm }}>
                      어떤 상이 기다리고 있을까요? 🎭
                    </Text>
                  </div>
                </div>
              </Card>
            </div>
          </Flex>
        </Container>
      </Section>

      {/* Contest Rules */}
      <RuleSection id="rules">
        <Container style={{ boxSizing: "border-box" }}>
          <Flex direction="column" align="center" gap={theme.spacing["4xl"]}>
            <Heading2 align="center">
              <ExternalLink
                size={32}
                style={{
                  display: "inline",
                  marginRight: theme.spacing.md,
                  color: theme.colors.primary.pink,
                }}
              />
              응모 규정
            </Heading2>

            <div style={{ width: "100%" }}>
              {/* 응모 방법 */}
              <RuleCard>
                <RuleTitle>
                  <Volume2
                    size={20}
                    style={{ marginRight: theme.spacing.sm }}
                  />
                  응모 방법/조건
                </RuleTitle>
                <RuleList>
                  <li>
                    <strong>35분 이상의 믹싱을</strong> Mixcloud에 업로드 후
                    X(트위터)에 링크를 공유해주세요.
                  </li>
                  <li>
                    <strong>공모폼에서</strong> 관련 정보 입력 및 주제를
                    선택하여 제출해주세요.
                  </li>
                  <li>
                    초심자도 적극 환영! 실력보다는{" "}
                    <strong>즐거운 참여와 공유를</strong> 지향합니다.
                  </li>
                  <li>
                    수상의 결과에 따라 각 행사의 게스트 참여에 지장이 없으셔야
                    합니다.
                  </li>
                </RuleList>

                <div style={{ marginTop: theme.spacing.md }}>
                  <Text
                    color={theme.colors.primary.blue}
                    style={{ fontWeight: theme.typography.fontWeight.semibold }}
                  >
                    필수 해시태그 (공모 제출 시 해당 해시태그를 필수로
                    포함해주세요)
                  </Text>
                  <HashtagBox>
                    <div>
                      <strong>Mixcloud:</strong> #로싱스2025
                    </div>
                    <div>
                      <strong>X/Twitter:</strong> #로싱스
                    </div>
                  </HashtagBox>
                </div>
              </RuleCard>

              {/* 주의사항 */}
              <RuleCard>
                <RuleTitle>
                  <Gift size={20} style={{ marginRight: theme.spacing.sm }} />
                  주의사항
                </RuleTitle>
                <RuleList>
                  <li>
                    <strong>사용 악곡은 애니메이션 타이업 곡</strong>{" "}
                    (OP・ED・삽입곡) 및 서브컬쳐 관련 원곡 위주로 구성해주세요.
                  </li>
                  <li>
                    공식으로 유통되었거나, 애니메이션 내에서 사용된 리믹스는
                    사용 가능합니다.
                  </li>
                  <li>활동하지 않는 명의로의 응모는 삼가해주세요.</li>
                  <li>
                    결과 발표 시 <strong>입상자의 DJ명과 간단한 코멘트</strong>
                    를 공개할 예정입니다.
                  </li>
                  <li>
                    저작권 관련 문제 발생 시 참가자 본인이 책임을 져야 합니다.
                  </li>
                </RuleList>
              </RuleCard>
            </div>
          </Flex>
        </Container>
      </RuleSection>

      {/* Submission CTA */}
      <SubmissionCTASection>
        <Container style={{ boxSizing: "border-box" }}>
          <CTAContainer>
            <div>
              <Heading2 align="center" color={theme.colors.text.white}>
                🎵 지금 바로 믹스를 공유하세요!
              </Heading2>
              <CTAText>로싱스에 나만의 믹스를 공유해보세요</CTAText>
            </div>

            <CTAButtonLarge>
              <ExternalLink size={28} />
              공모 접수하기
            </CTAButtonLarge>

            <CTASubText>응모 기간: 7월 8일(화) ~ 8월 24일(일) 까지</CTASubText>
          </CTAContainer>
        </Container>
      </SubmissionCTASection>

      {/* Footer Section */}
      <FooterSection>
        <FooterContainer>
          <FooterLogo>
            <FooterLogoText>아로아로 믹싱 페스티벌 2025</FooterLogoText>
          </FooterLogo>

          <FooterGrid>
            <FooterColumn>
              <FooterTitle>
                <Users size={20} />
                아로아로
              </FooterTitle>
              <FooterLink
                href="https://aroarohall.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                공식 웹사이트
              </FooterLink>
              <FooterLink
                href="https://x.com/aroaro_hall"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={16} />
                @aroaro_hall
              </FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>
                <Music size={20} />
                애니송 슬라이드
              </FooterTitle>
              <FooterLink
                href="https://aroarohall.com/slide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                슬라이드 페이지
              </FooterLink>
              <FooterLink
                href="https://x.com/ANISONGSLIDE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={16} />
                @ANISONGSLIDE
              </FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>
                <Headphones size={20} />
                유니존
              </FooterTitle>
              <FooterLink
                href="https://aroarohall.com/unizone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                유니존 페이지
              </FooterLink>
              <FooterLink
                href="https://x.com/ANISONG_UNIZONE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={16} />
                @ANISONG_UNIZONE
              </FooterLink>
            </FooterColumn>
            <FooterColumn>
              <FooterTitle>
                <Volume2 size={20} />
                오타쿠 붐박스
              </FooterTitle>
              <FooterLink
                href="https://aroarohall.com/otakuboombo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                붐박스 페이지
              </FooterLink>
              <FooterLink
                href="https://x.com/OTAKU_BOOMBOX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={16} />
                @OTAKU_BOOMBOX
              </FooterLink>
            </FooterColumn>
          </FooterGrid>

          <FooterDivider />

          <FooterBottom>
            <FooterCopyright>
              © 2025 아로아로홀. All rights reserved.
            </FooterCopyright>
            <FooterHashtags>
              <FooterHashtag>#로싱스</FooterHashtag>
              <FooterHashtag>#로싱스2025</FooterHashtag>
              <FooterHashtag>#아로아로</FooterHashtag>
            </FooterHashtags>
          </FooterBottom>
        </FooterContainer>
      </FooterSection>
    </div>
  );
}
