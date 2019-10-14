// @flow
import React, { type Node, useState, useEffect } from 'react';
import { i18n } from 'Shared/i18n';
import { SvgAngleArrowRight } from 'Client/ui/Svg/elements';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import {
  TileWithCollapseWrapperStyle,
  TileWithCollapseSeparatorStyle,
  CollapseContentStyle,
  CollapseTriggerStyle,
  CollapseIconStyle,
} from '../CollapseElements';

type Props = {
  /** Title of the tile */
  title: string,
  /** Chidlren to render */
  children: Node,
  /** Set collapse value */
  softExpand?: boolean,
  /** Force Expand on Desktop */
  forceExpand?: boolean,
};

export const TileWithCollapse = ({
  title,
  children,
  softExpand = false,
  forceExpand = false,
}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(!softExpand);
  const [disableCollapse, setDisableCollapse] = useState<boolean>(false);

  const forceExpandOnDesktop = () => {
    const enabledDesktopExpand =
      forceExpand && window.innerWidth > Breakpoints.Tablet;
    setDisableCollapse(enabledDesktopExpand);
  };

  const toggleCollapse = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    forceExpandOnDesktop();
  }, []);

  return (
    <TileWithCollapseWrapperStyle>
      <CollapseTriggerStyle
        onClick={toggleCollapse}
        disabled={disableCollapse}
        aria-expanded={disableCollapse ? false : isCollapsed}
        aria-label={
          isCollapsed
            ? i18n.t('common.expand_collapse', { name: title })
            : i18n.t('common.shrink_collapse', { name: title })
        }
      >
        {title}
        {!disableCollapse && (
          <CollapseIconStyle aria-hidden iscollapsed={isCollapsed}>
            <SvgAngleArrowRight />
          </CollapseIconStyle>
        )}
      </CollapseTriggerStyle>
      <CollapseContentStyle
        iscollapsed={isCollapsed}
        forcedexpand={disableCollapse}
        aria-hidden={disableCollapse ? false : isCollapsed}
      >
        <TileWithCollapseSeparatorStyle />
        {children}
      </CollapseContentStyle>
    </TileWithCollapseWrapperStyle>
  );
};
