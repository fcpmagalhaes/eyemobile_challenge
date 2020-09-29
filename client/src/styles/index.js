import styled from 'styled-components';
// import '@flasd/focus-fix';
// import '@flasd/focus-fix/styles.css';

/**
 * @function enforcePx
 * @param  {string|number} value
 * @param  {string|number} fallback
 * @return {string} garanteed string following /^\d+px$/
 */
export function enforcePx(value, fallback) {
  if (value === 'none') {
    return value;
  }

  if (typeof value === 'string') {
    if (value.endsWith('px')) {
      return value;
    }

    return `${value}px`;
  }

  if (typeof value === 'number') {
    return `${value}px`;
  }

  if (
    typeof fallback === 'undefined'
    && process.env.NODE_ENV === 'development'
  ) {
    // We create a error to be able to get stack trace!
    const err = new Error(
      `Expected string or number for pixel value but got ${value}.`,
    );

    // eslint-disable-next-line no-console
    console.error(err);
  }

  return fallback !== 'undefined' ? enforcePx(fallback) : '0px';
}

export const Container = styled.div`
  padding: 48px;
`;

export const Header = styled.div`
  padding-bottom: 40px;
`;

// Headings
export const Title = styled.p`
  display: block;
  margin-bottom: 5px;
  letter-spacing: 1.25px;
  margin-top: ${(props) => enforcePx(props.marginTop, 0)};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  font-size: ${(props) => enforcePx(props.size, props.theme.sizes.p)};
  text-transform: ${(props) => (props.upperCase ? 'uppercase' : 'none')};
  color: ${(props) => props.theme.colors.blueGrey};
`;

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.sizes.h1};
  font-weight: bold;
  line-height: 29px;
  color: ${(props) => props.theme.colors.charcoal};
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.sizes.h2};
  font-weight: bold;
  line-height: 29px;
  color: ${(props) => props.theme.colors.charcoal};
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.sizes.h3};
  font-weight: bold;
  line-height: 24px;
  color: ${(props) => props.theme.colors.charcoal};
`;

export const Text = styled.p`
  margin-bottom: 30px;
  line-height: 1.6;
  font-size: ${(props) => props.theme.sizes.p};
  color: ${(props) => props.theme.colors.charcoal};
`;

export const Section = styled.div`
  margin-top: ${(props) => enforcePx(props.marginTop, 0)};
  margin-bottom: ${(props) => enforcePx(props.marginBottom, 30)};
  margin-left: ${(props) => enforcePx(props.marginLeft, 0)};
  margin-right: ${(props) => enforcePx(props.marginRight, 0)};
  max-width: ${(props) => enforcePx(props.maxWidth, 'none')};
`;

export const SectionTitle = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: ${(props) => (props.isDisabled
    ? props.theme.colors.blueGrey
    : props.theme.colors.charcoal)};
`;

export const SectionDescription = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: ${(props) => props.theme.colors.blueGrey};
`;

export const Label = styled.label`
  font-family: Lato;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  text-transform: uppercase;
  display: block;
  line-height: 1.17;
  letter-spacing: 1.25px;
  color: ${(props) => props.theme.colors.blueGrey};
  margin-bottom: 8px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: solid 1px ${(props) => props.theme.colors.lightPeriwinkle};
  margin: 63px 0 0px;
  padding-top: 25px;
  &.right-align {
    justify-content: flex-end;
  }
`;
