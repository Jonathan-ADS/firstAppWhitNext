import { FC, PropsWithChildren } from "react";

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffffa6",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
};
