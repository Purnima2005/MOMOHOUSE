import AjuNice from "../assets/Home/AjuNice.png";
import Dine from "../assets/Home/Dine.png";
import Party from "../assets/Home/Party.png";
import QR from "../assets/Home/QR.png";
import Group from "../assets/Home/Group.png";
import Cap from "../assets/Home/Cap.png";
import NavigateToContact from "../Components/NavigateToContact";

const Services = () => {
  return (
    <div>
      <div className='flex items-center pl-10 '>
        <div className="w-[50%]">
          <p className="text-3xl text-teal-800  font-bold ml-25"> <span className="italic">Our Services </span></p><br></br><br></br>
          <p className='text-2xl text-gray-500 ml-25'>Knowing Our Customers Needs</p><br></br>
          <h1 className='text-4xl font-bold ml-25'><span className='text-orange-600'>We are more than just momos. </span>
            We are a full-service dining experience. <br />
          </h1>

        </div>
        <div className='flex items-center ml-50'>
          <div className="h-[20%] pt-32 flex items-center justify-end">
            <img src={AjuNice} />
          </div>
        </div>
      </div>
      <div className=' flex justify-center items-center mt-20'>
        <img className="h-150" src={Dine} />
      </div>
      <div>
        <div className='flex items-center pl-10 ml-50 mr-20 mt-20 gap-40'>
          <div className=' '>
            <img src={Party} />
            <p className="text-3xl text-black-800 font-bold">Private Party </p><br />
            <p className=' text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing<br /> elit. Est, dolore pariatur quis<br /> voluptatum ab laboriosam nostrum quod<br /> officia obcaecati quae explicabo velit id.</p><br />
            <h1 className='  text-2xl font-bold'><span className='text-teal-800'>Scan the QR Code. </span><br />
              <p className=' font-thin text-gray-500'>You can also check about the service. </p>
              <img src={QR} className='pl-[68%] relative bottom-20' />
            </h1>

          </div>
          <div className='flex items-center '>
            <div className="h-[20%]  flex items-center justify-end">
              <img src={Group} />
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center pl-10  ml-50 mr-20 mt-10 gap-40'>
        <div className="h-[20%]  flex items-center justify-end">
          <img src={Group} />
        </div>
        <div className=''>
          <img src={Cap} />
          <p className="text-3xl text-black-800 font-bold">Catering</p><br />
          <p className=' text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing<br /> elit. Est, dolore pariatur quis<br /> voluptatum ab laboriosam nostrum quod<br /> officia obcaecati quae explicabo velit id.</p><br />
          <h1 className='  text-2xl font-bold'><span className='text-teal-800'>Scan the QR Code. </span><br />
            <p className=' font-thin text-gray-500'>You can also check about the service. </p>
            <img src={QR} className='pl-[68%] relative bottom-20' />
          </h1>
        </div>
      </div>
      <div className='flex  flex-col items-center justify-center mt-20 ml-20 mr-20 mb-10 h-64 rounded-xl bg-slate-100'>
        <h1 className='pb-10 text-3xl font-extrabold'>Got any Quiries ?</h1>
        <p className='text-xl text-gray-600'>If you have any quiries send us a message. Our friendly Team would love to hear from you.</p><br />
        <NavigateToContact />
      </div>
    </div>
  )
}

export default Services;