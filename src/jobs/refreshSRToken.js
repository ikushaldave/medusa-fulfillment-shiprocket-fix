import axios from "axios";

export default async function handler({ container, data, pluginOptions }) {
  try {
    const response = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/auth/login",
      {
        email: pluginOptions.email,
        password: pluginOptions.password,
      }
    );

    pluginOptions.shiprocketToken = response.data.token;
    console.log("Shiprocket token refresh job completed");
  } catch (error) {
    console.log("Shiprocket token refresh failed");
    throw error;
  }
}

export const config = {
  name: "refreshSRToken",
  schedule: "0 0 * * *",
  data: {},
};
