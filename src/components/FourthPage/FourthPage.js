import React from "react";

function FourthPage() {
  const imageStyle = 'w-[100px] h-[100px]';
  const imageContainerStyle = 'w-fit h-fit absolute -translate-x-1/2 -translate-y-1/2';
  return (
    <div className="relative w-full h-full ">
      <div className={`${imageContainerStyle} right-8 top-20 z-10`}>
        <img
          className={imageStyle}
          alt="profile"
          src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
        />
      </div>

      <div className={`${imageContainerStyle} top-1/2 left-1/2`}>
        <img
          className={imageStyle}
          alt="profile"
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=Black&facialHairType=BeardMedium&facialHairColor=Black&clotheType=Overall&clotheColor=PastelYellow&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale"
        />
      </div>
      <Circle size={150} />

      <Circle size={250} />

      <Circle size={350} />

      <Circle size={450} />

      <Circle size={550} />

      <Circle size={650} />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xl">
        Connecting...
      </div>
    </div>
  );
}

function Circle({ size }) {
  const style = {
    width: size,
    height: size,
  };
  return (
    <div
      style={style}
      className="absolute rounded-full border-gray-600 border-[1px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    ></div>
  );
}
export default FourthPage;
