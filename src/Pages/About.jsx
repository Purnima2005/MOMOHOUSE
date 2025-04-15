import Chef from "../assets/Home/Chef.png";
import Cooking from "../assets/Home/Cooking.png";
import Plate from "../assets/Home/Plate.png";
import Annyeong from "../assets/Home/Annyeong.png";
import Fried from "../assets/Home/Fried.png";
import Ann from "../assets/Home/Ann.png";
import Rose from "../assets/Home/Rose.png";
import Three from "../assets/Home/Three.png";
import Quote from "../assets/Home/Quote.png";
import Making from "../assets/Home/Making.png";

function About() {
  return (
    <div>
      <div className="flex items-center pl-10 ml-30">
        <div className="w-[50%]">
          <p className="text-3xl text-teal-800  font-bold ml-20">
            {" "}
            <span className="italic">About Us </span>
          </p>
          <br></br>
          <br></br>
          <p className="text-1xl text-gray-500 ml-20">WE PRIDE OURSELF ON</p>
          <br></br>
          <h1 className="text-4xl font-bold ml-20">
            <span className="text-orange-600">Our authentic momo recipes </span>
            <br></br>
            passed down through <br></br> generations
          </h1>
        </div>
        <div className="flex items-center">
          <div className="h-[20%] pt-32 flex items-center justify-end">
            <img src={Chef} />
          </div>
        </div>
      </div>

      <div className=" mt-20 ">
        <img src={Making} className="w-[100%]" />
      </div>

      <div className="flex  mt-20 ml-65 gap-40">
        <div>
          <p className="text-2xl font-bold mb-10">
            Our momos are
            <span className="text-orange-600">
              {" "}
              made
              <br /> with love
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing
            <br /> elit. Molestias error distinctio quasi dignissimos
            <br /> impedit itaque asperiores cupiditate architecto
            <br /> minus quod laborum amet iure quas saepe.
          </p>
        </div>

        <div className="flex-item-center">
          <div className="h-[20%]   justify-end">
            <img src={Cooking} />
            <img
              src={Plate}
              className="h-40 relative bottom-24  right-[26%] "
            />
          </div>
        </div>
      </div>

      <div className="flex   ml-65   mt-20 gap-40">
        <div className="h-[20%] justify-center">
          <img src={Annyeong} />
          <img src={Fried} className="h-40 relative bottom-24  left-[75%]  " />
        </div>
        <div className="flex-item-end ">
          <p className="text-2xl relative -top-3 font-bold ">
            Taste the difference with <br />
            <span className="text-orange-600"> our handcrafted momos</span>
          </p>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing
            <br /> elit. Molestias error distinctio quasi dignissimos
            <br /> impedit itaque asperiores cupiditate architecto
            <br /> minus quod laborum amet iure quas saepe.
          </p>
        </div>
      </div>

      <div className="flex  ml-65  gap-40">
        <div>
          <p className="text-2xl h-[40%]  font-bold ">
            Our momos are the
            <br /> perfect
            <span className="text-orange-600">
              {" "}
              blend of tradition
              <br /> <span className="text-black">and</span> innovation
            </span>
          </p>
          <p className="relative -top-28 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing
            <br /> elit. Molestias error distinctio quasi dignissimos
            <br /> impedit itaque asperiores cupiditate architecto
            <br /> minus quod laborum amet iure quas saepe.
          </p>
        </div>

        <div className="flex-item-center">
          <div className="h-[20%] justify-end">
            <img src={Ann} />
            <img
              src={Rose}
              className="h-40 relative bottom-24  right-[26%] "
            />
          </div>
        </div>
      </div>
      <div className="flex mt-20">
        <img className="w-1000" src={Quote} />
      </div>

      <div className="flex flex-col items-center justify-center mb-10 mt-20 ">
        <h1 className="text-3xl font-bold">
          Meet The <span className="text-orange-600">Team</span>
        </h1>
        <p className="text-teal-800 text-2xl font-semibold pb-4">
          Our talented members who delivers only the best results
        </p>
        <div className="flex flex-row border gap-4">
          <img src={Three} />
        </div>
      </div>
    </div>
  );
}

export default About;
