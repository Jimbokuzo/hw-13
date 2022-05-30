/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";

const ResetCss = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
      body {
        margin: auto;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        max-width: 1500px;
        width: 100%;
        margin-top: 30px;
        padding: 10px;
        background: rgb(39, 39, 39);
      }
      ::-webkit-scrollbar {
        width: 8px;
        height: 5px;
        background-color: rgb(39, 39, 39);
      }
      ::-webkit-scrollbar-thumb {
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        box-shadow: 0 0 5px 0px rgb(255, 255, 255);
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: rgb(211, 211, 211);
      }
      .header {
        display: flex;
        justify-content: center;
        margin: auto;
      }
      h1 {
        margin: auto;
        cursor: default;
        color: rgb(194, 194, 194);
        font-size: 72px;
        font-weight: bold;
        transition: 0.5s;
        padding-bottom: 50px;
      }

      ul,
      ol {
        margin: 0;
        padding: 0;
      }

      li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);

export default ResetCss;
