import React, { Fragment } from 'react';
import athena from 'athena-design-tokens';
import styled from 'styled-components';
import { FRONT_URL } from 'Shared/constants/config';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import { ExternalLinkIconStyle } from 'Client/ui/Elements/Buttons/V2/style';

const ColorboxStyle = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid;
  margin: 5px;
  background-color: ${props => props.col};
`;

const ColorGroupName = athena.color;
const colors = [];
// eslint-disable-next-line no-restricted-syntax
for (const [colorName, value] of Object.entries(ColorGroupName)) {
  colors.push({ colorName, value });
}
export const Colors = () => {
  return (
    <>
      <h1>Colors</h1>
      <table>
        <caption>
          Color values used for the UI of
          <> </>
          <RedLinkHTMLElementStyle href={FRONT_URL}>
            {FRONT_URL}
          </RedLinkHTMLElementStyle>
          <> </>
          from the design tokens
          <> </>
          <RedLinkHTMLElementStyle
            href="https://www.npmjs.com/package/athena-design-tokens"
            target="_blank"
            rel="nooperner noreferrer"
          >
            NPM module
            <ExternalLinkIconStyle className="red-link" aria-hidden />
          </RedLinkHTMLElementStyle>
          <> </>
        </caption>
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">color</th>
            <th scope="col">value</th>
          </tr>
        </thead>
        {colors.map(c => (
          <Fragment key={c.colorName}>
            <tbody>
              <tr>
                <th scope="row">{c.colorName}</th>
                <td>
                  <ColorboxStyle col={c.value} />
                </td>
                <td>{c.value}</td>
              </tr>
            </tbody>
          </Fragment>
        ))}
      </table>
    </>
  );
};