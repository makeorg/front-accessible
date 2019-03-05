import styled from 'styled-components';

export const TagStyle = styled.button`
  position: relative;
  cursor: pointer;
  padding: 0 10px 0 12px;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  text-decoration: none;
  height: 26px;
  line-height: 24px;
  font-size: 14px;
  border: none;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 12px;
  &:hover {
    background: ${props => props.hoverBackgroundColor};
    &:before {
      border-color: transparent ${props => props.hoverBackgroundColor}
        transparent transparent;
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -12px;
    width: 0;
    height: 0;
    border-color: transparent ${props => props.backgroundColor} transparent
      transparent;
    border-style: solid;
    border-width: 12px 12px 14px 0;
  }
  &:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    float: left;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: #fff;
  }
`;
