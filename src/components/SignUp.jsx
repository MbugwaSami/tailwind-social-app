import * as Yup from "yup";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { toastNotification } from "../helpers/toast";

import UseAppPost from "../helpers/axiosHelper";

export default function SignUp() {
  const [submitData, setSubmitData] = useState();
  const { isLoading, serverError, apiData } = UseAppPost("/user", submitData);
  const history = useHistory();

  useEffect(() => {
    if (apiData?.message === "New User Added!") {
      toastNotification("success", "Account created");
      history.push("/");
    } else {
      toastNotification("error", apiData?.message);
    }
  }, [apiData]);

  useEffect(() => {
    if (serverError) {
      toastNotification("error", serverError);
    }
  }, [serverError]);

  const phoneRegExp = /^(2547)([0-9|7])(\d){7}$/;
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed  ")
      .min(3, "Too Short!")
      .max(10, "Too Long!"),
    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed  ")
      .min(3, "Too Short!")
      .max(10, "Too Long!"),
    email: Yup.string()
      .email("Email address is invalid")
      .required("Email address is required"),
    password: Yup.string().required("Password is required"),
    confirm: Yup.string().required("Confirm password is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(phoneRegExp, "Phone number is not valid"),
  });
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            confirm: "",
          }}
          validationSchema={SignupSchema}
          validate={(values) => {
            const errors = {};
            const { password, confirm } = values;
            if (password && confirm) {
              if (password !== confirm) {
                errors.confirm = "Passwords do not match";
              }
            }
            return errors;
          }}
          onSubmit={async (values) => {
            setSubmitData(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="first-name">First name</label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Enter first name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstName && touched.firstName && (
                    <p class="text-red-500 text-sm italic">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="last-name">Last name</label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Enter last name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastName && touched.lastName && (
                    <p class="text-red-500 text-sm italic">{errors.lastName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Phone number eg 2547247890"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone && (
                    <p class="text-red-500 text-sm italic">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email-address">Enter email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <p class="text-red-500 text-sm italic">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <p class="text-red-500 text-sm italic">{errors.password}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="confirm">Confirm password</label>
                  <input
                    id="confirm"
                    name="confirm"
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm password"
                    value={values.confirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirm && touched.confirm && (
                    <p class="text-red-500 text-sm italic">{errors.confirm}</p>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {isLoading ? "Saving..." : "Sign up"}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
