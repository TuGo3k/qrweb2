import React from 'react'

export const FoodList = () => {
  return (
    <div>
         <div className="flex items-center flex-col w-full">
            <h1 className="text-red-600 font-bold text-[24px]">Food</h1>
            <p className="text-white">Tax Not Included</p>
            <div className="text-white w-full">
              <div className="1 flex justify-between w-full">
                <p>French Fries</p>
                <p className="items-center flex">$6.20</p>
              </div>
              <div className="2 flex justify-between w-full">
                <div>
                  <p>Cajun Fries</p>
                  <p className="text-[10px]">Fries with Cajun seasoning</p>
                </div>
                <p className="items-center flex">$7.08</p>
              </div>
              <div className="3 flex justify-between w-full">
                <div>
                  <p>Chicken Nuggets</p>
                  <p className="text-[10px]">10 pcs</p>
                </div>
                <p className="items-center flex">$7.53</p>
              </div>
              <div className="4 flex justify-between w-full">
                <div>
                  <p>Chicken Wings</p>
                  <p className="text-[10px]">10 pcs</p>
                </div>
                <p className="items-center flex">$15.05</p>
              </div>
              <div className="5 flex justify-between w-full">
                <div>
                  <p>Dipping Sauces</p>
                  <p className="text-[10px]">
                    BBQ, Honey, Mustard, Frank's Hot Sauce, Ketchup, Mayo
                  </p>
                </div>
                <p className="items-center flex">$0.44</p>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col w-full">
            <h1 className="text-red-600 font-bold text-[24px]">Beverages</h1>
            <p className="text-white">Tax Included</p>
            <div className="text-white w-full">
              <div className="1 flex justify-between w-full">
                <div>
                  <p>Soft Drinks</p>
                  <p className="text-[10px]">
                    Coke, Diet Coke, Coke Zero, Nestea, Sprite, Ginger Ale,
                    Dr.Pepper, Ус
                  </p>
                </div>
                <p className="items-center flex">$6.20</p>
              </div>
              <div className="2 flex justify-between w-full">
                <div>
                  <p>Жүүс</p>
                  <p className="text-[10px]">
                    Cranberry, Mango, Orange, Pineapple
                  </p>
                </div>
                <p className="items-center flex">$7.08</p>
              </div>
              <div className="3 flex justify-between w-full">
                <p>Perrier</p>

                <p className="items-center flex">$7.53</p>
              </div>
              <div className="4 flex justify-between w-full">
             
                  <p>Fevertree Ginger Beer</p>
                 
               
                <p className="items-center flex">$15.05</p>
              </div>
              <div className="5 flex justify-between w-full">
                <div>
                  <p>Pitcher of Pop/Juice</p>
                  <p className="text-[10px]">
                  Cranberry, Mango, Orange, Pineapple
                  </p>
                </div>
                <p className="items-center flex">$0.44</p>
              </div>
              <div className="5 flex justify-between w-full">
                <div>
                  <p>Pitcher of Pop/Juice</p>
                  <p className="text-[10px]">
                  Cranberry, Mango, Orange, Pineapple
                  </p>
                </div>
                <p className="items-center flex">$0.44</p>
              </div>
              <div className="5 flex justify-between w-full">
                <div>
                  <p>Red Bull</p>
                  <p className="text-[10px]">
                  Сахартай, Сахаргүй
                  </p>
                </div>
                <p className="items-center flex">$0.44</p>
              </div>
              <div className="5 flex justify-between w-full">
                <div>
                  <p>Jusmine Ногоон цай</p>
                  <p className="text-[10px]">
                  1.5L
                  </p>
                </div>
                <p className="items-center flex">$0.44</p>
              </div>
              <div className="5 flex justify-between w-full">
                <div>
                  <p>Hot Tea</p>
                  <p className="text-[10px]">
                  
                  </p>
                </div>
                <p className="items-center flex">$0.44</p>
              </div>
            </div>
          </div>
    </div>
  )
}
