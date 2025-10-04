import "lite-youtube-embed";
import "lite-youtube-embed/src/lite-yt-embed.css";

// TODO: add props type
const LiteYoutubeEmbed = (props: unknown) => {
  // @ts-expect-error - TODO: add React intrinsic types
  return <lite-youtube {...props}></lite-youtube>;
};

export default LiteYoutubeEmbed;
