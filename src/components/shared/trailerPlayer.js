import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled, { css } from "styled-components/macro";
import { ReactComponent as Play } from "assets/img/layout/play.svg";

//52.7 es el de todos menos, desechables tiene una línea negra a la derecha y el trailer está en 1080p

const VideoWrapper = styled.div`
  div:nth-of-type(3) {
    height: auto !important;
  }
  padding-bottom: ${props => props.ratio || "52.7%"};
  display: block;
  position: relative;
  overflow: hidden;
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: black;
  }
`;

const Fader = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  z-index: 2;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.2);
  transition: 0.4s ease opacity;
  ${props =>
    props.hide &&
    css`
      opacity: 0;
      pointer-events: auto;
      height: calc(100% - 50px);
      margin-bottom: 50px;
    `}
`;

const OverStill = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  transition: 0.4s ease opacity;
  opacity: ${props => (props.hide ? "0" : "1")};
  pointer-events: ${props => (props.hide ? "none" : "auto")};
  background-size: cover;
`;

const PlayButton = styled(Play)`
  width: 35px;
  height: 35px;
  position: absolute;
  left: calc(50% - 17.5px);
  top: calc(50% - 17.5px);
  z-index: 3;
  cursor: pointer;
  polygon {
    stroke-width: 26px;
  }
  opacity: ${props => (props.hide ? "0" : "1")};
`;

function TrailerPlayer(props) {
  const still = props.still;
  const [isPlaying, setPlaying] = useState(false);
  const [showIcon, setIcon] = useState(true);
  const [showStill, setStill] = useState(true);

  function playVideo() {
    setPlaying(true);
    setStill(false);
    hidePlay();
  }
  function restoreVideo(){
    setPlaying(false);
    setStill(true);
    showPlay();
  }

  function showPlay(){
    setIcon(true);
    setPlaying(false);
  }

  function hidePlay(){
    setIcon(false);
    setPlaying(true);
  }

  return (
    <VideoWrapper ratio={props.ratio}>
      <PlayButton onClick={playVideo} hide={!showIcon} />
      <Fader onClick={playVideo} hide={!showIcon} />
      <OverStill
        style={{ backgroundImage: `url(${still})` }}
        hide={!showStill}
      />
      <ReactPlayer
        playing={isPlaying}
        url={props.url}
        controls={true}
        style={{ height: "auto !important" }}
        width="100%"
        onEnded={restoreVideo}
        onPause={showPlay}
        onPlay={hidePlay}
      />
    </VideoWrapper>
  );
}

export default TrailerPlayer;
