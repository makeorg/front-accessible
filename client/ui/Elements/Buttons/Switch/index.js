import React, { useState } from 'react';
import {
  SvgSwitchLabelChecked,
  SvgSwitchLabelCross,
} from 'Client/ui/Svg/elements';

import {
  SwitchButtonStyle,
  SwitchButtonInternalLabelStyle,
  SwitchButtonWrapperStyle,
} from './style';

type Props = {
  onEnabling?: () => void,
  onDisabling?: () => void,
};

export const SwitchButton = ({
  onEnabling = () => {},
  onDisabling = () => {},
}: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    if (!isChecked) {
      onEnabling();
    } else {
      onDisabling();
    }
    setIsChecked(!isChecked);
  };

  return (
    <SwitchButtonWrapperStyle>
      <SwitchButtonStyle
        onClick={handleClick}
        role="switch"
        aria-checked={isChecked}
        className="switch"
        isChecked={isChecked}
      >
        <SwitchButtonInternalLabelStyle isChecked={isChecked}>
          {isChecked ? (
            <SvgSwitchLabelChecked
              aria-hidden
              width="8"
              height="8"
              focusable="false"
            />
          ) : (
            <SvgSwitchLabelCross
              aria-hidden
              width="8"
              height="8"
              focusable="false"
            />
          )}
        </SwitchButtonInternalLabelStyle>
      </SwitchButtonStyle>
    </SwitchButtonWrapperStyle>
  );
};
