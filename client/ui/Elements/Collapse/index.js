// @flow
import React, { type Node, useState } from 'react';
import { SvgArrowDown } from 'Client/ui/Svg/elements/ArrowDown';
import { i18n } from 'Shared/i18n';
import {
  CollapseContentStyle,
  CollapseIconStyle,
  CollapseTriggerStyle,
  CollapseWrapperStyle,
} from './style';

type Props = {
  /** Title of the tile */
  title: string,
  /** Chidlren to render */
  children: Node,
  /** Set collapse value */
  open?: boolean,
  /** Optional language to handle lang attribute */
  language?: string,
};

export const Collapse = ({
  title,
  children,
  open = false,
  language,
}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(!open);

  const toggleCollapse = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsCollapsed(!isCollapsed);
  };

  return (
    <CollapseWrapperStyle className={isCollapsed && 'collapsed'}>
      <CollapseTriggerStyle
        onClick={toggleCollapse}
        aria-expanded={!isCollapsed}
        aria-label={
          isCollapsed
            ? i18n.t('common.expand_collapse', { name: title })
            : i18n.t('common.shrink_collapse', { name: title })
        }
        lang={language}
      >
        {title}
        <CollapseIconStyle aria-hidden iscollapsed={isCollapsed}>
          <SvgArrowDown width={10} height={10} focusable="false" />
        </CollapseIconStyle>
      </CollapseTriggerStyle>
      <CollapseContentStyle iscollapsed={isCollapsed} aria-hidden={isCollapsed}>
        {children}
      </CollapseContentStyle>
    </CollapseWrapperStyle>
  );
};
