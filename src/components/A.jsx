import tossvideo from "./tossvideo"; // eslint-disable-line no-unused-vars

const A = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-center items-center text-center text-6xl font-bold">
      <div className="absolute flex flex-col justify-center pb-60">
        <p className="text-gray-300">토스의 새로운 채용 전형</p>
        <p className="text-white mt-6">프러덕트 디자이너 챌린지</p>
        <p className="text-gray-500 text-2xl mt-8">
          본 전형의 접수가 마감 되었습니다. 이후 지원은 토스 수시 채용을
          이용해주시기 바랍니다.
        </p>
      </div>
      <div className="absolute bottom-40 z-10 p-5 text-2xl text-black bg-gray-300 rounded-xl">
        채용홈페이지 바로가기!
      </div>
      <video
        className="absolute bottom-0"
        src="https://static.toss.im/assets/homepage/next-pd-2022/looping_film.mp4"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
};

export default A;
