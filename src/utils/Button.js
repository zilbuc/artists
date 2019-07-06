import styled from 'styled-components';
import { styles } from '../utils';

const BannerButton = styled.button`
  display: block;
  color: ${styles.colors.mainWhite};
  background: transparent;
  padding: 0.35rem 0.75rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  ${styles.letterSpacing({ spacing: '0.35rem' })};
  font-weight: 500;
  ${styles.border({ color: `${styles.colors.mainWhite}`})};
  margin: 2rem auto 1rem;
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainWhite};
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: ${styles.colors.mainWhite};
    &:hover {
      color: ${styles.colors.mainBlack};
    }
  }
`;

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ width: '0.08rem', color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
  }
`;

export { BannerButton, SectionButton }
