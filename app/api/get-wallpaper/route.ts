import  { Wallpaper }  from "@/types/wallpaper"

export function GET(req:Request){
    const wallpaper:Wallpaper[] = [
        {img_url:"https://b.zhutix.com/bizhi/The-legend-of-speed/01.jpg",
        img_description:"我有一只小毛驴",
        img_size:'1024*1920'
        },
        {img_url:"https://b.zhutix.com/bizhi/The-legend-of-speed/01.jpg",
        img_description:"把门开开",
        img_size:'1024*1920',
        },
       
        {img_url:"https://b.zhutix.com/bizhi/The-legend-of-speed/01.jpg",
        img_description:"把门开开",
        img_size:'1024*1920',
        }
        ,
               
        {img_url:"https://b.zhutix.com/bizhi/The-legend-of-speed/01.jpg",
        img_description:"把门开开",
        img_size:'1024*1920',
        },
    ]

    return Response.json({
        code:0,
        message:"ok",
        data:wallpaper,

        
    })}