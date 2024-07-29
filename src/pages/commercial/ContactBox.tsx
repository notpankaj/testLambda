/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAnimate } from "framer-motion";
import MailPng from "../../assets/images/mail.png";
import "./ContactBox.css";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { randomString } from "../../helpers";
import toast from "react-hot-toast";
import { contactForm } from "../../api";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import TopPartPng from "../../assets/images/mail-top-part.png";

const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(10, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  message: Yup.string().min(2, "Too Short!").required("Required"),
});

const TYPE_OF_INSURANCE_POLICY = [
  "Business Owners Policy (BOP)",
  "General Liability Insurance",
  "Professional Liability Insurance",
  "Commercial Property Insurance",
  "Cyber Insurance",
  "Business Equipment Protection",
];

const AMERICAN_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const ContactBox = () => {
  const [scope, animate] = useAnimate();
  const [typeOfInsurance, setTypeOfInsurance] = useState("");
  const [state, setState] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [extraErrors, setExtraErrors] = useState<any>({});

  const handleSubmit = async (values) => {
    console.log({ extraErrors });

    if (!typeOfInsurance) {
      setExtraErrors({ ...extraErrors, insurance: "Choose Insurance" });
      return;
    } else {
      setExtraErrors({ ...extraErrors, insurance: null });
    }

    if (!state) {
      setExtraErrors({ ...extraErrors, state: "Choose State" });
      return;
    } else {
      setExtraErrors({ ...extraErrors, state: null });
    }

    const id = `${Date.now()}-${randomString()}`;
    const payload = {
      _id: id,
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNum: values.phone,
      formType: "Contact",
      submissionDateTime: new Date().toISOString(),
      state: state,
      InsuranceType: typeOfInsurance,
      message: values.message,
      interest: "interest",
    };
    // console.log(payload);
    try {
      setLoading(true);
      const res = await contactForm(payload);
      console.log(res);
      toast.success("Success");
    } catch (error: any) {
      console.log(error);
      toast.error(error.messahe);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!scope.current) return;
    const handleMouseEnter = () => {
      animate("img#MainPng", { opacity: 0 });
      animate("img#mainTopPng", { opacity: 1, top: "-70px" });
      scope.current.querySelector("#contact-form").classList.add("show");
    };

    const handleMouseLeave = () => {
      setTimeout(() => {
        animate("img#MainPng", { opacity: 1, transitionDelay: 2000 });
        animate("img#mainTopPng", { opacity: 0, top: "0px" });
        scope.current.querySelector("#contact-form").classList.remove("show");
      }, 500);
    };

    const current = scope.current;
    current.addEventListener("mouseenter", handleMouseEnter);
    current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      current.removeEventListener("mouseenter", handleMouseEnter);
      current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [scope, animate]);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        message: "",
        email: "",
      }}
      validationSchema={Schema}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <section className="contact-box flex bg-[#033F63] py-[20px]  mx-auto px-[5%] pb-[100px] ">
          <div
            ref={scope}
            id="contact-form-wrapper"
            className="w-[600px] h-[100%]  xl:w-[55%] "
          >
            <img
              src={TopPartPng}
              id="mainTopPng"
              className=" h-[100%]  w-[600px] absolute "
            />
            <form
              onSubmit={(e) => e.preventDefault}
              id="contact-form"
              className=" pt-[20px] pb-[20px] px-[20px] relative"
            >
              {isModalOpen && (
                <div className="w-[560px] overflow-y-scroll h-[200px] px-[20px]  bg-white flex flex-col absolute z-10">
                  {TYPE_OF_INSURANCE_POLICY.map((item, index) => {
                    return (
                      <span
                        onClick={() => {
                          setTypeOfInsurance(item);
                          setIsModalOpen(false);
                          setExtraErrors({ ...extraErrors, insurance: null });
                        }}
                        key={index}
                        className="cursor-pointer text-blue-900 text-xs my-[5px]"
                      >
                        {item}
                      </span>
                    );
                  })}

                  <IoIosArrowUp
                    onClick={() => setIsModalOpen(false)}
                    size={20}
                    color="text-blue-900"
                    style={{
                      position: "absolute",
                      right: 20,
                      top: 10,
                      cursor: "pointer",
                    }}
                  />
                </div>
              )}
              {isModal2Open && (
                <div className="w-[560px] overflow-y-scroll h-[200px] px-[20px]  bg-white flex flex-col absolute z-10">
                  {AMERICAN_STATES.map((item, index) => {
                    return (
                      <span
                        onClick={() => {
                          setState(item);
                          setIsModal2Open(false);
                          setExtraErrors({ ...extraErrors, state: null });
                        }}
                        key={index}
                        className="cursor-pointer text-blue-900 text-xs my-[5px]"
                      >
                        {item}
                      </span>
                    );
                  })}
                  <IoIosArrowUp
                    onClick={() => setIsModal2Open(false)}
                    size={20}
                    color="text-blue-900"
                    style={{
                      position: "absolute",
                      right: 20,
                      top: 10,
                      cursor: "pointer",
                      opacity: 0,
                    }}
                  />
                </div>
              )}
              <div className="flex-1 mb-[20px]">
                <div className="bg-white relative h-[40px] flex-1 w-[100%]  rounded-[5px] flex items-center px-[20px] gap-[10px] ">
                  <input
                    value={typeOfInsurance}
                    className="text-sm outline-none w-[100%]"
                    placeholder="Type Of Insurance Needed *"
                    onFocus={() => setIsModalOpen(true)}
                  />
                  <IoIosArrowDown
                    onClick={() => setIsModalOpen(true)}
                    size={18}
                    color="text-blue-900"
                    style={{
                      position: "absolute",
                      right: 20,
                      top: 10,
                      cursor: "pointer",
                    }}
                  />
                </div>
                {extraErrors["insurance"] && (
                  <span className="error__message">
                    {extraErrors["insurance"]}
                  </span>
                )}
              </div>
              <div className="flex  gap-[20px]">
                <div className="flex-1">
                  <div className="bg-white h-[40px] flex-1 rounded-[5px] flex items-center px-[20px] gap-[10px] ">
                    <input
                      onBlur={handleBlur("firstName")}
                      onChange={handleChange("firstName")}
                      value={values.firstName}
                      className="text-sm outline-none w-[100%]"
                      placeholder="First Name *"
                    />
                  </div>
                  {touched.firstName && errors.firstName && (
                    <span className="error__message">{errors.firstName}</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="bg-white h-[40px] flex-1 rounded-[5px] flex items-center px-[20px] gap-[10px]">
                    <input
                      onBlur={handleBlur("lastName")}
                      onChange={handleChange("lastName")}
                      value={values.lastName}
                      className="text-sm outline-none w-[100%]"
                      placeholder="Last Name *"
                    />
                  </div>
                  {touched.lastName && errors.lastName && (
                    <span className="error__message">{errors.lastName}</span>
                  )}
                </div>
              </div>
              <div className="flex  gap-[20px] mt-[20px]">
                <div className="flex-1">
                  <div className="bg-white h-[40px] flex-1 rounded-[5px] flex items-center px-[20px] gap-[10px]">
                    <input
                      className="text-sm outline-none w-[100%]"
                      placeholder="Phone *"
                      onBlur={handleBlur("phone")}
                      onChange={handleChange("phone")}
                      value={values.phone}
                    />
                  </div>
                  {touched.phone && errors.phone && (
                    <span className="error__message">{errors.phone}</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="bg-white h-[40px] flex-1 rounded-[5px] flex items-center px-[20px] gap-[10px] relative">
                    <input
                      className="text-sm outline-none w-[100%]"
                      placeholder="State *"
                      value={state}
                      onFocus={() => setIsModal2Open(true)}
                    />

                    <IoIosArrowDown
                      onClick={() => setIsModal2Open(true)}
                      size={18}
                      color="text-blue-900"
                      style={{
                        position: "absolute",
                        right: 20,
                        top: 10,
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  {extraErrors["state"] && (
                    <span className="error__message">
                      {extraErrors["state"]}
                    </span>
                  )}
                </div>
              </div>
              <div className="bg-white h-[40px] mt-[20px] w-[100%] flex-1 rounded-[5px] flex items-center px-[20px] gap-[10px]">
                <input
                  className="text-sm outline-none w-[100%]"
                  placeholder="Email *"
                  onBlur={handleBlur("email")}
                  onChange={handleChange("email")}
                  value={values.email}
                />
              </div>
              {touched.email && errors.email && (
                <span className="error__message">{errors.email}</span>
              )}
              <div className="bg-white h-[40px] flex-1 w-[100%] mt-[20px] rounded-[5px] flex items-center px-[20px] gap-[10px]">
                <input
                  className="text-sm outline-none w-[100%]"
                  placeholder="Message *"
                  onBlur={handleBlur("message")}
                  onChange={handleChange("message")}
                  value={values.message}
                />
              </div>
              {touched.message && errors.message && (
                <span className="error__message">{errors.message}</span>
              )}

              <div
                onClick={() => handleSubmit()}
                className="cursor-pointer bg-[#033F63] px-[10px] mt-[20px] rounded-[4px] flex items-center justify-center w-[60px] h-[25px]"
              >
                <span className="text-xs text-white font-medium">
                  {loading ? "loading..." : "Submit"}
                </span>
              </div>
            </form>
            <img
              id="MainPng"
              className="h-[350px] w-[600px] object-conatin"
              src={MailPng}
            />
          </div>
          <div className="flex-1 xl:w-[45%] flex flex-col justify-center items-center px-[30px]">
            <h6 className="text-[25px] xl:text-[40px] font-bold text-white">
              Get Started Today!
            </h6>
            <span className="text-[16px] xl:text-[24px] font-light text-white text-center">
              Fill out the form below to get started with a personalized
              insurance quote. Our team will reach out to you with the best
              options tailored to your business needs.
            </span>
          </div>
        </section>
      )}
    </Formik>
  );
};

export default ContactBox;
