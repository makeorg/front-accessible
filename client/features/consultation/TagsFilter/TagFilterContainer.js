// @flow
import React, { useState, useEffect } from 'react';
import { type Question } from 'Shared/types/question';
import { type Tag as TypeTag } from 'Shared/types/proposal';
import { TagService } from 'Shared/api/TagService';
import { Logger } from 'Shared/services/Logger';
import { TagFilterComponent } from './TagFilterComponent';

type Props = {
  question: Question,
  selectedTagIdList: string[],
  handleSelectTag: TypeTag => void,
};

export const TagFilterContainer = ({
  question,
  selectedTagIdList,
  handleSelectTag,
}: Props) => {
  const [tags, setTags] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    let isMounted = true;
    const { questionId, country, language } = question;
    const fetchTags = async () => {
      try {
        const result = await TagService.getList(questionId, country, language);

        if (isMounted) {
          setTags(result);
        }
      } catch (error) {
        Logger.logError(error);
      }
    };

    fetchTags();

    return () => {
      isMounted = false;
    };
  }, [question]);

  if (!tags.length) {
    return null;
  }

  return (
    <TagFilterComponent
      tags={tags}
      showAll={showAll}
      selectedTagIdList={selectedTagIdList}
      handleSelectTag={handleSelectTag}
      toggleShowAll={toggleShowAll}
    />
  );
};
