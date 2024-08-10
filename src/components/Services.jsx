import services from "../data/services";
const Services = () => {
  return (
    <div className={`pt-5 my-5 md:px-10 px-7`} id="services">
      <div className="gradientTex mb-7">
        <h1 className="text-[#1B99F7] font-semibold text-2xl mt-5">
          Services<span className={`animate-bounce`}>👨🏼‍💻</span>
        </h1>
        <p className="text-lg">What I bring to the table 😏</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((data, index) => (
          <div
            className="flex flex-col bg-[#1A1A1A] p-7 rounded-xl gap-1"
            key={index}
          >
            <img className="max-w-[4.3rem] mb-3" src={data.image} alt="" />
            <p className="font-bold text-2xl">{data.name}</p>

            <p className="font-light">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
