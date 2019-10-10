// @flow
import React, { type Node, useState } from 'react';
import { SvgAngleArrowRight } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import {
  CollapseContentStyle,
  CollapseIconStyle,
  CollapseSeparatorStyle,
  CollapseTriggerStyle,
  CollapseWrapperStyle,
} from '../CollapseElements';

type Props = {
  /** Title of the tile */
  title: string,
  /** Chidlren to render */
  children: Node,
  /** Set collapse value */
  softExpand?: boolean,
};

export const Collapse = ({ title, children, softExpand = false }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(!softExpand);

  const toggleCollapse = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsCollapsed(!isCollapsed);
  };

  return (
    <CollapseWrapperStyle>
      <CollapseTriggerStyle
        onClick={toggleCollapse}
        aria-expanded={isCollapsed}
        aria-label={
          isCollapsed
            ? i18n.t('common.expand_collapse', { name: title })
            : i18n.t('common.shrink_collapse', { name: title })
        }
      >
        {title}
        <CollapseIconStyle aria-hidden iscollapsed={isCollapsed}>
          <SvgAngleArrowRight />
        </CollapseIconStyle>
      </CollapseTriggerStyle>
      <CollapseSeparatorStyle />
      <CollapseContentStyle iscollapsed={isCollapsed} aria-hidden={isCollapsed}>
        {children}
      </CollapseContentStyle>
    </CollapseWrapperStyle>
  );
};
