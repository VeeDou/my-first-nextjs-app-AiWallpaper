import  { Wallpaper }  from "@/types/wallpaper";

export function GET(req:Request){
    const wallpaper:Wallpaper[] = [
        {img_url:"blob:null/767cda6b-8013-45e3-891a-dfd5d0ebd4f4"},
        {img_url:"https://b.zhutix.com/bizhi/The-legend-of-speed/01.jpg"},
    ];

    return Response.json({
        code:0,
        message:"ok",
        data:wallpaper,

        
    })};