// @flow
import React, { useRef } from 'react';
import { getTotalVotesCount, getVotesPercent } from 'Shared/helpers/voteResult';
import { type Vote as TypeVote } from 'Shared/types/proposal';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { i18n } from 'Shared/i18n';
import { useMobile } from 'Client/hooks/useMedia';
import { type TypeSliderParams } from 'Shared/types/views';
import { useSlider } from 'Client/hooks/useSlider';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import { DetailledResultItem } from './Item';
import { VoteProgress } from './Progress';
import { DetailledItemListStyle } from './style';

type Props = {
  votes: TypeVote[],
  proposalId: string,
};

export const DetailledVoteResults = (props: Props) => {
  const { votes, proposalId } = props;
  const totalVotesCount = getTotalVotesCount(votes);
  const votesPercent = getVotesPercent(votes, totalVotesCount);
  const isMobile = useMobile();
  const sliderRef = useRef();
  const sliderName = 'detailed_results';
  const hasVotes = votes.length > 0;
  const sliderParams: TypeSliderParams = {
    slidesToShow: 1.15,
  };

  useSlider(sliderRef, sliderParams, isMobile && hasVotes);

  return (
    <>
      <VoteProgress
        key={`vote_progress_${proposalId}`}
        votes={votes}
        proposalId={proposalId}
      />
      <GliderStylesheet />
      <ScreenReaderItemStyle>
        {i18n.t('results.static_repartition')}
      </ScreenReaderItemStyle>
      {isMobile ? (
        <div className={`${sliderName} glider-contain`}>
          <div className={`${sliderName} glider`} ref={sliderRef}>
            <DetailledItemListStyle className={`${sliderName} glider-track`}>
              {votes.map(vote => (
                <DetailledResultItem
                  key={`detail_result_${proposalId}_${vote.voteKey}`}
                  className={sliderName}
                  vote={vote}
                  votePercent={votesPercent[vote.voteKey]}
                />
              ))}
            </DetailledItemListStyle>
          </div>
        </div>
      ) : (
        <DetailledItemListStyle>
          {votes.map(vote => (
            <DetailledResultItem
              key={`detail_result_${proposalId}_${vote.voteKey}`}
              vote={vote}
              votePercent={votesPercent[vote.voteKey]}
            />
          ))}
        </DetailledItemListStyle>
      )}
    </>
  );
};
