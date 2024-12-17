import { useFormContext } from "react-hook-form";

const Personal = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // const [showPasswd, setShowPasswd] = useState(false);
  // const [showPasswd2, setShowPasswd2] = useState(false);

  return (
    <div className="w-full space-y-9">
      <div className="px-12 py-6 textleft border-b-2 border-b-white">
        <h1 className="text-4xl font-bold">Personal Details</h1>
        <p className="text-[#999] text-[0.9rem]">
          Please provide your details👇
        </p>
      </div>
      <div className="space-y-10 px-12 md:space-y-2 w-full">
      <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
        <label
          htmlFor="fullName"
          className="flex w-32 flex-shrink-0 items-center justify-start text-[#5b5b5b] pointer-events-none"
        >
          <span>Full Name</span>
        </label>
        <div className="relative w-full h-auto">
          {/* <FaUser className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
          <input
            type="text"
            name="fullName"
            id="fullName"
            className={`h-[40px] w-full ${errors.fullName ? "outline-red-500" : ""} peer rounded-[10px] focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem]`}
            placeholder="e.g John Doe"
            {...register("fullName", {
              required: "please input your Full Name",
            })}
          />
        {errors.fullName && (
          <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
            {errors.fullName?.message}
          </span>
        )}
        </div>
      </div>
      <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
        <label
          htmlFor="email"
          className="flex w-32 flex-shrink-0 items-center justify-start text-[#5b5b5b] pointer-events-none"
        >
          <span>Email</span>
        </label>
        <div className="relative w-full h-auto">
          {/* <FaEnvelope className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
          <input
            type="email"
            name="email"
            id="email"
            className={`h-[40px] w-full peer rounded-[10px] ${errors.email ? "outline-red-500" : ""} focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem]`}
            placeholder="e.g johndoe@gmail.com"
            {...register("email", {
              required: "Invalid email",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Must iclude an '@' symbol";
                }
                return true;
              },
            })}
          />
        {errors.email && (
          <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
            {errors.email?.message}
          </span>
        )}
        </div>
      </div>
      <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
        <label
          htmlFor="phoneNumber"
          className="flex w-32 flex-shrink-0 items-center justify-start text-[#5b5b5b] pointer-events-none"
        >
          <span>Phone Number</span>
        </label>
        <div className="relative w-full h-auto">
          {/* <FaUser className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className={`h-[40px] w-full peer rounded-[10px] ${errors.phoneNumber ? "outline-red-500" : ""} focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem]`}
            placeholder="e.g 0803*******"
            {...register("phoneNumber")}
          />
        {errors.phoneNumber && (
          <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
            {errors.phoneNumber?.message}
          </span>
        )}
        </div>
      </div>
      {/* <div className="input-box relative input-box w-full h-auto gap-3 px-[10px] flex items-center justify-between md:flex-col md:items-start">
        <label
          htmlFor="passwd"
          className="flex w-32 flex-shrink-0 items-center justify-start text-[#5b5b5b] pointer-events-none"
        >
          <span>Password</span>
        </label>
        <div className="relative w-full h-auto">
          <input
            onBlur={() =>
              passwd === "" ? setShowPasswd(false) : setShowPasswd(true)
            }
            type={showPasswd ? "text" : "password"}
            name="passwd"
            id="passwd"
            className={`w-full h-[40px] peer rounded-[10px] ${errors.password ? "outline-red-500" : ""} focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem]`}
            placeholder="********"
            {...register("password")}
          />
          <div
            onClick={() => setShowPasswd(!showPasswd)}
            className="absolute top-3 right-3 cursor-pointer text-[#858585]"
          >
            {showPasswd ? (
            <FiEye />
          ) : (
            <FiEyeOff />
          )}
          </div>
        {errors.password && (
          <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
            {errors.password?.message}
          </span>
        )}
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Personal;
