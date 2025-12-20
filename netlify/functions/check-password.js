exports.handler = async (event) => {
  const { password } = JSON.parse(event.body);

  // Secrets stored in Netlify environment variables
  const CORRECT_PASSWORD = process.env.VIDEO_PASSWORD;
  const VIDEO_URL = process.env.VIDEO_URL;

  if (password === CORRECT_PASSWORD) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, videoUrl: VIDEO_URL })
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ success: false })
  };
};
