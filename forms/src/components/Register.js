import React, {useEffect} from 'react'
import { withFormik, Form, Field, setNestedObjectValues } from "formik";
import * as Yup from "yup";
import axios from 'axios';
// import {useLocalStorage} from './useLocalStorage';

function Register({touched, errors, setToken}) {
  // const [token, setToken] = useLocalStorage('token', '')
    return (
        <div>
            <p>Register Page</p>

            <Form className="form">
      <div className="form-group">
        <label className="label">Username:</label>
        <Field
          className="input"
          name="username"
          type="text"
          autoComplete="off"
        />
        <p>{touched.username && errors.username}</p>
      </div>
      <div className="form-group">
        <label className="label">Password:</label>
        <Field
          className="input"
          name="password"
          type="password"
          autoComplete="off"
        />
      </div>
      <p>{touched.password && errors.password}</p>
      <button className="btn">Submit &rarr;</button>
    </Form>
        </div>
    )
}

export default withFormik({

    mapPropsToValues() {
      return {
        username: "",
        password: "",
        token: "TOKEN123"
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(6)
        .required(),
      password: Yup.string()
        .min(6)
        .required()
    }),
    handleSubmit(values, formikBag) {
      console.log(formikBag)
      const url =
        "http://localhost:5000/api/register";
      axios
        .post(url, values)
        .then( res => {

          formikBag.props.setToken(res.data.token)
          // localStorage.setItem('token', res.data.token);
          formikBag.props.history.push("/viewdata");
        console.log("Success!", res)
        })

        .catch(err => {
          console.log(err);
        });
    }
  })(Register);