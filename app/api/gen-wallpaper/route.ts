import { getOpenAIClient } from "@/service/oepnai";

export async function POST(req:Request){
    const  {description} = await req.json();
    
    console.log('description',description);
    const client = getOpenAIClient();
    console.log('客户端建立成功');
    const result = await client.images.generate({
        prompt:`generate a desktop wallpaper about:${description}`,
        model: "dall-e-3",
        n: 1,
        quality: "hd",
        response_format: "url",
        size: "1792x1024",
        style: "natural",
    }) ;
    console.log('generate wallpaper result:',result);
    return Response.json({
                code:0,
                message:'ok',
                data:{'img_url':"https://abc.com/xxx.jpg",
                },
            });
 
};


// export function POST(req:Request){
//     return Response.json({
//         code:0,
//         message:'ok',
//         data:{'img_url':"https://abc.com/xxx.jpg",
//         },
//     })
// }