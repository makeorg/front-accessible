// @flow
import * as React from 'react';
import { type QualificationType } from 'Shared/types/proposal';
import {
  doUpdateState,
  startPendingState,
  finishPendingState,
} from 'Shared/helpers/qualification';
import { QualificationService } from 'Shared/api/QualificationService';
import { Tracking } from 'Shared/services/Tracking';
import { QualificationComponent } from './QualificationComponent';

type Props = {
  /** Array with qualifications received from Api */
  qualifications: QualificationType[],
  /** Proposal's Id */
  proposalId: string,
  /** String containing the hash generate api side for security purpose */
  proposalKey: string,
  /** Index of the card */
  index?: number,
  /** Voted key property */
  votedKey: string,
  /** When waiting vote response from API */
  pendingVote: boolean,
};

type State = {
  /** Array with qualifications received from Api */
  qualifications: QualificationType[],
  /** When waiting qualification response from API */
  pendingQualificationKeys: Set<string>,
};

/**
 * Handles Qualification Business Logic
 */
export class QualificationContainer extends React.Component<Props, State> {
  static defaultProps = {
    index: undefined,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      qualifications: props.qualifications,
      pendingQualificationKeys: new Set(),
    };
  }

  handleUnqualify = (qualificationKey: string, voteKey: string) => {
    const { proposalId, proposalKey, index } = this.props;
    QualificationService.unqualify(
      proposalId,
      proposalKey,
      voteKey,
      qualificationKey
    )
      .then(qualificationResult => {
        this.setState(prevState =>
          doUpdateState(prevState, qualificationResult)
        );
      })
      .catch(() => {
        this.setState(prevState =>
          finishPendingState(prevState, qualificationKey)
        );
      });
    Tracking.trackUnqualify(proposalId, qualificationKey, voteKey, index);
  };

  handleQualify = (qualificationKey: string, voteKey: string) => {
    const { proposalId, proposalKey, index } = this.props;
    QualificationService.qualify(
      proposalId,
      proposalKey,
      voteKey,
      qualificationKey
    )
      .then(qualificationResult => {
        this.setState(prevState =>
          doUpdateState(prevState, qualificationResult)
        );
      })
      .catch(() => {
        this.setState(prevState =>
          finishPendingState(prevState, qualificationKey)
        );
      });
    Tracking.trackQualify(proposalId, qualificationKey, voteKey, index);
  };

  handleQualification = (qualification: Object, voteKey: string) => {
    this.setState(prevState =>
      startPendingState(prevState, qualification.qualificationKey)
    );
    if (qualification.hasQualified) {
      this.handleUnqualify(qualification.qualificationKey, voteKey);
    } else {
      this.handleQualify(qualification.qualificationKey, voteKey);
    }
  };

  render() {
    const { proposalId, votedKey, pendingVote } = this.props;
    const { qualifications, pendingQualificationKeys } = this.state;

    return (
      <QualificationComponent
        proposalId={proposalId}
        votedKey={votedKey}
        qualifications={qualifications}
        handleQualification={this.handleQualification}
        pendingVote={pendingVote}
        pendingQualificationKeys={pendingQualificationKeys}
      />
    );
  }
}
