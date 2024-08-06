import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <div className="w-[1095px]">
        <div id="imgContainer" className="h-[634px] relative">
          <Image
            src="/images/Banner.jpg"
            alt="banner"
            width={900}
            height={800}
            priority
            className="h-[100%] w-[100%]"></Image>
          <div
            id="text"
            className="absolute bottom-0 right-0 p-[40px] text-right">
            <h1 className="text-[48px] font-bold text-white">
              白頭翁 (Chinese bulbul)
            </h1>
            <p className="text-[18px] text-white">
              又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約
              8~10 年。
            </p>
          </div>
        </div>

        <div id="textContent" className="h-[367px] bg-[#DCCCBC] flex">
          <div className="flex gap-[20px] p-[50px]">
            <div className="w-[3rem] h-fit relative">
              <h2 className="text-[36px] font-bold w-[100%]">外觀</h2>
              <Image
                src="/images/裝飾.png"
                alt="banner"
                width={900}
                height={800}
                priority
                className="w-[50%] absolute bottom-0 right-[-5px]"></Image>
            </div>
            <p className="w-[200px]">
              白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。
            </p>
          </div>
          <div className="flex gap-[20px] p-[50px]">
            <div className="w-[3rem] h-fit relative">
              <h2 className="text-[36px] font-bold w-[100%]">棲地</h2>
              <Image
                src="/images/裝飾.png"
                alt="banner"
                width={900}
                height={800}
                priority
                className="w-[50%] absolute bottom-0 right-[-5px]"></Image>
            </div>
            <p className="w-[200px]">
              白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。(後頭部)更潔白，所以又叫「白頭翁」。
            </p>
          </div>
          <div className="flex gap-[20px] p-[50px]">
            <div className="w-[3rem] h-fit relative">
              <h2 className="text-[36px] font-bold w-[100%]">食性</h2>
              <Image
                src="/images/裝飾.png"
                alt="banner"
                width={900}
                height={800}
                priority
                className="w-[50%] absolute bottom-0 right-[-5px]"></Image>
            </div>
            <p className="w-[200px]">
              以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
