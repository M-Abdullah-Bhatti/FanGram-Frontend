import React, { useState } from "react";
import { myProfilePageIcons } from "../../Data";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const MyProfileForm = () => {
  const [avatarPreview, setAvatarPreview] = useState("/images/Profile.png");
  const [avatar, setAvatar] = useState();
  const CustomDropdown = () => (
    <svg
      width="900"
      height="913"
      viewBox="0 0 900 913"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="900" height="913" rx="30" fill="#202020" />
    </svg>
  );

  const registerDataChange = (e) => {
    // for avatar
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      // onlaod function of FileReader consist of three stages
      // initial state
      // processing state
      // final state
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    // for name, email and password
  };

  return (
    <div className="mt-[30px] lg:m-[50px] grid place-items-center">
      <form action="" className="w-[100%] lg:w-[80%]  bg-[#292929] rounded-2xl">
        <div className=" grid place-items-center mt-4">
          <div className="w-[10vmax] h-[10vmax]">
            <img
              src={avatarPreview}
              alt="AvatarPreview"
              className="w-full h-full rounded-full"
            />
          </div>
          <div
            id="registerImage"
            className="relative overflow-hidden cursor-pointer mt-4"
          >
            <input
              type="file"
              name="avatar"
              id="fileInput"
              accept="image/*"
              onChange={registerDataChange}
              className="absolute top-0 left-0 opacity-0 h-full w-full  "
            />
            <label for="fileInput">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-[#D42978] text-white rounded-full  "
              >
                <g clip-path="url(#clip0_92_33207)">
                  <path
                    d="M10.5804 9.07985C10.5804 10.5027 9.4229 11.6603 8 11.6603C6.5771 11.6603 5.42003 10.5027 5.42003 9.07985C5.42003 7.65695 6.5771 6.49943 8 6.49943C9.4229 6.49943 10.5804 7.65739 10.5804 9.07985ZM16 5.41578V12.7448C16 13.214 15.8136 13.664 15.4818 13.9958C15.15 14.3276 14.7 14.514 14.2308 14.514H1.76923C1.3 14.514 0.849989 14.3276 0.518194 13.9958C0.1864 13.664 0 13.214 0 12.7448V5.41578C0 4.94655 0.1864 4.49654 0.518194 4.16475C0.849989 3.83295 1.3 3.64655 1.76923 3.64655H3.94538V3.0344C3.94538 2.62383 4.10848 2.23007 4.3988 1.93975C4.68912 1.64943 5.08287 1.48633 5.49345 1.48633H10.5066C10.9171 1.48633 11.3109 1.64943 11.6012 1.93975C11.8915 2.23007 12.0546 2.62383 12.0546 3.0344V3.64611H14.2308C15.2078 3.64655 16 4.43873 16 5.41578ZM11.9073 9.07985C11.9073 6.92537 10.1545 5.17251 8 5.17251C5.84597 5.17251 4.09311 6.92537 4.09311 9.07985C4.09311 11.2343 5.84597 12.9872 8 12.9872C10.1545 12.9872 11.9073 11.2343 11.9073 9.07985Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_92_33207">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
          </div>
          {/* <div className="w-fit bg-[#D42978] p-2 rounded-full">
            {myProfilePageIcons.icon}
          </div> */}
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

          <PhoneInput
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
              className: "form__elements",
            }}
            country={"pk"}
            buttonClass="countryButton"
            buttonStyle={{
              width: "5vmax",
              background: "#414141",
              padding: "0.7vmax",
              margin: "0.3vmax",
              borderRadius: "0.6vmax",
            }}
            dropdownStyle={{
              background: "white",
            }}
            prefix="+"
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
  );
};

export default MyProfileForm;
