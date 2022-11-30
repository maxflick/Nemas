import * as React from "react";
import { Box } from "@mui/material/";

export default function Background() {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          position: "fixed",
          zIndex: "-1",
          perspective: "800px",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: ["100%", "50%"],
            right: ["-70%", "8%"],
            position: "absolute",
            transform: [
              "rotateX(-8deg) skewX(-12deg)",
              "rotateX(-8deg) skewX(-8deg)",
            ],
            backgroundColor: "#00DCA0",
          }}
        ></Box>
      </Box>
    </>
  );
}
