import React from "@astrojs/react";

const YoutubeVideo = ({
  videoId,
  ...videoProps
}: {
  videoId: string;
  // videoProps;
}) => {
  return (
    <iframe
      className="aspect-video w-full"
      src={`https://www.youtube.com/embed/${videoId}?${new URLSearchParams(
        videoProps
      ).toString()}`}
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeVideo;
