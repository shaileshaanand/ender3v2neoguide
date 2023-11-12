import React from "@astrojs/react";
import { boolean } from "astro/zod";

const YoutubeVideo = ({
  videoId,
  vertical = false,
  ...videoProps
}: {
  videoId: string;
  vertical?: boolean;
  // videoProps;
}) => {
  return (
    <iframe
      className={`${
        vertical ? "aspect-vertical-video" : "aspect-video"
      } w-full`}
      src={`https://www.youtube.com/embed/${videoId}?${new URLSearchParams(
        videoProps,
      ).toString()}`}
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeVideo;
