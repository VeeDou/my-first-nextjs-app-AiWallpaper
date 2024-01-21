"use client";

// import Image from 'next/image'
import Input from "@/components/input";
import Hero from '@/components/hero';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Wallpapers from '@/components/wallpapers';

import { Wallpaper } from "@/types/wallpaper";
import { useState,useEffect } from "react";



export default function Home() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
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

  return (
    <div className='w-screen h-screen'>
      <Header />
      <Hero />
      <Input setWallpapers={setWallpapers} />  
      {/* 报错备份Type '{ setWallpapers: Wallpaper[]; }' is not assignable to type 'IntrinsicAttributes'.
          Property 'setWallpapers' does not exist on type 'IntrinsicAttributes'.ts(2322) 
          解决方法：修改 setWallpapers 方法，具体见课程2小时43分
          */}
      <Wallpapers  wallpapers ={wallpapers} setWallpapers={setWallpapers}/>
      <Footer />

    </div>
  )
}
