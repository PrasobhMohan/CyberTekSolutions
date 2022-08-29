export interface IBanner1Props {
  children?: React.ReactNode;
}
export const Banner1 = ({ children }: IBanner1Props) => {
  return (
    <div className="relative">
      <video
        className="w-full aspect-video"
        autoPlay={true}
        loop={true}
        muted={true}
        src={"./videos/video1.mp4"}
      />
      {children}
    </div>
  );
};
