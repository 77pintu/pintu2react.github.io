import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const inputEvent = (event) => {
    console.log(event.target.value);
    setData();
  };
  const formSubmit = () => {
    console.log("clicked");
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="" onSubmit={formSubmit}>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">FullName</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  id="exampleFormControlInput1"
                  placeholder="your fullname"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  id="exampleFormControlInput1"
                  placeholder="mobile number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="form-group mt-4">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
