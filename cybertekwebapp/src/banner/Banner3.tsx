export const Banner3 = () => {
  return (
    <video
      className="opacity-95 object-cover absolute w-auto h-auto min-w-full min-h-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      autoPlay={true}
      loop={true}
      muted={true}
    >
      <source src={"./videos/video2.mp4"} />
    </video>
  );
};
