module.exports = async function (context, req, queryPerson ) {
    context.log('JavaScript queue trigger function processed work item');
    if(!queryPerson){
        context.log("Persion not find!")
    }
    else{
        context.log("Found ToDo item, Description=" + queryPerson.id);
    }
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: queryPerson
    };
}