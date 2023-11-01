let response;

export const lambdaHandler = async (event, context) => {
  try {
    response = {
      statusCode: 200,
      body: "Hello World"
    };
  } catch (err) {
    console.log(err);
    return err;
  }
  return response;
};
