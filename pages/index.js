import appConfig from "../config.json";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";
import {useRouter} from 'next/router'
import MusicPlayer, {videoURL} from "./music.js"

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

export default function PaginaInicial() {
  //O useState, basicamente é uma variável, e a função que irá alterar a mesma.
  const [username, setUsername] = React.useState("");

  //Para usar o sistema de roteamento é necessário importa-lo antes: 
  const router = useRouter();

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
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[900],
          }}
        >
          
          {/* Formulário */}
          <Box
            as="form"

            onSubmit={(eventInfo)=>{
              eventInfo.preventDefault()
              router.push('/chat')
              
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              value={username}
              onChange={(event) => {
                const valueUsername = event.target.value;
                setUsername(valueUsername);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[100],
                  mainColor: appConfig.theme.colors.neutrals[999],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            
            <Button
            
              className="entrar"
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
            
            
            
          </Box>
          
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            
            
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              
              src={`https://github.com/${username}.png`}
              
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          
          
          {/* Photo Area */}
          
        </Box>
        
        <MusicPlayer 
        styleSheet={{
          color: appConfig.theme.colors.neutrals[200],
          backgroundColor: appConfig.theme.colors.neutrals[900],
          padding: "3px 10px",
          borderRadius: "1000px",
        }}
        />
        <Button
              onClick={()=>{
                router.push("./forum")
              }}
              className="forum"
              type="submit"
              label="Forum"
              // fullWidth
              display="flex"
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[100],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
              
            />
        
        
      </Box>
      
      
      
    </>
  );
}
