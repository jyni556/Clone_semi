import tossvideo from "./tossvideo"; // eslint-disable-line no-unused-vars

const A = () => {
  return (
    <>
      <div className="z-20 bg-black flex flex-col text-center text-6xl font-bold">
        <p class="text-gray-300">토스의 새로운 채용 전형</p>
        <p class="text-white mt-6">프러덕트 디자이너 챌린지</p>
        <p class="text-gray-500 text-2xl mt-8">
          본 전형의 접수가 마감 되었습니다. 이후 지원은 토스 수시 채용을
          이용해주시기 바랍니다.
        </p>
        <div class="flex items-center justify-center h-auto w-screen mb-12 overflow-hidden">
          <div class="absolute z-10 p-5 text-2xl text-black bg-gray-300 rounded-xl">
            채용홈페이지 바로가기!
          </div>
          <tossvideovideo />
        </div>
      </div>
    </>
  );
};

export default A;
