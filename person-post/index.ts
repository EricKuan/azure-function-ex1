import { AzureFunction, Context } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context): Promise<void> {
    const body = context.req.body;
    context.log(body);
    context.bindings.outputDocument = JSON.stringify({
      id: body.name + "-" + body.employeeId,
      name: body.name,
      employeeId: body.employeeId,
      address: body.address
    });

    context.done();
  };

  export default httpTrigger;