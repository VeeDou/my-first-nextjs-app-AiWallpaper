import  { Wallpaper }  from "@/types/wallpaper"

export function GET(req:Request){
    const wallpaper:Wallpaper[] = [
        {img_url:"https://b.zhutix.com/bizhi/The-legend-of-speed/01.jpg",
        img_description:"我有一只小毛驴",
        img_size:'1024x1920',
        user_avatar:'https://a.520gexing.com/uploads/allimg/2023092507/rlbovls2c5m.jpg',
        user_nickname:'Victory',

        },
        {img_url:"https://b.zhutix.com/bizhi/The-legend-of-speed/01.jpg",
        img_description:"把门开开",
        img_size:'1024x1920',
        user_avatar:'https://a.520gexing.com/uploads/allimg/2023092507/rlbovls2c5m.jpg',
        user_nickname:'Victory',
        },
       
        {img_url:"https://b.zhutix.com/bizhi/The-legend-of-speed/01.jpg",
        img_description:"把门开开",
        img_size:'1024x1920',
        user_avatar:'https://a.520gexing.com/uploads/allimg/2023092507/rlbovls2c5m.jpg',
        user_nickname:'Victory',
        }
        ,
               
        {img_url:"https://b.zhutix.com/bizhi/The-legend-of-speed/01.jpg",
        img_description:"把门开开",
        img_size:'1024x1920',
        user_avatar:'https://a.520gexing.com/uploads/allimg/2023092507/rlbovls2c5m.jpg',
        user_nickname:'Victory',
        },
    ]

    return Response.json({
        code:0,
        message:"ok",
        data:wallpaper,

        
    })}