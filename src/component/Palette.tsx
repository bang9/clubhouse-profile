import React, { useState } from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

interface IProps {
  color: string;
  onChangeColor: (color: string) => void;
}
const Palette: React.FC<IProps> = ({ color, onChangeColor }) => {
  const [pickerVisible, setPickerVisible] = useState(false);

  const styles = reactCSS({
    default: {
      color: {
        flex: 1,
        height: "14px",
        borderRadius: "2px",
        background: color,
      },
      swatch: {
        display: "flex",
        flex: 1,
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  return (
    <div style={{ flex: 1 }}>
      <div style={styles.swatch} onClick={() => setPickerVisible(true)}>
        <div style={styles.color} />
      </div>

      {pickerVisible && (
        <div style={styles.popover as any}>
          <div
            style={styles.cover as any}
            onClick={() => setPickerVisible(false)}
          />
          <SketchPicker
            color={color}
            onChange={({ rgb }) =>
              onChangeColor(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`)
            }
          />
        </div>
      )}
    </div>
  );
};

export default Palette;
