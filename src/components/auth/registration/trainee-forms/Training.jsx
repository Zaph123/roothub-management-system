import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";

const Training = () => {
  // const [traineeCategory, setTraineeCategory] = useState("");

  const {
    register,
    formState: { errors },
    watch,
    resetField,
    setValue,
  } = useFormContext();

  const traineeCategory = watch("traineeCategory");
  useEffect(() => {
    if (traineeCategory !== "SIWES intern") {
      // Clear SIWES-specific fields
      resetField("SIWESInternSchool");
      resetField("SIWESInternMatricNum");
    }
  }, [traineeCategory, resetField]);

  return (
    <div className="w-full space-y-9">
      <div className="px-12 py-6 textleft border-b-2 border-b-white">
        <h1 className="text-4xl font-bold">Training Section</h1>
        <p className="text-[#999] text-[0.9rem]">
          Please provide your training information
        </p>
      </div>
      <div className="space-y-10 px-12 md:space-y-2 w-full">
        <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
          <label
            htmlFor="select-trainee-category"
            className="flex w-96 items-center justify-start text-primary pointer-events-none"
          >
            <span>Select Trainee category</span>
          </label>
          <div className="relative w-full h-auto">
            {/* <FaUser className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
            <select
              name="select-trainee-category"
              id="select-trainee-category"
              className={`h-[40px] w-full peer rounded-[10px] cursor-pointer ${
                errors.traineeCategory ? "outline-red-500" : ""
              } focus:outline-primary border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem] text-primary`}
              {...register("traineeCategory")}
            >
              <option value="">Select Category</option>
              <option value="regular trainee">Regular Trainee</option>
              <option value="SIWES intern">SIWES Intern</option>
            </select>
            {errors.traineeCategory && (
              <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
                {errors.traineeCategory?.message}
              </span>
            )}
          </div>
        </div>
        <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
          <label
            htmlFor="select-trainee-course"
            className="flex w-96 items-center justify-start text-primary pointer-events-none"
          >
            <span>Select Trainee Course</span>
          </label>
          <div className="relative w-full h-auto">
            {/* <FaUser className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
            <select
              name="select-trainee-course"
              id="select-trainee-course"
              className={`h-[40px] w-full peer rounded-[10px] cursor-pointer ${
                errors.traineeCourse ? "outline-red-500" : ""
              } focus:outline-primary border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem] text-primary`}
              {...register("traineeCourse")}
            >
              <option value="">Select Course</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
            {errors.traineeCourse && (
              <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
                {errors.traineeCourse?.message}
              </span>
            )}
          </div>
        </div>
        <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
          <label
            htmlFor="assign-tutor/session"
            className="flex w-96 items-center justify-start text-primary pointer-events-none"
          >
            <span>Assign Tutor and Sessions</span>
          </label>
          <div className="relative w-full h-auto">
            {/* <FaUser className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
            <select
              name="assign-tutor/session"
              id="assign-tutor/session"
              className={`h-[40px] w-full peer rounded-[10px] cursor-pointer ${
                errors.tutorAndSession ? "outline-red-500" : ""
              } focus:outline-primary border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem] text-primary`}
              {...register("tutorAndSession")}
            >
              <option value="">Select Tutor and Session</option>
              <option value="Tutor: Mr. Akpan Session: 10am - 12pm">
                Tutor: Mr. Akpan Session: 10am - 12pm
              </option>
            </select>
            {errors.tutorAndSession && (
              <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
                {errors.tutorAndSession?.message}
              </span>
            )}
          </div>
        </div>
        <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
          <label
            htmlFor="course-duration"
            className="flex w-96 items-center justify-start text-primary pointer-events-none"
          >
            <span>Select Course Duration</span>
          </label>
          <div className="relative w-full h-auto flex flex-col items-start justify-between gap-3">
            {traineeCategory === "SIWES intern" ? (
              <select
                name="course-duration"
                id="course-duration"
                className={`h-[40px] w-full peer rounded-[10px] cursor-pointer ${
                  errors.traineeCourse ? "outline-red-500" : ""
                } focus:outline-primary border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem] text-primary`}
                {...register("courseDuration")}
              >
                <option value="">Select Course Duration</option>
                <option value="12weeks">12weeks</option>
              </select>
            ) : (
              <div className="w-full flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <input
                    name="course-duration"
                    id="course-duration"
                    type="radio"
                    value="3 months"
                    className={`size-5 peer rounded-[10px] cursor-pointer ${
                      errors.courseDuration ? "outline-red-500" : ""
                    } text-primary`}
                    {...register("courseDuration")}
                  />
                  <span>3 months</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <input
                    name="course-duration"
                    id="course-duration"
                    type="radio"
                    value="2 months"
                    className={`size-5 peer rounded-[10px] cursor-pointer ${
                      errors.email ? "outline-red-500" : ""
                    } text-primary`}
                    {...register("courseDuration")}
                  />
                  <span>2 months</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <input
                    name="course-duration"
                    id="course-duration"
                    type="radio"
                    value="1 months"
                    className={`size-5 peer rounded-[10px] cursor-pointer ${
                      errors.email ? "outline-red-500" : ""
                    } text-primary`}
                    {...register("courseDuration")}
                  />
                  <span>1 month</span>
                </div>
              </div>
            )}
            {errors.courseDuration && (
              <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
                {errors.courseDuration?.message}
              </span>
            )}
          </div>
        </div>
        {traineeCategory === "SIWES intern" && (
          <>
            <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
              <label
                htmlFor="SIWES-intern-school"
                className="flex w-96 items-center justify-start text-primary pointer-events-none"
              >
                <span>SIWES Intern School</span>
              </label>
              <div className="relative w-full h-auto">
                {/* <FaUser className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
                <input
                  type="text"
                  name="SIWES-intern-school"
                  id="SIWES-intern-school"
                  className={`h-[40px] w-full ${
                    errors.SIWESInternSchool ? "outline-red-500" : ""
                  } peer rounded-[10px] focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem]`}
                  placeholder="e.g University of Lagos"
                  {...register("SIWESInternSchool")}
                />
                {errors.SIWESInternSchool && (
                  <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
                    {errors.SIWESInternSchool?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
              <label
                htmlFor="SIWES-intern-matric-num"
                className="flex w-96 items-center justify-start text-primary pointer-events-none"
              >
                <span>SIWES Intern Matric No.</span>
              </label>
              <div className="relative w-full h-auto">
                {/* <FaUser className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
                <input
                  type="text"
                  name="SIWES-intern-matric-num"
                  id="SIWES-intern-matric-num"
                  className={`h-[40px] w-full ${
                    errors.SIWESInternMatricNum ? "outline-red-500" : ""
                  } peer rounded-[10px] focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem]`}
                  placeholder="e.g 2023/01234 or UNILAG/CSC/1234 etc."
                  {...register("SIWESInternMatricNum")}
                />
                {errors.SIWESInternMatricNum && (
                  <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
                    {errors.SIWESInternMatricNum?.message}
                  </span>
                )}
              </div>
            </div>
          </>
        )}
        <div className="input-box relative w-full px-[10px] h-auto gap-3 flex items-center justify-between md:flex-col md:items-start">
          <label
            htmlFor="start-date"
            className="flex w-96 items-center justify-start text-primary pointer-events-none"
          >
            <span>Select Start Date</span>
          </label>
          <div className="relative w-full h-auto">
            {/* <FaUser className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
            <input
              name="start-date"
              id="start-date"
              type="date"
              className={`h-[40px] w-full peer rounded-[10px] cursor-pointer ${
                errors.startDate ? "outline-red-500" : ""
              } focus:outline-primary border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[.9rem] text-primary`}
              {...register("startDate")}
            />
            {errors.startDate && (
              <span className="text-red-500 absolute -bottom-7 md:relative md:-bottom-1 block text-[.9rem]">
                {errors.startDate?.message}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
