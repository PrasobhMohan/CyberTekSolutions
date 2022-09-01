export const Banner2 = () => {
  return (
    <video className="w-full" autoPlay={true} loop={true} muted={true}>
      <source
        className="aspect-video"
        src={"./videos/uwvideo.mp4"}
        type="video/mp4"
      />
    </video>
  );
};
