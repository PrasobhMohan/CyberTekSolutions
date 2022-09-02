export interface IBanner1Props {
  src: string;
  children?: React.ReactNode;
}
export const Banner1 = ({ children, src }: IBanner1Props) => {
  return (
    <div className="relative">
      <video
        className="w-full aspect-video"
        autoPlay={true}
        loop={true}
        muted={true}
        src={src}
      />
      {children}
    </div>
  );
};
