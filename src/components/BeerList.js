import React from "react";

export const BeerList = () => {
  return (
    <div>
      <div className="flex items-center flex-col w-full">
        <h1 className="text-red-600 font-bold text-[24px]">ПИВО</h1>
        <p className="text-white">Татвар ороогүй</p>
        <div className="text-white w-full">
          <div className="1 flex justify-between w-full">
            <p>Гэрийн Пиво</p>
            <p className="items-center flex">$6.20</p>
          </div>
          <div className="2 flex justify-between w-full">
            <div>
              <p>Дээд зэрэглэлийн шар айраг</p>
              <p className="text-[10px]">Alexander Keith, Moosehead</p>
            </div>
            <p className="items-center flex">$7.08</p>
          </div>
          <div className="3 flex justify-between w-full">
            <div>
              <p>Импортын шар айраг</p>
              <p className="text-[10px]">Corona, Heineken</p>
            </div>
            <p className="items-center flex">$7.53</p>
          </div>
          <div className="4 flex justify-between w-full">
            <div>
              <p>Tall Boys</p>
              <p className="text-[10px]">Sapporo, Stella Artois</p>
            </div>
            <p className="items-center flex">$15.05</p>
          </div>
          <div className="5 flex justify-between w-full">
            <div>
              <p>Гар урлалын шар айраг</p>
              <p className="text-[10px]">
                Flying Monkeys Juicy Ass IPA, 473 mL Alcohol/Vol 6.5%,
              </p>
            </div>
            <p className="items-center flex">$0.44</p>
          </div>
          <div className="5 flex justify-between w-full">
            <div>
              <p>Budweiser Zero</p>
              <p className="text-[10px]">Non-Alcoholic Beer, 355 mL</p>
            </div>
            <p className="items-center flex">$0.44</p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col w-full">
        <h1 className="text-red-600 font-bold text-[24px]">Хөргөгч</h1>
        <p className="text-white">Татвар ороогүй</p>
        <div className="text-white w-full">
          <div className="1 flex justify-between w-full">
            <div>
              <p>Mөс</p>
              <p className="text-[10px]">330 mL can, 5.0%</p>
            </div>
            <p className="items-center flex">$6.20</p>
          </div>
          <div className="2 flex justify-between w-full">
            <div>
              <p>Whiteclaw</p>
              <p className="text-[10px]">473mL 5% (Lime, Raspberry)</p>
            </div>
            <p className="items-center flex">$7.08</p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col w-full">
        <h1 className="text-red-600 font-bold text-[24px]">Сидр</h1>
        <p className="text-white">Татвар ороогүй</p>
        <div className="text-white w-full">
          <div className="1 flex justify-between w-full">
            <div>
              <p>Somersby</p>
              <p className="text-[10px]">Apple, Pear</p>
            </div>
            <p className="items-center flex">$6.20</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};
