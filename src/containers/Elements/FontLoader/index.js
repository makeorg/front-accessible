import React from 'react';
import { FontFacesStylesheet } from '../../../assets/css-in-js/FontFaces';
import TradeGothicWoff from '../../../assets/fonts/TradeGothicLTStd-BdCn20.woff';
import TradeGothicWoff2 from '../../../assets/fonts/TradeGothicLTStd-BdCn20.woff2';
import CircularBoldWoff from '../../../assets/fonts/CircularStd-Bold.woff';
import CircularBoldWoff2 from '../../../assets/fonts/CircularStd-Bold.woff2';
import CircularBookWoff from '../../../assets/fonts/CircularStd-Book.woff';
import CircularBookWoff2 from '../../../assets/fonts/CircularStd-Book.woff2';

export const TradeGothic = new FontFace('Trade Gothic', `url(${TradeGothicWoff}), url(${TradeGothicWoff2})`, {
  style: 'normal', unicodeRange: 'U+000-5FF', weight: '400'
});

export const CircularBold = new FontFace('Circular Bold', `url(${CircularBoldWoff}), url(${CircularBoldWoff2})`);
export const CircularBook = new FontFace('Circular Book', `url(${CircularBookWoff}), url(${CircularBookWoff2})`);

class FontLoaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFontLoaded: false
    };
  }

  componentDidMount() {
    this.fontloader();
  }

  fontloader() {
    TradeGothic.load();
    CircularBold.load();
    CircularBook.load();

    document.fonts.add(TradeGothic);
    document.fonts.add(CircularBold);
    document.fonts.add(CircularBook);

    document.fonts.ready.then(
      this.setState({
        isFontLoaded: true
      })
    );
  }


  render() {
    const { isFontLoaded } = this.state;

    const FontLoading = () => {
      if (!isFontLoaded) {
        return (
          <FontFacesStylesheet />
        );
      } return null;
    };

    return (
      <FontLoading />
    );
  }
}

export default FontLoaderContainer;
