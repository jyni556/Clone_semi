const Header = () => {
  return (
    <div class="flex flex-row">
      <div class="basis-1/5 bg-black">
        <img
          class="max-w-6 max-h-6 ml-auto mt-4 flex justify-end items-center"
          src="https://static.toss.im/icons/svg/logo-toss-white.svg"
          alt="toss logo"
        ></img>
      </div>
      <div class="basis-3/5 bg-black padding:40px h-16 flex justify-end items-center  gap-8  text-s text-white font-semibold sticky top-0">
        <div>일정</div>
        <div>챌린지 안내</div>
        <div>인터뷰 안내</div>
        <div>직무 안내</div>
        <div class="mr-20">자주 묻는 질문</div>
      </div>
      <div class="basis-1/5 bg-black">03</div>
    </div>
  );
};

export default Header;
