"use client";
import { Input } from "@/components/ui/input";
import { Button} from "@/components/ui/button" ;
import { useState,useEffect } from "react";
export default function () {
  const [description, setDescription]  = useState('');

  const[loading,setLoading] = useState(false);

  const handleSubmit = async function () {
    // 这里可以写一些提交逻辑
    console.log('submit:', description);
    // description.trim() === ''
    if (!description) {
      alert("描述不能为空");
      return;
    }
    // 调用生成壁纸的接口
    await generateWallpaper();
  };
  
  const generateWallpaper = async function () {
    const params ={
       description:description 
    };
    setLoading(true);
    const result = await fetch("api/gen-wallpaper",{
      method:"POST",
      body:JSON.stringify({params}), // 这里需要将参数转换成字符串
    });
    setLoading(false);

    const {data} = await result.json() ;
    if (data) {
        // setWallpapers(data);
        console.log("new_wallpaper",data);
    }
};

  // useEffect(() => {
  //   // 这里可以写一些副作用代码，比如发送请求到后端
  //   console.log('description changed to:', description);
  //   }, [description]);

  return (
    <div className='max-w-xl mx-auto flex item-center'>
    <Input 
    type="text" 
    placeholder="请描述你要生成的壁纸"
    value={description}
    onChange={(e) => setDescription(e.target.value)} // 标准react 数据交互方式
    />
    <Button className='ml-4' onClick={handleSubmit} disabled={loading}>
      {loading ?"生成中...":"生成壁纸"}
    </Button>
    </div>
  );
}
