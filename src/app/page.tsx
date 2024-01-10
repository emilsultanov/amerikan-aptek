import Section_0 from "@/sections/section_0/Section_0";
import Section_1 from "@/sections/section_1/Section_1";
import Section_2 from "@/sections/section_2/Section_2";
import Section_3 from "@/sections/section_3/Section_3";
import Section_4 from "@/sections/section_4/Section_4";


export default function Home() {
  return (
    <div className={'h-full'}>
      <Section_0 />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
    </div>
  )
}
