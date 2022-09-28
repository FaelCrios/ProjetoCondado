import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React, { useState } from "react";
import appConfig from "../config.json";
import { createClient } from "@supabase/supabase-js";
import MusicPlayer, {videoURL} from "./music.js"

//Importação do banco de dados || Como fazer AJAX
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvd2FkbnFzZG5pYnZvYXl0bmVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQyOTg0NDMsImV4cCI6MTk3OTg3NDQ0M30.iQ4ON65l_1P7B_I8fPxblmrHbxdpprl-9k2uY6w2bp8";
const SUPABASE_URL = "https://aowadnqsdnibvoaytner.supabase.co";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function ChatPage() {
  const [message, setMessage] = React.useState("");
  const [chat, setChat] = React.useState([]);

  //Usado para ajudar no uso padrão
  React.useEffect(() => {
    supabaseClient
      .from("mensagens")
      .select("*")
      .order("id", { ascending: false })
      .then(({ data }) => {
        setChat(data);
      });
  }, []);

  //Envia mensagem para o chat
  function handleNovaMensagem(NewMessage) {
    const message = {
      from: "faelcrios",
      TextMessage: NewMessage,
      //id: chat.length,
    };

    //Manda mensagem para o Banco de dados
    supabaseClient
      .from("mensagens")
      .insert([message])
      .then(({ data }) => {
        setChat([
          data[0],
           ...chat
          ]);
      });
      setMessage("");
  }

  function enviaMensagem(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleNovaMensagem(message);
    }
  }
  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[999],
        backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/07/the-lord-of-the-rings-hobbit-house-entrance.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList MessageList={chat} />

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={message}
              onChange={(event) => {
                const TextMessage = event.target.value;
                setMessage(TextMessage);
              }}
              onKeyPress={(event) => {
                enviaMensagem(event);
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            
          </Box>
          <MusicPlayer/>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}
function MessageList(props) {
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "scroll",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      {props.MessageList.map((message) => {
        return (
          <Text
            key={message.id}
            tag="li"
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "8px",
              }}
            >
              <Image
                styleSheet={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                
                src={`https://github.com/${message.from}.png`}
              />
              <Text tag="strong">{message.from}</Text>
              <Text
                key={message.id}
                styleSheet={{
                  fontSize: "10px",
                  marginLeft: "8px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {message.TextMessage}
          </Text>
          
        );
      })}
    </Box>
    
  );
}
