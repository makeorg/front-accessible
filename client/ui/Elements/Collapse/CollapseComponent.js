import React from 'react';
import { i18n } from 'Shared/i18n';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { SvgAngleArrowRight } from 'Client/ui/Svg/elements';
import {
  CollapseWrapperStyle,
  CollapseSeparatorStyle,
  CollapseContentStyle,
  CollapseTriggerStyle,
  CollapseIconStyle,
} from './Styled';

type Props = {
  /** Title of the tile */
  title: string,
  /** Chidlren to render */
  children: React.Node,
  /** isCollapsed or not */
  isCollapsed: boolean,
  /** Boolean used to disable Trigger on Desktop */
  disableCollapse: boolean,
  /** Method to toogle collapse */
  toggleCollapse: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
};

export const CollapseComponent = (props: Props) => {
  const {
    title,
    children,
    isCollapsed,
    disableCollapse,
    toggleCollapse,
  } = props;
  return (
    <CollapseWrapperStyle aria-expanded={disableCollapse ? true : !isCollapsed}>
      <CollapseTriggerStyle
        onClick={toggleCollapse}
        disabled={disableCollapse}
        aria-disabled={disableCollapse}
        aria-label={
          isCollapsed
            ? i18n.t('common.expand_collapse', { name: title })
            : i18n.t('common.shrink_collapse', { name: title })
        }
      >
        <ThirdLevelTitleStyle>{title}</ThirdLevelTitleStyle>
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
        <CollapseSeparatorStyle />
        {children}
      </CollapseContentStyle>
    </CollapseWrapperStyle>
  );
};
