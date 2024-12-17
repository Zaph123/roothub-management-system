import Personal from "./trainee-forms/Personal";
import Training from "./trainee-forms/Training";
import Payment from "./trainee-forms/Payment";
import NextOfKin from "./trainee-forms/NextOfKin";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const nigerianPhoneRegex =
  /^(?:\+234|234|0)? ?(?:\d{3}|\(0\d{2}\)) ?\d{3} ?\d{4}$/;
const matricRegex =
  /^(20[0-9]{2}\/[0-9]{5})|([A-Za-z]{2,10}\/[A-Za-z]{2,5}\/[0-9]{3,5})$/;
const matricRegex1 = /^[A-Z]{2,5}\/[A-Z]{2,4}\/\d{3,6}$/;

const validationSchema1 = yup.object().shape({
  fullName: yup.string().required("Please input your Full Name"),
  email: yup
    .string()
    .email("Email must include an @")
    .required("Invalid email"),
  phoneNumber: yup
    .string()
    .trim()
    .required("Please fill in your phone Number")
    .matches(
      nigerianPhoneRegex, // Regex for phone number validation
      "Phone number is not valid"
    ),
  // password: yup
  // .string()
  // .min(8, "password must be at least 8 characters long")
  // .required("Please enter a valid password"),
});

const validationSchema2 = yup.object().shape({
  traineeCategory: yup.string().required("Trainee category is required"),
  traineeCourse: yup.string().required("Your Course is required"),
  tutorAndSession: yup
    .string()
    .required("Please select your Tutor and Session"),
  courseDuration: yup.string().required("Please select the duration"),
  SIWESInternSchool: yup.string().when("traineeCategory", {
    is: "SIWES intern",
    then: (schema) => schema.required("Please fill in your School name"),
    otherwise: (schema) => schema.notRequired(),
  }),
  SIWESInternMatricNum: yup.string().when("traineeCategory", {
    is: "SIWES intern",
    then: (schema) =>
      schema
        .required("Please fill in your Matriculation Number")
        .matches(matricRegex, "Matriculation number is not valid"),
    otherwise: (schema) => schema.notRequired(),
  }),
  startDate: yup
    .date()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Please select a Date")
    .min(new Date(), "Date must be in the future")
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      "Date must be within a year from now"
    ),
});

const validationSchema3 = yup.object({
  paymentPlan: yup.string().required("Please fill in a plan"),
  dateOfFirstPayment: yup
    .date()
    .nullable() // Allow null values
    .transform((value, originalValue) => (originalValue === "" ? null : value)) // Convert empty string to null
    .required("Please select a Date")
    .min(new Date(), "Date must be in the future"),
});

const validationSchema4 = yup.object({
  nextOfKinName: yup.string().required("Please fill in the field"),
  nextOfKinEmail: yup
    .string()
    .email("Email must include an @")
    .required("Invalid email"),
  nextOfKinPhoneNumber: yup
    .string()
    .required("Please fill in the field")
    .matches(
      nigerianPhoneRegex, // Regex for phone number validation
      "Phone number is not valid"
    ),
  relationshipWithNextOfKin: yup
    .string()
    .required("Please select a relationship"),
});

const steps = [
  {
    id: 1,
    component: <Personal />,
    schema: validationSchema1,
    isStepCompleted: false,
  },
  {
    id: 2,
    component: <Training />,
    schema: validationSchema2,
    isStepCompleted: false,
  },
  {
    id: 3,
    component: <Payment />,
    schema: validationSchema3,
    isStepCompleted: false,
  },
  {
    id: 4,
    component: <NextOfKin />,
    schema: validationSchema4,
    isStepCompleted: false,
  },
];

const TraineeReg = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const methods = useForm({
    resolver: yupResolver(steps[currentPage].schema),
  });

  const handlecurrentPage = () => {
    switch (currentPage) {
      case 0:
        return <Personal />;
      case 1:
        return <Training />;
      case 2:
        return <Payment />;
      case 3:
        return <NextOfKin />;
    }
  };

  const onSubmit = async (data) => {
    if (currentPage < steps.length - 1) {
      setCurrentPage(currentPage + 1);
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    alert("formSubmitted");
  };

  return (
    <div className="w-full relative max-w-[700px] h-[620px] bg-secondary rounded-3xl">
      <FormProvider {...methods}>
        <form
          className="w-full h-full flex flex-col justify-between items-center"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {handlecurrentPage()}
          <div className="w-full relative p-12 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="p-3 w-40 gap-3 flex items-center cursor-pointer disabled:border-[#d4dae3] disabled:text-[#acb4c1] disabled:cursor-not-allowed justify-center rounded-full border border-primary text-primary"
            >
              <FaArrowLeftLong />
              GO BACK
            </button>
            <button
              type="submit"
              className="p-3 w-40 gap-3 uppercase flex items-center justify-center rounded-full bg-primary text-white"
            >
              {!methods.formState.isSubmitting ? (
                currentPage === steps.length - 1 ? (
                  "Signup"
                ) : (
                  "Next"
                )
              ) : (
                <span className="animate-spin w-[25px] h-[25px] block rounded-full border-b-[#b8b8b8] border-4 border-transparent border-t-[#b8b8b8]" />
              )}
              {!methods.formState.isSubmitting && <FaArrowRightLong />}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default TraineeReg;
