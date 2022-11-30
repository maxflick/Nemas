import * as React from "react";
import { Box, Typography } from "@mui/material/";
import { StaticImage } from "gatsby-plugin-image";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import WifiIcon from "@mui/icons-material/Wifi";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import CancelIcon from "@mui/icons-material/Cancel";
import VideocamIcon from "@mui/icons-material/Videocam";
import MicIcon from "@mui/icons-material/Mic";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

export default function MockUp({ backgroundImageSrc, expertImageSrc }) {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          my: [4, 0],
          mx: 4,
          backgroundColor: "#001814",
          borderRadius: "24px",
          overflow: "hidden",
          aspectRatio: "1 / 2",
        }}
      >
        <StaticImage
          src="../media/background.png"
          alt="När du behöver få råd i ett hemmaprojekt, en renovering, vid montering, fix eller t.ex. målning."
          imgStyle={{ borderRadius: "24px 24px 0 0", position: "absolute" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            p: 2,
            pt: 1,
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#fefefe",
                  backgroundColor: "transparent",
                  fontSize: ".65rem",
                  fontWeight: "900",
                  fontStyle: "italic",
                  textTransform: "uppercase",
                }}
                variant="body"
              >
                Nemas<i>!</i>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <SignalCellularAltIcon
                sx={{ color: "#fefefe", fontSize: ".75rem", mr: 0.5 }}
              />
              <WifiIcon
                sx={{ color: "#fefefe", fontSize: ".75rem", mr: 0.5 }}
              />
              <BatteryFullIcon sx={{ color: "#fefefe", fontSize: ".75rem" }} />
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              pt: 2,
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                backgroundColor: "transparent",
                borderRadius: "128px",
                display: "flex",
                p: 1,
              }}
            >
              <ArrowBackIcon
                sx={{ display: "none", fontSize: "1.25rem", color: "#fefefe" }}
              />
            </Box>
            <Box
              sx={{ width: "40px", borderRadius: "4px", overflow: "hidden" }}
            >
              <StaticImage
                src="../media/expert.png"
                alt="När du behöver få råd i ett hemmaprojekt, en renovering, vid montering, fix eller t.ex. målning."
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            mb: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "end",
              mb: 2,
              px: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-end",
              }}
            >
              <Box sx={{ color: "#fefefe" }}>
                <Typography
                  sx={{
                    color: "#fefefe",
                    backgroundColor: "transparent",
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                  variant="body"
                >
                  01:30
                </Typography>
              </Box>
              <Box sx={{ color: "#fefefe" }}>
                <Typography
                  sx={{
                    color: "#fefefe",
                    backgroundColor: "transparent",
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                  variant="body"
                >
                  Anna
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  backgroundColor: "rgba(0,24,20,0.9)",
                  borderRadius: "128px",
                  display: "flex",
                  p: 1,
                  mb: 1,
                }}
              >
                <VideocamIcon sx={{ fontSize: "1.25rem", color: "#fefefe" }} />
              </Box>
              <Box
                sx={{
                  backgroundColor: "rgba(0,24,20,0.9)",
                  borderRadius: "128px",
                  display: "flex",
                  p: 1,
                }}
              >
                <MicIcon sx={{ fontSize: "1.25rem", color: "#fefefe" }} />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "rgba(0,24,20,0.9)",
              borderRadius: "0 0 24px 24px",
              px: 3,
              pb: 2.25,
              pt: 2,
            }}
          >
            {/* <VideocamIcon sx={{ fontSize: '1.5rem', color: '#fefefe' }}/> */}
            {/* <MicIcon sx={{ fontSize: '1.5rem', color: '#fefefe' }}/> */}
            <FlipCameraAndroidIcon
              sx={{ fontSize: "1.25rem", color: "#fefefe" }}
            />
            <CancelIcon sx={{ fontSize: "1.25rem", color: "#FF8989" }} />
            <ChatBubbleIcon sx={{ fontSize: "1.25rem", color: "#fefefe" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
