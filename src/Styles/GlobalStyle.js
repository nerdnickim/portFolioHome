import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    
    *{
        box-sizing: border-box;
    }
    body{
        background-color: black;
        color: white;
        font-size: 16px;
    }
    
    a{
        text-decoration: none;
        color:white;
        outline: none;
    }
    input:focus{
        outline:none;
    }
    button{
        border: none;
        background:inherit;
        cursor:pointer;

    }
    button:focus{
        outline:none;
    }

    #root{
        width:100%;
        height:100%;
    }

    .slide-forward-enter,
    .slide-forward-exit {
    transition: transform 1000ms ease-out;
    }

    .slide-forward-enter {
    transform: translateY(100%);
    }

    .slide-forward-enter.slide-forward-enter-active {
    transform: translateY(0%);
    }

    .slide-forward-exit {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateY(0%);
    }

    .slide-forward-exit-active {
    transform: translateY(-100%);
    }

    .slide-backward-enter,
    .slide-backward-exit {
    transition: transform 1000ms ease-out;
    }

    .slide-backward-enter {
    transform: translateY(100%);
    }

    .slide-backward-enter.slide-backward-enter-active {
    transform: translateY(0%);
    }

    .slide-backward-exit {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateY(0%);
    }

    .slide-backward-exit-active {
    transform: translateY(-100%);
    }

    
`;
