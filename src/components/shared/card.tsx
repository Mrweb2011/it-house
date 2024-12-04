import Phyton from "../imgs/phyton.png";
import MsOffice from "../imgs/ms office.png";
import KompyuterSavodxonligi from "../imgs/kompyuter savodxonligi.png";
import KiberXavfsizlik from "../imgs/Kiber xavfsizlik.png";
import WebDasturlash from "../imgs/web dasturlash.png";
import English from "../imgs/Engish.png";
import Slider from "react-slick";

function Card() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="flex justify-center mt-14">
        <div className="flex items-center gap-28">
          <div className="column">
            <h1 className="font-bold text-3xl">
              Mashhur Kurslarni Ko'rib Chiqing
            </h1>
            <h4 className="font-semibold text-gray-500">
              Hozirgi kunda talab yuqori bo'lgan IT kurslari.
            </h4>
          </div>
          <div className="flex">
            <button className="bg-gray-200 px-5 py-2 rounded-3xl font-semibold ml-1">
              Hammasi
            </button>
            <button className="bg-gray-200 px-5 py-2 rounded-3xl font-semibold ml-1">
              Eng yangi
            </button>
            <button className="bg-gray-200 px-5 py-2 rounded-3xl font-semibold ml-1">
              Eng past narx
            </button>
            <button className="bg-gray-200 px-5 py-2 rounded-3xl font-semibold ml-1">
              Eng yuqori narx
            </button>
          </div>
        </div>
      </div>
      <div className="gap-3 px-32">
        <Slider {...settings} className="flex gap-10">
          <div className="border-2 rounded-2xl">
            <img className="relative w-full h-72 -top-1" src={Phyton} alt="" />
            <h1 className="font-bold text-3xl px-3">Phyton</h1>
            <hr className="my-3 mx-3" />
            <div className="flex ">
              <h1 className="font-semibold px-3">
                Django, Postgresql, Djangorest framework, JS ,...
              </h1>
              <h1 className="text-gray-500 text-xs font-semibold">
                <s>
                  1,200,000
                  <br />
                  so'm
                </s>
              </h1>
              <h1 className="font-semibold px-3">
                1,000,000
                <br />
                so'm
              </h1>
            </div>
          </div>
          <div className="border-2 rounded-2xl">
            <img className="w-full h-72" src={MsOffice} alt="" />
            <h1 className="font-bold text-3xl mx-2">Office dasturlari</h1>
            <hr className="my-3 mx-3" />
            <div className="flex gap-7">
              <h1 className="font-semibold mx-3">
                Ms Word, Ms Exsel & Ms PowerPoint
              </h1>
              <div className="flex gap-2">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>1,200,000 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3">1,000,000 so'm</h1>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-2xl">
            <img className="w-full h-72" src={KompyuterSavodxonligi} alt="" />
            <h1 className="font-bold text-3xl mx-2">Kompyuter savodxonligi</h1>
            <hr className="my-3 mx-3" />
            <div className="flex gap-48">
              <h1 className="font-semibold mx-3">Kompyuterni anglaymiz</h1>
              <div className="flex gap-2">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>0 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3">500,000 so'm</h1>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-2xl">
            <img className="w-full h-72" src={English} alt="" />
            <h1 className="font-bold text-3xl mx-2">English & IT</h1>
            <hr className="my-3 mx-3" />
            <div className="flex gap-60">
              <h1 className="font-semibold mx-3">Grammar & Speaking</h1>
              <div className="flex gap-2">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>0 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3 my-2">0 so'm</h1>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-2xl">
            <img className="w-full h-72" src={WebDasturlash} alt="" />
            <h1 className="font-bold text-3xl mx-2">Web Dasturlash</h1>
            <hr className="my-3 mx-3" />
            <div className="flex gap-40">
              <h1 className="font-semibold mx-3">Frontend (React JS)</h1>
              <div className="flex gap-2">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>3,000,000 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3 my-2">2,500,000 so'm</h1>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-2xl">
            <img className="w-full h-72" src={KiberXavfsizlik} alt="" />
            <h1 className="font-bold text-3xl mx-2">Kiberxavfsizlik</h1>
            <hr className="my-3 mx-3" />
            <div className="flex gap-24">
              <h1 className="font-semibold mx-3">
                C# dasturlash tiliga kirish
              </h1>
              <div className="flex gap-2">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>3,000,000 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3">2,500,000 so'm</h1>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Card;
