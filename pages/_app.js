import MusicPlayer from "./music";

function GlobalStyle() {
  return (
    
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      * video {
        width: 4px;
        display: none;
      }

      * Button {
        padding: 10px
      }

      body {
        font-family: "Open Sans", sans-serif;
      }

      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      },
    `}</style>
  );
}

export default function MyApp({ Component, pageProps }) {
  //componente que rodará em rodas as páginas..
  //Nativo do next.js
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      
    </>
  );
}
