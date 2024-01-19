"use client";
import { Wallpaper } from "@/types/wallpaper";
// import { clients } from "@clerk/nextjs/api";
import { useEffect, useState } from "react";
export default   function (){

    const [Wallpapers,setWallpapers] = useState<Wallpaper[]| null >(null);
    const fetchewallpapers = async function () {
        const result = await fetch("api/get-wallpaper");
        const {data} = await result.json() ;
        if (data) {
            setWallpapers(data);
            console.log(data);
        }
        
    };
    

    useEffect(()=>{
        fetchewallpapers();
    },[]);

    return(
        <section className='max-w-lg mx-auto'>
            <div className='flex items-center'>
                {Wallpapers &&
                Wallpapers.map((v:Wallpaper,idx:number) =>{
                    return(
                        <div  className="mx-1">
                            <h2>{v.img_description}</h2>
                            <img 
                                src={v.img_url} 
                                alt=""  
                                className="inline-block h-60 w-full rounded-md object-cover"/>
                            <p>{v.img_size}</p>
                        </div>
                    );
                })
                }
            </div>
        </section>
    )
}
