import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { toastNotification } from "../helpers/toast";

import UseAppPost from "../helpers/axiosHelper";

export default function Login() {
  const [submitData, setSubmitData] = useState();
  const { isLoading, serverError, apiData } = UseAppPost("/login", submitData);
  const history = useHistory();
  useEffect(() => {
    if (apiData?.message === "Login Successful!") {
      toastNotification("success", apiData?.message);
      history.push("/main");
    } else {
      toastNotification("error", apiData?.message);
    }
  }, [apiData]);

  useEffect(() => {
    if (serverError) {
      toastNotification("error", serverError);
    }
  }, [serverError]);

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email address is invalid")
      .required("Email address is required"),
    password: Yup.string().required("Password is required"),
  });
  return (
      <div className="bg-gray-200 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                onClick={() => history.push("/signup")}
                className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer"
              >
                Create Account
              </a>
            </p>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
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
                    <label htmlFor="email-address">Email address</label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleBlur}
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
                      className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    {errors.password && touched.password && (
                      <p class="text-red-500 text-sm italic">
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {isLoading ? "Loading..." : "Sign in"}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
  );
}
