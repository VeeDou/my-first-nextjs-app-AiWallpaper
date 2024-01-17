import { Wallpaper } from "@/types/wallpaper";

async function getData() {
    const result = await fetch("http://localhost:3000/api/get-wallpaper");
    const { data } = await result.json();
    return data;
}

export default async function (){
    const data = await getData();
    // console.log(data)
    return (
    <header>
        <div className='max-w-lg mx-auto'>
            {data.map((v:Wallpaper,idx:number) =>{
                return (
                    <div   key={idx} 
                           className="mx-4">
                        <h2>标题</h2>
                        <img 
                            src={v.img_url} 
                            alt=""  
                            className="inline-block h-60 w-full rounded-md object-cover"/>
                    </div>
                )
            })}
        </div>
        </header>)

}
