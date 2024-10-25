import { Triangle } from "react-loader-spinner";

const TriangleSpinner = ({
  // color = "#4fa94d",
  color = "#d97706",
  height = 200,
  width = 200
}) => {
  return (
    <div className="w-full flex justify-center">
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
