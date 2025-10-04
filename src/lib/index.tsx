import "lite-youtube-embed";
import "lite-youtube-embed/src/lite-yt-embed.css";

interface Props {
  videoid: string;
  playlabel?: string;
  title?: string;
}

const LiteYoutubeEmbed = (props: Props) => {
  // @ts-expect-error - TODO: add React intrinsic types
  return <lite-youtube {...props}></lite-youtube>;
};

export default LiteYoutubeEmbed;
