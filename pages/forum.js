import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";
import React from "react";
import { useRouter } from "next/router";
import MusicPlayer, { videoURL } from "./music.js";

function Titulo(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals[100]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

export default function forum() {
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "url(https://virtualbackgrounds.site/wp-content/uploads/2020/07/the-lord-of-the-rings-hobbit-house-entrance.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundBlendMode: "multiply",
        }}
      >
        {/* área de atuação */}
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "80%",
            borderRadius: "10px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[900],
          }}
        >
          <MusicPlayer
            styleSheet={{
              color: appConfig.theme.colors.neutrals[200],
              backgroundColor: appConfig.theme.colors.neutrals[900],
              padding: "3px 10px",
              borderRadius: "1000px",
            }}
          />
        </Box>
      </Box>
    </>
  );
}
