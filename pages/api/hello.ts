export default function handler(req: any, res: any) {
  console.log(req.method);
  const requestMethod = req.method;
  var body = JSON.parse(req.body);
  switch (requestMethod) {
    case "POST": {
      res.status(200).json({
        message: `You submitted the following data: ${JSON.stringify(body)}`,
      });
      break;
    }

    // handle other HTTP methods
    default:
      res.status(200).json({ message: "Welcome to API Routes!" });
  }
}
