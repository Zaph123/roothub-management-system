import { useFormContext } from "react-hook-form";

const Payment = () => {
  const {
    register,
    formState: { errors },
    getValues
  } = useFormContext();

  const formData = getValues()

  return (
    <div className="w-full space-y-9">
      <div className="px-12 py-6 textleft border-b-2 border-b-white">
        <h1 className="text-4xl font-bold">Payment Section</h1>
        {/* <p className="text-[#999] text-[0.9rem]">
          Please provide your details👇
        </p> */}
      </div>
      <div className="space-y-10 px-12 md:space-y-2 w-full">
      <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
          <label
            htmlFor="selected-trainee-course"
            className="flex w-96 items-center justify-start text-primary pointer-events-none"
          >
            <span>Selected Course</span>
          </label>
          <div className="relative w-full h-auto">
            <input
              name="selected-trainee-course"
              id="selected-trainee-course"
              type="text"
              disabled
              value={formData?.traineeCourse}
              className={`h-[40px] w-full peer rounded-[10px] ${
                errors.email ? "outline-red-500" : ""
              } focus:outline-primary border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem] text-primary`}
              // {...register("traineeCourse")}
            />
            {/* {errors.traineeCourse && (
              <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
                {errors.traineeCourse?.message}
              </span>
            )} */}
          </div>
        </div>
      <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
          <label
            htmlFor="course-fee"
            className="flex w-96 items-center justify-start text-primary pointer-events-none"
          >
            <span>Course Fee</span>
          </label>
          <div className="relative w-full h-auto">
            <input
              name="course-fee"
              id="course-fee"
              type="text"
              readOnly
              value="₦150,000"
              className={`h-[40px] w-full peer rounded-[10px] ${
                errors.email ? "outline-red-500" : ""
              } focus:outline-primary border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem] text-primary`}
              {...register("courseFee", {value: "₦150,000"})}
            />
            {/* {errors.courseFee && (
              <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
                {errors.courseFee?.message}
              </span>
            )} */}
          </div>
        </div>
      <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
          <label
            htmlFor="payment-plan"
            className="flex w-96 items-center justify-start text-primary pointer-events-none"
          >
            <span>Payment Plan</span>
          </label>
          <div className="relative w-full h-auto">
            <select
              name="payment-plan"
              id="payment-plan"
              className={`h-[40px] w-full peer rounded-[10px] cursor-pointer ${
                errors.email ? "outline-red-500" : ""
              } focus:outline-primary border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem] text-primary`}
              {...register("paymentPlan")}
            >
              <option value="monthly">Monthly</option>
              </select>
            {errors.paymentPlan && (
              <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
                {errors.paymentPlan?.message}
              </span>
            )}
          </div>
        </div>
      <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
          <label
            htmlFor="date-of-first-payment"
            className="flex w-96 items-center justify-start text-primary pointer-events-none"
          >
            <span>Date of First Payment</span>
          </label>
          <div className="relative w-full h-auto">
            <input
              name="date-of-first-payment"
              id="date-of-first-payment"
              type="Date"
              className={`h-[40px] w-full peer rounded-[10px] cursor-pointer ${
                errors.email ? "outline-red-500" : ""
              } focus:outline-primary border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem] text-primary`}
              {...register("dateOfFirstPayment")}
            />
            {errors.dateOfFirstPayment && (
              <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
                {errors.dateOfFirstPayment?.message}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
