import styled, { css, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    color: black;
  }
  body * {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 16px;
  }
`

export const Container = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  height: 100%;
  width: 100%;
`;

const hideCellsCss = css`
  * [data-type="check"] { display: none; }
  * [data-type="revient"] { display: none; }
  * [data-type="duration"] { display: none; }
`;

export const Table = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
  overflow: hidden;
  #delete-container {
    width: 100%;
    overflow: hidden;
  }
  #delete-content {
    width: 100%;
    background: white;
  }
  ${props => props.hideCells && hideCellsCss}
`;

const rowHeaderCss = css`
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  * {
    color: white;
    font-weight: bold;
    background: #137102 !important;
    border-left: none !important;
    border-right: none !important;
  }
`;

const rowFooterCss = css`
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  * {
    color: white;
    font-weight: bold;
    background: #24b100 !important;
    border-left: none !important;
    border-right: none !important;
  }
`;

const rowCss = css`
  border-bottom: 1px solid #ddd;
  & > * {
    & ~ * {
      border-left: 1px solid #ddd;
    }
    &:first-of-type {
      border-left: 1px solid #ddd;
    }
    &:last-of-type {
      border-right: 1px solid #ddd;
    }
  }
`

export const TableRow = styled.div`
  width: 100%;
  overflow: hidden;
  ${props => props.header && rowHeaderCss}
  ${props => props.footer && rowFooterCss}
  ${rowCss}
`;

const columnHeaderCss = css`
  background: #929292;
  color: white;
`;

export const TableCell = styled.div`
  flex-grow: ${props => props.flex || 1};
  flex-shrink: 0;
  padding: 5px;
  min-height: 50px;
  flex-basis: auto;
  text-align: center;
  border-top: 1px solid #ddd;

  &[data-type="check"] {
    flex: 8;
    ${columnHeaderCss}
  }
  &[data-type="mission"] {
    flex: 25;
    ${columnHeaderCss}
  }
  &[data-type="duration"] {
    flex: 12;
  }
  &[data-type="vente"] {
    flex: 15;
  }
  &[data-type="revient"] {
    flex: 15;
  }
  &[data-type="calcul-duree"] {
    flex: 15;
  }
  &[data-type="calcul-revient"] {
    flex: 15;
  }
`;

export const Buttons = styled.div``;

export const BigButton = styled.button`
  background: ${props => props.highlight ? 'white' : '#24b100'};
  color: ${props => props.highlight ? '#24b100' : 'white'};
  border: 2px solid #24b100;
  font-size: 18px;
  font-weight: bold;
  border-radius: 40px;
  padding: 8px 20px;
  margin-bottom: 40px;
  &:not(:first-of-type) {
    margin-left: 10px;
  }
`

export const Input = styled.input`
  background: transparent;
  height: 100%;
  border: none;
  width: ${props => props.restricted ? '50px' : 'auto'};
  flex-grow: 0;
  flex-shrink: 1;
  text-align: ${props => props.alignRight ? 'right' : 'center'};
`

export const Unit = styled.span`
  flex-shrink: 0;
`;

export default GlobalStyle;
