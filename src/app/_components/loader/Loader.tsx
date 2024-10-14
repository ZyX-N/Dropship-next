import { Triangle } from "react-loader-spinner";

const TriangleSpinner = ({
  // color = "#4fa94d",
  color = "#d97706",
  height = 100,
  width = 100
}) => {
  return (
    <div className="w-full justify-center">
      <Triangle
        height={height}
        width={width}
        //   radius={radius}
        color={color}
        visible={true}
      />
    </div>
  );
};

export default TriangleSpinner;
