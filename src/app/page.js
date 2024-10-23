
import HomeAbout from "@/components/HomeAbout";
import HomeBanner from "@/components/HomeBanner";
import HomeCreate from "@/components/HomeCreate";
import HomeServices from "@/components/HomeServices";
import HomeTestimonial from "@/components/HomeTestimonial";

export default function Home() {
  return (
   <main>
    <HomeBanner/>
    <HomeAbout />
    <HomeServices />
    <HomeTestimonial />
    <HomeCreate/>
   </main>
  );
}
