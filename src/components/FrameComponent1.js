import { useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  name1,
  frame2Placeholder,
  propFlex,
  propPadding,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="frame-parent2" style={frameDivStyle}>
      <div className="name-wrapper" style={frameDiv1Style}>
        <b className="name">{name1}</b>
      </div>
      <input
        className="frame-input"
        placeholder={frame2Placeholder}
        type="text"
      />
    </div>
  );
};

export default FrameComponent1;
