import React from 'react'
import "./LoginForm.css";
import Image from 'next/image';
import Header from '../common/Header';
const LoginForm = () => {
  return (
    <>
<Header />
    <section className="volunteer-section section-padding" id="section_4">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12">
                        <h2 className="text-white mb-4">Login</h2>

                        <form className="custom-form volunteer-form mb-5 mb-lg-0" action="#" method="post" role="form">
                            <h3 className="mb-4">Enter your details to login</h3>

                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <input type="text" name="volunteer-name" id="volunteer-name" className="form-control"
                                        placeholder="Please Enter Email id / Mobile Number" required />
                                </div>

               
                                <div className="col-lg-12 col-12">
                                <input type="password" name="volunteer-name" id="volunteer-name" className="form-control"
                                        placeholder="Enter Your Password" required />
                               
                                </div>
                            </div>
              <button type="submit" className="form-control">Submit</button>
                        </form>
                    </div>

                    <div className="col-lg-6 col-12">
              <Image
              src="/assets/images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg"
              alt="Vercel Logo"
              className="volunteer-image img-fluid"
              width={350}
              height={350}
              priority
            />
                        <div className="custom-block-body text-center">
                            <h4 className="text-white mt-lg-3 mb-lg-3">About Volunteering</h4>

                            <p className="text-white">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm
                                tokito Professional charity theme based</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>
  )
}

export default LoginForm