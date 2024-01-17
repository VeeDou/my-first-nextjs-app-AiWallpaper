export function GET(req:Request){
    return Response.json({
        message:'hello world',
        code:10086
    })
}