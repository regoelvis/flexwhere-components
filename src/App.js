import './App.css';
import Navbar from './components/navbar/Nav-mobile'
import Feature from './components/feature/Feature'
import Services from './components/services/Services'

import img from './assets/images/Picture1.png'
import desk from './assets/images/group-1754.svg';
import backImg from './assets/images/Mask Group 37.svg'

function App() {
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

  return (
    <div className="App" style={{backgroundImage: `url('${backImg}')`, backgroundSize: 'contain' }}>
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
