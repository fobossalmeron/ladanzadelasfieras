import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from 'styled-components/macro';
import { ReactComponent as Play } from "./../assets/img/layout/play.svg";

const VideoWrapper = styled.div`
  div:nth-of-type(2) {
    height: auto !important;
  }
  padding-bottom: 53.2%;
  display: block;
  position: relative;
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: black;
  }
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
  width: 40px;
  height: 40px;
  position: absolute;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  z-index: 1;
  cursor: pointer;
  polygon {
    stroke-width: 16px;
  }
`;

function VideoPlayer(props) {
  const still = props.still;
  const [isPlaying, setPlaying] = useState(false);

  function playVideo() {
    setPlaying(true);
  }

  return (
    <VideoWrapper>
      <OverStill
        style={{ backgroundImage: `url(${still})` }}
        onClick={playVideo}
        hide={isPlaying}
      >
        <PlayButton />
      </OverStill>
      <ReactPlayer
        playing={isPlaying}
        url={props.url}
        controls={true}
        style={{ height: "auto !important" }}
        width="100%"
      />
    </VideoWrapper>
  );
}

export default VideoPlayer;
