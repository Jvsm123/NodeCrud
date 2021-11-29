export const Api = async () =>
{
    const response = await fetch("http://localhost:8080/");
    const body = await response.json();
 
    if( response.status !== 200 ) throw new Error( body.message );
 
    return body;
};
