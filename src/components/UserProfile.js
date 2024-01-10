import React, { useEffect, useState } from "react";
import axios from "axios";
const UserProfile = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const userID = window.localStorage.getItem("userId");
    console.log(userID);
    const getData = async () => {
      const response = await axios.get(
        `http://localhost:3001/userdata/${userID}`
      );

      setUserData(response.data);
    };

    getData();
    console.log("Hello");
  }, []);

  return (
    <div>
      {userData ? (
        <div className=" mx-auto flex justify-center items-center bg-white font-Raleway shadow-lg rounded-lg my-4 min-h-screen">
          <div className="px-6 py-4 w-1/4 flex items-start justify-center flex-col border-2 border-black">
            <div className="font-bold text-4xl mb-2">Student Information</div>
            <p className="text-gray-700 text-xl">
              <strong>First Name:</strong> {userData.firstname}
            </p>
            <p className="text-gray-700 text-xl">
              <strong>Last Name:</strong> {userData.lastname}
            </p>
            <p className="text-gray-700 text-xl">
              <strong>Course:</strong> {userData.course}
            </p>
            <p className="text-gray-700 text-xl">
              <strong>Branch:</strong> {userData.branch}
            </p>
            <p className="text-gray-700 text-xl">
              <strong>Email:</strong> {userData.email}
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserProfile;
