import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, queryPerson: any ): Promise<void> {

    context.log('JavaScript queue trigger function processed work item');
    if(!queryPerson){
        context.log("Persion not find!")
    }
    else{
        context.log("Found user, id=" + queryPerson.id);
        context.log("Found user, userName=" + queryPerson.name );
    }
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: queryPerson
    };

};

export default httpTrigger;