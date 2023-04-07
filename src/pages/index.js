import { Nav } from "@/components/Nav";
import { Introduction } from "@/components/Introduction";
import { Technology } from "@/components/Technology";
import { Portfolio } from "@/components/Portfolio";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

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
      <Technology/>
      <Portfolio/>
      <Contacts/>
      <Footer/>
    </>
  )
}


