import React from 'react';
import { Svg } from 'Client/ui/Svg';
import { ThirdLevelTtitleStyle } from 'Client/ui/Elements/TitleElements';
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
    <CollapseWrapperStyle>
      <CollapseTriggerStyle onClick={toggleCollapse} disabled={disableCollapse}>
        <ThirdLevelTtitleStyle>{title}</ThirdLevelTtitleStyle>
        {!disableCollapse && (
          <CollapseIconStyle collapsing={isCollapsed}>
            <Svg type="SvgAngleArrowRight" />
          </CollapseIconStyle>
        )}
      </CollapseTriggerStyle>
      <CollapseContentStyle
        collapsing={isCollapsed}
        forcedexpand={disableCollapse}
      >
        <CollapseSeparatorStyle />
        {children}
      </CollapseContentStyle>
    </CollapseWrapperStyle>
  );
};
