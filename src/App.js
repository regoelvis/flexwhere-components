import './App.css';
import Navbar from './components/navbar/Nav-mobile'
import Feature from './components/feature/Feature'
import Story from './components/customerstory/Story'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'

//features images
import img from './assets/images/Picture1.png'
import desk from './assets/images/ICON_Desk booking.svg';
import backImgMobile from './assets/images/mobile/Mask Group 37.png'
import backImgDesktop from './assets/images/Mask.png'

//story images
import man from './assets/images/mask-group-44.png'
import logo from './assets/images/Topdesk.png'

function App() {
  //mock data for the features  
  const featureData = {
    data : [
      {
        type: "row",
        img: "img.jpg",
        title:"Feature 1, with icon and 2 lines",
        featureImg: desk,
        featureName: "Desk booking",
        description: "Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text",
        more: true
      },{
        type: "reverse",
        img: "img.jpg",
        title:"Feature 1, with icon and 2 lines",
        featureImg: desk,
        featureName: "Desk booking",
      },
      {
        type: "row",
        img: "img.jpg",
        featureName: "Desk booking",
        description: "Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text",
      },
      {
        type: "row",
        img: "img.jpg",
        featureName: "The use of FlexWhere provides us with extra square meters of workspace",
      }
    ]
  }

  const storyData = {
    img: man,
    logo: logo,
    title: "“The use of FlexWhere provides us with extra square meters of workspace”",
    company : "P. Persoon, Gemeente Deventer",
    moreText : "Read more customers stories"
  }

  const features = featureData.data.map(feature => <Feature type={feature?.type} img={img} title={feature?.title} featureImg={feature?.featureImg} featureName={feature?.featureName} description={feature?.description} more={feature?.more} />)

  /**
   * Declare all the parent/components here
   * 
   * background image is based on window width
   */
  return (
    <div className="App" style={{backgroundImage: `url('${ window.innerWidth<578? backImgMobile : backImgDesktop}')`, backgroundSize: 'cover' }}>
      <Navbar />
      {features}
      <Story data={storyData} />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
