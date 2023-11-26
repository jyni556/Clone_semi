const tossvideo = () => {
  return (
    <video
      className=" position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;"
      src="https://static.toss.im/assets/homepage/next-pd-2022/looping_film.mp4"
      autoplay
      muted
      loop
    ></video>
  );
};

export default tossvideo;
