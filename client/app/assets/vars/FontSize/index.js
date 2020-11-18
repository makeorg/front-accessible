import React, { Fragment } from 'react';
import athena from 'athena-design-tokens';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import { FRONT_URL } from 'Shared/constants/config';
import { ExternalLinkIconStyle } from 'Client/ui/Elements/Buttons/V2/style';

const FontGroupName = athena.typography.font.fontsize;
const fonts = [];
// eslint-disable-next-line no-restricted-syntax
for (const [fontName, value] of Object.entries(FontGroupName)) {
  fonts.push({ fontName, value });
}

export const FontSize = () => {
  return (
    <>
      <h1>FontSize</h1>
      <table>
        <caption>
          Font size for the UI of
          <> </>
          <RedLinkHTMLElementStyle href={FRONT_URL}>
            {FRONT_URL}
          </RedLinkHTMLElementStyle>
          <> </>
          from design tokens
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
            <th scope="col">Size</th>
            <th scope="col">Name</th>
            <th scope="col">value</th>
          </tr>
        </thead>
        {fonts.map(f => (
          <Fragment key={f.fontName}>
            <tbody>
              <tr>
                <th scope="row">
                  <span style={{ fontSize: f.value.value }}>FontSize</span>
                </th>
                <td>{f.fontName}</td>
                <td>{f.value.value}</td>
              </tr>
            </tbody>
          </Fragment>
        ))}
      </table>
    </>
  );
};
