// @flow
import React from 'react';
import { SvgHandHeart } from 'Client/ui/Svg/elements';
import {
  BrowseWrapperStyle,
  BrowseElementStyle,
  BrowseElementPicture,
  BrowseElementSubtitle,
  BrowseElementQuestion,
  SvgWrapperStyle,
  BrowseElementDateContainer,
  BrowseElementDateStyle,
  BrowseRedLinkElementStyle,
} from './style';

export const BrowseConsultations = () => {
  return (
    <BrowseWrapperStyle>
      {/* todo: when endpoint is created, map on data to build <BrowseElement/> */}
      <BrowseElementStyle>
        <BrowseElementPicture />
        <BrowseElementSubtitle>Grande Cause Make.org</BrowseElementSubtitle>
        <BrowseElementQuestion>
          Comment agir ensemble dès maintenant pour l&apos;environnement ?
        </BrowseElementQuestion>
        <BrowseElementDateContainer>
          <SvgWrapperStyle>
            <SvgHandHeart />
          </SvgWrapperStyle>
          <BrowseElementDateStyle>
            Consultation du 5 mars 2020 au 9 avril 2020
          </BrowseElementDateStyle>
        </BrowseElementDateContainer>
        <BrowseRedLinkElementStyle>Participer</BrowseRedLinkElementStyle>
      </BrowseElementStyle>
      <BrowseElementStyle>
        <BrowseElementPicture />
        <BrowseElementQuestion>
          Comment poser une petite question ?
        </BrowseElementQuestion>
        <BrowseElementDateContainer>
          <SvgWrapperStyle>
            <SvgHandHeart />
          </SvgWrapperStyle>
          <BrowseElementDateStyle>
            Consultation du 5 mars 2020 au 9 avril 2020
          </BrowseElementDateStyle>
        </BrowseElementDateContainer>
        <BrowseRedLinkElementStyle>Participer</BrowseRedLinkElementStyle>
      </BrowseElementStyle>
      <BrowseElementStyle>
        <BrowseElementPicture />
        <BrowseElementQuestion>
          Comment agir ensemble dès maintenant pour l&apos;environnement avec
          une question à rallonge ?
        </BrowseElementQuestion>
        <BrowseElementDateContainer>
          <SvgWrapperStyle>
            <SvgHandHeart />
          </SvgWrapperStyle>
          <BrowseElementDateStyle>
            Consultation du 5 mars 2020 au 9 avril 2020
          </BrowseElementDateStyle>
        </BrowseElementDateContainer>
        <BrowseRedLinkElementStyle>Participer</BrowseRedLinkElementStyle>
      </BrowseElementStyle>
      <BrowseElementStyle>
        <BrowseElementPicture />
        <BrowseElementQuestion>
          Comment agir ensemble dès maintenant pour l&apos;environnement ?
        </BrowseElementQuestion>
        <BrowseElementDateContainer>
          <SvgWrapperStyle>
            <SvgHandHeart />
          </SvgWrapperStyle>
          <BrowseElementDateStyle>
            Consultation du 5 mars 2020 au 9 avril 2020
          </BrowseElementDateStyle>
        </BrowseElementDateContainer>
        <BrowseRedLinkElementStyle>Participer</BrowseRedLinkElementStyle>
      </BrowseElementStyle>
      <BrowseElementStyle>
        <BrowseElementPicture />
        <BrowseElementQuestion>
          Comment agir ensemble dès maintenant pour l&apos;environnement ?
        </BrowseElementQuestion>
        <BrowseElementDateContainer>
          <SvgWrapperStyle>
            <SvgHandHeart />
          </SvgWrapperStyle>
          <BrowseElementDateStyle>
            Consultation du 5 mars 2020 au 9 avril 2020
          </BrowseElementDateStyle>
        </BrowseElementDateContainer>
        <BrowseRedLinkElementStyle>Participer</BrowseRedLinkElementStyle>
      </BrowseElementStyle>
    </BrowseWrapperStyle>
  );
};
