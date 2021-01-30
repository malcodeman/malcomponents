import styled from "styled-components";

export const ParagraphXSmall = styled.p`
  color: ${(props) => props.theme.malcode?.colors.contentPrimary};
  ${(props) => props.theme.malcode?.typography.size.paragraphXSmall};
`;

export const ParagraphSmall = styled.p`
  color: ${(props) => props.theme.malcode?.colors.contentPrimary};
  ${(props) => props.theme.malcode?.typography.size.paragraphSmall};
`;

export const ParagraphMedium = styled.p`
  color: ${(props) => props.theme.malcode?.colors.contentPrimary};
  ${(props) => props.theme.malcode?.typography.size.paragraphMedium};
`;

export const ParagraphLarge = styled.p`
  color: ${(props) => props.theme.malcode?.colors.contentPrimary};
  ${(props) => props.theme.malcode?.typography.size.paragraphLarge};
`;

export const HeadingXSmall = styled.h6`
  color: ${(props) => props.theme.malcode?.colors.contentPrimary};
  ${(props) => props.theme.malcode?.typography.size.headingXSmall};
`;

export const HeadingSmall = styled.h5`
  color: ${(props) => props.theme.malcode?.colors.contentPrimary};
  ${(props) => props.theme.malcode?.typography.size.headingSmall};
`;

export const HeadingMedium = styled.h4`
  color: ${(props) => props.theme.malcode?.colors.contentPrimary};
  ${(props) => props.theme.malcode?.typography.size.headingMedium};
`;

export const HeadingLarge = styled.h3`
  color: ${(props) => props.theme.malcode?.colors.contentPrimary};
  ${(props) => props.theme.malcode?.typography.size.headingLarge};
`;

export const HeadingXLarge = styled.h2`
  color: ${(props) => props.theme.malcode?.colors.contentPrimary};
  ${(props) => props.theme.malcode?.typography.size.headingXLarge};
`;

export const HeadingXXLarge = styled.h1`
  color: ${(props) => props.theme.malcode?.colors.contentPrimary};
  ${(props) => props.theme.malcode?.typography.size.headingXXLarge};
`;
