import axios from "axios";

export default async (container, config) => {
  try {
    const response = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/auth/login",
      {
        email: config.email,
        password: config.password,
      }
    );

    config.shiprocketToken = response.data.token;

    console.log("Shiprocket token refresh");
  } catch (error) {
    console.log("Shiprocket token refresh failed");
    throw error;
  }
};
