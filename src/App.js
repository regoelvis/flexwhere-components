import './App.css';
import Navbar from './components/navbar/Nav-mobile'
import Feature from './components/feature/Feature'
import Services from './components/services/Services'

import img from './assets/images/Picture1.png'
import desk from './assets/images/ICON_Desk booking.svg';
import backImgMobile from './assets/images/mobile/Mask Group 37.png'
import backImgDesktop from './assets/images/Mask.png'

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

  const features = featureData.data.map(feature => <Feature type={feature?.type} img={img} title={feature?.title} featureImg={feature?.featureImg} featureName={feature?.featureName} description={feature?.description} more={feature?.more} />)

  /**
   * Declare all the parent/components here
   * 
   * background image is based on window width
   */
  return (
    <div className="App" style={{backgroundImage: `url('${ window.innerWidth<578? backImgMobile : backImgDesktop}')`, backgroundSize: 'cover' }}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap');
      </style>
      <Navbar />
      {features}
      <Services />
    </div>
  );
}

export default App;
