import React from "react";
import { Link } from "react-router-dom";
import { myProfilePageIcons, myProfilePageLinks } from "../Data";

const MyProfile = () => {
  return (
    <div className="px-16 py-6 bg-black text-white">
      {/* first phase */}
      <h1 className="pb-6 font-semibold text-2xl text-center">My Account</h1>
      <div className="w-full grid place-items-center">
        <div className="bg-[#292929] w-1/3 px-4 py-3 rounded-full flex items-center justify-between">
          <Link>Profile</Link>
          <Link>Booking</Link>
          <Link>Wallet</Link>
          <Link>Wishlist</Link>
        </div>
      </div>
      {/* second phase */}
      <div className="m-[50px] grid place-items-center">
        <form
          action=""
          className="w-[900px] h-[913px] bg-[#292929] rounded-2xl"
        >
          <div className="mt-[184px] grid place-items-center">
            <div className="w-fit bg-[#D42978] p-2 rounded-full">
              {myProfilePageIcons.icon}
            </div>
          </div>
          <div className="py-8 px-10">
            <label for="name">Name</label>
            <br></br>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="form__elements"
              placeholder="Enter Your Name"
            />
            <br></br>
            <br></br>
            <label for="gender">Gender:</label>
            <br></br>
            <select
              id="gender"
              name="gender"
              required
              className="text-[#FFFFFFA9] form__elements"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br></br>
            <br></br>
            <label for="dob">Date of Birth</label>
            <br></br>
            <input
              type="date"
              id="dob"
              name="dob"
              required
              className="text-[#FFFFFFA9] form__elements"
            />
            <br></br>
            <br></br>
            <label for="phone">Phone Number</label>
            <br></br>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              required
              className="form__elements"
              placeholder="Enter Your Phone Number"
            />
            <br></br>
            <br></br>
            <label for="email">Email</label>
            <br></br>

            <input
              type="email"
              id="email"
              name="email"
              required
              className="form__elements"
              placeholder="Enter Your Email id"
            />
            <br></br>
            <br />
            <div className="grid place-items-center mt-[40px] ">
              <input
                type="submit"
                value="Save Changes"
                className="w-fit bg-[#D42978] py-[10px] px-[50px] rounded-full cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
      {/* third phase */}
      <h1 className="pb-6 font-semibold text-2xl text-start">Discover More:</h1>
      <div className="flex items-center justify-between ">
        {myProfilePageLinks.map((links, index) => (
          <div
            key={index}
            className="w-fit py-2 px-2 m-2 bg-[#D42978] rounded-full "
          >
            <Link to="#">{links.text}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
