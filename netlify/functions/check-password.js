exports.handler = async function(event) {
  const password = event.queryStringParameters?.password;

  if (password === process.env.VIDEO_PASSWORD) {
    return {
      statusCode: 200,
      body: JSON.stringify({ url: process.env.VIDEO_URL }),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Incorrect password" }),
    };
  }
};

