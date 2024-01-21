import { getOpenAIClient } from "@/service/oepnai";
import { Wallpaper } from "@/types/wallpaper";
export async function POST(req:Request){
    const  {description} = await req.json();
    
    console.log('description',description);
    const client = getOpenAIClient();
    console.log('客户端建立成功');
    // 调用ChatGPT API
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
    const raw_img_url = result.data[0].url
    if(!raw_img_url){
        return Response.json({
            code:-1,
            message:"generate wallpaper failed"
        })
    }





    const wallpaper: Wallpaper = {
        // user_email: 'user_email',
        // img_description: description,
        // img_size: img_size,
        // img_url: img_url,
        // llm_name: llm_name,
        // llm_params: JSON.stringify(llm_params),
        // created_at: created_at,
        img_url:raw_img_url,
        img_description:description,
        img_size:'1024*1920',
        user_avatar:'null',
        user_nickname:'null',
      };

    return Response.json({
                code:0,
                message:'ok',
                data:wallpaper,
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