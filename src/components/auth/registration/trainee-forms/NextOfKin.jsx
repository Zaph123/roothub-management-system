import { useFormContext } from "react-hook-form";

const NextOfKin = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full space-y-9">
      <div className="px-12 py-6 textleft border-b-2 border-b-white">
        <h1 className="text-4xl font-bold">Next of Kin/Guardian Section</h1>
        {/* <p className="text-[#999] text-[0.9rem]">
          Please provide your details👇
        </p> */}
      </div>
      <div className="space-y-10 px-12 md:space-y-2 w-full">
      <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
        <label
          htmlFor="next-of-kin-name"
          className="flex w-36 flex-shrink-0 items-center justify-start text-[#5b5b5b] pointer-events-none"
        >
          <span>Next of Kin Name</span>
        </label>
        <div className="relative w-full h-auto">
          {/* <FaUser className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
          <input
            type="text"
            name="next-of-kin-name"
            id="next-of-kin-name"
            className={`h-[40px] w-full ${errors.nextOfKinName ? "outline-red-500" : ""} peer rounded-[10px] focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem]`}
            placeholder="e.g John Doe"
            {...register("nextOfKinName", {
              required: "please input your Full Name",
            })}
          />
        {errors.nextOfKinName && (
          <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
            {errors.nextOfKinName?.message}
          </span>
        )}
        </div>
      </div>
      <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
        <label
          htmlFor="next-of-kin-email"
          className="flex w-36 flex-shrink-0 items-center justify-start text-[#5b5b5b] pointer-events-none"
        >
          <span>Email</span>
        </label>
        <div className="relative w-full h-auto">
          {/* <FaEnvelope className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
          <input
            type="email"
            name="next-of-kin-email"
            id="next-of-kin-email"
            className={`h-[40px] w-full peer rounded-[10px] ${errors.nextOfKinEmail ? "outline-red-500" : ""} focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem]`}
            placeholder="e.g johndoe@gmail.com"
            {...register("nextOfKinEmail", {
              required: "Invalid email",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Must iclude an '@' symbol";
                }
                return true;
              },
            })}
          />
        {errors.nextOfKinEmail && (
          <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
            {errors.nextOfKinEmail?.message}
          </span>
        )}
        </div>
      </div>
      <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
        <label
          htmlFor="next-of-kin-phoneNumber"
          className="flex w-36 flex-shrink-0 items-center justify-start text-[#5b5b5b] pointer-events-none"
        >
          <span>Phone Number</span>
        </label>
        <div className="relative w-full h-auto">
          {/* <FaUser className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
          <input
            type="text"
            name="next-of-kin-phoneNumber"
            id="next-of-kin-phoneNumber"
            className={`h-[40px] w-full peer rounded-[10px] ${errors.nextOfKinPhoneNumber ? "outline-red-500" : ""} focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem]`}
            placeholder="e.g 0803*******"
            {...register("nextOfKinPhoneNumber", {
              required: "please input your Full Name",
            })}
          />
        {errors.nextOfKinPhoneNumber && (
          <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
            {errors.nextOfKinPhoneNumber?.message}
          </span>
        )}
        </div>
      </div>
      <div className="input-box relative input-box w-full h-auto gap-3 px-[10px] flex items-center justify-between md:flex-col md:items-start">
        <label
          htmlFor="passwd"
          className="flex w-36 flex-shrink-0 items-center justify-start text-[#5b5b5b] pointer-events-none"
        >
          <span>Relationship</span>
        </label>
        <div className="relative w-full h-auto">
          <select
            name="passwd"
            id="passwd"
            className={`w-full h-[40px] peer rounded-[10px] cursor-pointer ${errors.relationshipWithNextOfKin ? "outline-red-500" : ""} focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem]`}
            placeholder="********"
            {...register("relationshipWithNextOfKin")}
          >
            <option value="">Select Relationship</option>
            <option value="parent">Parent</option>
            <option value="sibling">Sibling</option>
            </select>
        {errors.relationshipWithNextOfKin && (
          <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
            {errors.relationshipWithNextOfKin?.message}
          </span>
        )}
        </div>
      </div>
      </div>
    </div>
  )
}

export default NextOfKin
