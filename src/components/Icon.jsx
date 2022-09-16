import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "../images/selection.json";

const Icon = (props) => {
  const { icon, className, size } = props;

  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      icon={icon}
      size={size}
    />
  );
};

export default Icon;
