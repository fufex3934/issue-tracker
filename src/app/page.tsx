import Image from "next/image";

export default function Home() {
  return (
   <div className=" ">
    <div className="mockup-phone border-primary">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1">Hello World.</div>
  </div>
</div>
<div className="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
  <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
  <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
</div>
<div className="avatar online">
  <div className="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div className="avatar offline">
  <div className="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
   </div>

  );
}
