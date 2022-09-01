import uwvideo from "../static/media/uwvideo.mp4";

export const Banner2 = () => {
  return (
    <video className="w-full" autoPlay={true} loop={true} muted={true}>
      <source className="aspect-video" src={uwvideo} type="video/mp4" />
    </video>
  );
};
