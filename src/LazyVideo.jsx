const LazyVideo = ({ src, type = "video/mp4", width = "100%" }) => {
  return (
    <div style={{ width }}>
      <video
        preload="none"
        className="rounded-xl"
        autoPlay
        loop
        muted
        width="100%"
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LazyVideo;
