import React, {useState} from "react";
import { myProfilePageIcons } from "../../Data";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useUpdateUser } from "../../hooks/profile-hooks";

const MyProfileForm = () => {

  const updateUserMutation = useUpdateUser();

  const [userData, setUserData] = useState({
    name: "",
    gender: "male",
    dob: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value, data, event) => {
    setUserData({
      ...userData,
      phone: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserMutation.mutate(userData);
  };

  return (
    <div className="mt-[30px] lg:m-[50px] grid place-items-center">
      <form onSubmit={handleSubmit} className="w-[100%] lg:w-[80%]  bg-[#292929] rounded-2xl">
        <div className="mt-[100px] lg:mt-[184px] grid place-items-center">
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
            value={userData.name}
            onChange={handleInputChange}
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
            value={userData.gender}
            onChange={handleInputChange}
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
            value={userData.dob}
            onChange={handleInputChange}
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
            value={userData.phone}
            onChange={handlePhoneChange}
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
            value={userData.email}
            onChange={handleInputChange}
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
