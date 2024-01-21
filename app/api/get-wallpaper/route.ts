import  { Wallpaper }  from "@/types/wallpaper"

export function GET(req:Request){
    const wallpaper:Wallpaper[] = [
        
        {img_url:"https://oaidalleapiprodscus.blob.core.windows.net/private/org-aXE7YXfQx9DaqInZG6SiwwI2/user-DTfchd9OOr1IPyZY4eoirZ1w/img-3xas6igWnBpJPMYEBw0YWI2o.png?st=2024-01-21T01%3A38%3A23Z&se=2024-01-21T03%3A38%3A23Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-20T19%3A41%3A00Z&ske=2024-01-21T19%3A41%3A00Z&sks=b&skv=2021-08-06&sig=5%2BwoZyTM3f7XoASXWDk3u5440MalTg58HUFiRNfoBe4%3D",
        img_description:"一辆红色的特斯拉在水上飞驰",
        img_size:'1024x1920',
        user_avatar:'https://a.520gexing.com/uploads/allimg/2023092507/rlbovls2c5m.jpg',
        user_nickname:'Victory',
        },
        {img_url:"https://oaidalleapiprodscus.blob.core.windows.net/private/org-aXE7YXfQx9DaqInZG6SiwwI2/user-DTfchd9OOr1IPyZY4eoirZ1w/img-PiCIwl4Qc74LTraIsPFwyNzb.png?st=2024-01-21T01%3A33%3A31Z&se=2024-01-21T03%3A33%3A31Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-20T19%3A37%3A26Z&ske=2024-01-21T19%3A37%3A26Z&sks=b&skv=2021-08-06&sig=edrufuRm3n2XSAIqUr/TQSL8tzi3O74vftfKOfbaLDE%3D",
        img_description:"一个美女在公沙滩漫步，穿着一袭长裙",
        img_size:'1024x1920',
        user_avatar:'https://a.520gexing.com/uploads/allimg/2023092507/rlbovls2c5m.jpg',
        user_nickname:'Victory',
        },
        {img_url:"https://oaidalleapiprodscus.blob.core.windows.net/private/org-aXE7YXfQx9DaqInZG6SiwwI2/user-DTfchd9OOr1IPyZY4eoirZ1w/img-9KdjgQncUdAHRz4OZYxb1Mf5.png?st=2024-01-20T15%3A54%3A28Z&se=2024-01-20T17%3A54%3A28Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-19T19%3A41%3A34Z&ske=2024-01-20T19%3A41%3A34Z&sks=b&skv=2021-08-06&sig=fSdvXJSP5lMyP8jCoLMtbtyfqwXpDAxZ0EHRgBxdjcI%3D",
        img_description:"happy new year",
        img_size:'1024x1920',
        user_avatar:'https://a.520gexing.com/uploads/allimg/2023092507/rlbovls2c5m.jpg',
        user_nickname:'Victory',
        },
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