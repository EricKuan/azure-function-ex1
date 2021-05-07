module.exports = function (context) {
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