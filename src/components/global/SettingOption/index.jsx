import { Icon } from "@iconify/react";
import React from "react";

function SettingOption({ name = "test", leftIon, arrow }) {
  return (
    <div className='d-flex align-items-center justify-content-between collapsible '>
      <div className='d-flex align-items-center'>
        {leftIon}
        <span>{name}</span>
      </div>
      {arrow && (
        <span>
          <Icon
            icon={"material-symbols:chevron-right-rounded"}
            height={"30px"}
            width={"30px"}
          />
        </span>
      )}
    </div>
  );
}

export default SettingOption;
