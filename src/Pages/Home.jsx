import React, { useEffect, useState } from "react";
import OneBg from "../assets/Home/OneBg.png";
import MoMo from "../assets/Home/MoMo.png";
import Circle from "../assets/Home/Circle.png";
import Women from "../assets/Home/Women.png";
import { NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Man from "../assets/Home/Man.png";
import NavigateToMenu from "../Components/NavigateToMenu";
import Nice from "../assets/Home/Nice.png";
import Cap from "../assets/Home/Cap.png";
import Party from "../assets/Home/Party.png";
import Cook from "../assets/Home/Cook.png";

function Home() {
  const [recipes, setrecipes] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setrecipes(response.recipes);
    const filterItems = response.recipes.filter((item) => {
      return item.cuisine == "Italian";
    });
    setFilterProduct(filterItems);
  };

  const filterRecipes = async (country) => {
    const filterItems = recipes.filter((item) => {
      return item.cuisine == country;
    });
    setFilterProduct(filterItems);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div className=" flex justify-end ">
        <div className=" mr-115 mt-30 pt-7">
          <div>
            <p> RESTURANT</p>
            <h1 className=" text-[61px] flex">
              {" "}
              The{" "}
              <span
                style={{ backgroundImage: `url(${OneBg})` }}
                className="    h-20 text-white bg-no-repeat w-48  flex  justify-center items-center text-center "
              >
                {" "}
                #One
              </span>
            </h1>
            <h1 className="text-[61px]">
              Momo <span className="text-orange-700 text-20">Restaurant </span>
            </h1>
            <p>
              {" "}
              More than{" "}
              <span className="text-orange-700  mx-2 text-20">
                {" "}
                20+varieties
              </span>{" "}
              of momo available for you
            </p>
          </div>
          <div className=" mt-5">
            <NavLink
              className=" bg-[#0C6967] p-4 rounded-3xl text-white flex justify-center items-center w-60  gap-2"
              to="/menu"
            >
              {" "}
              <span>Explore Food Menu </span> <IoIosArrowRoundForward />
            </NavLink>
          </div>
        </div>
        <div className=" overflow-hidden relative w-96 flex justify-end ">
          <img className="h-52 top-14 left-8 absolute" src={MoMo} alt="Momo " />
          <img className="h-96 -mt-5 " src={Circle} alt="circle" />
        </div>
      </div>
      <div className="  flex ">
        <div className=" mt-10  ml-10">
          <img src={Man} className="  w-80 h-96  ml-40 " />
        </div>{" "}
        <div className="w-[50%]   ml-40">
          <h1 className="text-[39px] flex">
            {" "}
            Why Customers{" "}
            <span className="text-orange-700 text-20 flex space-x-1 ">
              {" "}
              Love Us
            </span>{" "}
          </h1>{" "}
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            iure corporis pariatur expedita repellendus, aspernatur tempore!
            Ipsum saepe unde qui? Dolore quidem voluptatibus culpa dolor
            aspernatur necessitatibus odit inventore. Nulla?
          </p>
          <div className=" mt-5">
            <NavLink
              className=" bg-[#0C6967] p-4 rounded-3xl text-white flex justify-center items-center w-60 gap-2 "
              to="/menu"
            >
              {" "}
              <span>Explore Our Story </span> <IoIosArrowRoundForward />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="  text-center ">
        <div>
          <h1 className=" text-[39px]">
            Our <span className="text-orange-700 text-20   ">Most love </span>{" "}
            Receips
          </h1>
          <p className="text=[20px]">
            Browse through a varieties of recipes with fresh ingredients
            selected only from the best places
          </p>
        </div>
        <div className=" text-center space-x-2 p-2 ">
          <button
            onClick={() => {
              filterRecipes("Italian");
            }}
            className=" border-1 rounded-2xl hover:bg-gray-200 p-1 w-24"
          >
            {" "}
            Italian
          </button>
          <button
            onClick={() => {
              filterRecipes("Indian");
            }}
            className=" border-1 rounded-2xl   hover:bg-gray-200 p-1 w-24 "
          >
            {" "}
            Indian
          </button>
          <button
            onClick={() => {
              filterRecipes("Korean");
            }}
            className=" border-1 rounded-2xl  hover:bg-gray-200  p-1 w-24"
          >
            {" "}
            Korean
          </button>
          <div className=" ">
            <div>
              {filterProduct.length > 0 ? (
                <div className="flex  flex-wrap justify-center gap-5 p-5 px-14  ">
                  {filterProduct.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="shadow-2xl  shadow-gray-800   rounded-2xl   w-52  h-52  flex  justify-center flex-col  items-center "
                      >
                        <img
                          className="h-32 rounded-2xl  "
                          src={item.image}
                          alt=""
                        />
                        <h1>{item.name}</h1>
                        <p>RS.{item.caloriesPerServing}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className=" w-44 m-auto p-17 ">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className=" flex  justify-center"></div>

          <div className=" flex justify-center">
            <NavigateToMenu />
          </div>
        </div>
        <br></br>

        <div className=" ">
          <div className=" flex justify-center ">
            {" "}
            <h1 className="text-3xl  font-bold text-black-800 ">
              {" "}
              <span className="text-orange-400">We Offer People </span> The
              Service They Want{" "}
            </h1>
          </div>
          <img className="inline-block w- autofill: mt-2" src={Cook} />
          <br></br>
          <br /> <br />
          <div className="  flex justify-center items-center gap-10">
            <div className="  w- h-40  p- 40 ">
              <img src={Nice} className=" ml-51 flex mt-4 " />
              <h1 className=" font-bold">Quality Food</h1>
              <p className=" mt-3 items-center">
                Only the best quality food with top quality products and
                ingrdients
              </p>
            </div>
            <div className="  w- h-40  p- 40 ">
              <img src={Party} className=" ml-45  mt-4 flex " />
              <h1 className=" font-bold"> Private Party</h1>
              <p className=" mt-3">
                Get the best food for all your private parties and gathering
              </p>
            </div>
            <div className="  w- h-40  p- 40 ">
              <img src={Cap} className=" ml-35  mt-4 flex" />
              <h1 className=" font-bold "> Catering</h1>
              <p className=" mt-3">
                Get the best food for any occasions and gatherings
              </p>
            </div>
          </div>
          <br />
          <div className=" flex justify-center">
            <NavigateToMenu />
          </div>
        </div>
        <div className=" flex items-center mt-10  pl-10">
          <div className=" w-[50%] mt-10  ml-40">
            <h1 className="text-4xl  font-bold text-black-800 ">
              200+ <span className="text-orange-600">Happy Customers</span>
            </h1>
            <p className="text-xl font-medium  text-teal-800 mt-4">
              What our customers say about us
            </p>
            <p className="  text-xl text-black Roboto">
              “Only the best momo you can find in the market.
              <br /> Different Varieties of momo to choose from. Will
              <br /> be visiting again soon”{" "}
            </p>
            <h1 className="text-2xl font-bold mt-8 mb-6">Livia Dias</h1>
          </div>
          <div className="flex items-center">
            <div className="h-[15%] pt-32 flex items-center justify-end rounded-md ">
              <img
                src={Women}
                className=" border-2  border-red-500 w-80 h-96 mb-10"
              />
            </div>
          </div>
        </div>

        <div className=" border-2 border-black grid  ">
          <form>
            <div className="  ">
              <div>
                <label htmlFor=" FirstName">First Name</label>
                <input
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="LastName">Last Name </label>
                <input
                  type="text"
                  id="LastName"
                  name="LastName"
                  placeholder="Enter YourLastName"
                  required
                />
              </div>
              <div>
                <label htmlFor="Email">Email </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label className="block mb-1" htmlFor="purpose">
                  What Can We Do For You?
                </label>
                <input
                  type="text"
                  id="purpose"
                  name="purpose"
                  placeholder="Enter your purpose"
                />
              </div>
              <div>
                <label className="block mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block  mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="w-full h-24 p-2 border-2 border-teal-800 rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                className="bg-orange-500 mt-5 hover:bg-orange-600 p-4
             flex items-center gap-x-2   text-white rounded-full"
              >
                {" "}
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8268.267322590047!2d85.32809763592358!3d27.662726918927284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1743050647548!5m2!1sen!2snp"
            width={"1250"}
            height={"450"}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;