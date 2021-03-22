import './App.css';
import Navbar from './components/navbar/Nav-mobile'
import Feature from './components/feature/Feature'
import Story from './components/customerstory/Story'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'

//features images
import backImgMobile from './assets/images/mobile/Mask Group 37.png'
import backImgDesktop from './assets/images/Mask.png'

import {featureData, storyData} from '../src/resources/values'

function App() {

  const features = featureData.data.map(feature => <Feature type={feature?.type} img={feature?.img} title={feature?.title} featureImg={feature?.featureImg} featureName={feature?.featureName} description={feature?.description} more={feature?.more} />)

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
