import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Col, Form } from 'react-bootstrap';

// import { Formik, Form, Field, ErrorMessage } from 'formik'

function initNetlifyIdentity() {
  console.log("initNetlifyIdentity called. ")
  const script = document.createElement("script");

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true;

  document.body.appendChild(script);
}

function openNetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity;

  if(netlifyIdentity)
    netlifyIdentity.open();
  else
    console.log('netlifyIdentity not defined')

}

class NetlifyIdentity extends Component {
  componentDidMount() {
    initNetlifyIdentity();
  }

  render() {
    return(<div></div>)
  }
}

// const encode = (data) => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

const IndexPage = () => {
  return(
    <Layout>
      <NetlifyIdentity />
      <SEO title="Home" />
      <h1>Hi people</h1>
      <h2 onClick={() => { openNetlifyModal() }}>Login</h2>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      {/* <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        onSubmit={
          (values, actions) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact-demo", ...values })
            })
            .then(() => {
              alert('Success');
              actions.resetForm()
            })
            .catch(() => {
              alert('Error');
            })
            .finally(() => actions.setSubmitting(false))
          }
        }
        validate={values => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const errors = {};
          if(!values.name) {
            errors.name = 'Name Required'
          }
          if(!values.email || !emailRegex.test(values.email)) {
            errors.email = 'Valid Email Required'
          }
          if(!values.message) {
            errors.message = 'Message Required'
          }
          return errors;
        }}
      >
      {() => (
        <Form name="contact-demo" data-netlify={true}>
          <label htmlFor="name">Name: </label>
          <Field name="name" />
          <ErrorMessage name="name" />

          <label htmlFor="email">Email: </label>
          <Field name="email" />
          <ErrorMessage name="email" />

          <label htmlFor="message">Message: </label>
          <Field name="message" component="textarea"/>
          <ErrorMessage name="message" />

          <button type="submit">Send</button>
        </Form>
      )}
      </Formik> */}

      <Form name="react-contact" data-netlify={true}>
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Email
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="test@gmail.com"
              type="email"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>

      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}
export default IndexPage
