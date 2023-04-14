import { Nav } from "@/components/Nav";
import { Introduction } from "@/components/Introduction";
import { Technology } from "@/components/Technology";
import { Portfolio } from "@/components/Portfolio";
import { Optin } from "@/components/Optin";
import { Footer } from "@/components/Footer";
import { BenefitsPage } from "@/components/BenefitsPage";

export default function Home() {

  // //SPINNER-IMAGE LOGIC
  // //TODO correggere
  // const [imageLoaded, setImageLoaded] = useState(false);
  // const handleImageLoad = () => {
  //   setImageLoaded(true);
  //   console.log("Image Loaded")
  // };

  return (
    <>
      {/*<SpinnerLoader imageLoaded={imageLoaded}/>*/}
      <Nav/>
      <Introduction/>
      <BenefitsPage/>
      <Technology/>
      <Portfolio/>
      <Optin/>
      <Footer/>
    </>
  )
}


