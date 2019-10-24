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
  TileWithCollapseWrapperStyle,
} from '../CollapseElements';

type Props = {
  /** Title of the tile */
  title: string,
  /** Chidlren to render */
  children: Node,
  /** Set collapse value */
  open?: boolean,
  /** Set collapse styling like a Tile Component */
  withTileStyle?: boolean,
};

export const Collapse = ({
  title,
  children,
  open = false,
  withTileStyle = false,
}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(!open);

  const toggleCollapse = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsCollapsed(!isCollapsed);
  };

  return (
    <CollapseWrapperStyle
      as={withTileStyle ? TileWithCollapseWrapperStyle : CollapseWrapperStyle}
    >
      <CollapseTriggerStyle
        onClick={toggleCollapse}
        aria-expanded={!isCollapsed}
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
      {!withTileStyle && <CollapseSeparatorStyle />}
      <CollapseContentStyle iscollapsed={isCollapsed} aria-hidden={isCollapsed}>
        {withTileStyle && <CollapseSeparatorStyle />}
        {children}
      </CollapseContentStyle>
    </CollapseWrapperStyle>
  );
};
