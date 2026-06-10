import axios from "axios";

const TOKEN = "YOUR_ACCESS_TOKEN";

const Log = async (stack, level, packageName, message) => {

  try {

    await axios.post(
      "http://4.224.186.213/evaluation-service/logs",

      {
        stack,
        level,
        package: packageName,
        message
      },

      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

  } catch (error) {

    console.log(error);

  }
};

export default Log;