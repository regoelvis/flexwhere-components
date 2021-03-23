//feature data
import desk from '../assets/images/ICON_Desk booking.svg';
import img from '../assets/images/Picture1.png'

//story images
import man from '../assets/images/mask-group-44.png'
import logo from '../assets/images/logo.svg'

//mock data for the features  
export const featureData = {
    data : [
      {
        type: "row",
        img: img,
        title:"Feature 1, with icon and 2 lines",
        featureImg: desk,
        featureName: "Desk booking",
        description: "Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text",
        more: true
      },{
        type: "reverse",
        img: img,
        title:"Feature 1, with icon and 2 lines",
        featureImg: desk,
        featureName: "Desk booking",
      },
      {
        type: "row",
        img: img,
        featureName: "Desk booking",
        description: "Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text",
      },
      {
        type: "reverse",
        img: img,
        featureName: "The use of FlexWhere provides us with extra square meters of workspace",
        description: "Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text Normal body text",
      }
    ]
  }

  //data for story
export const storyData = {
    img: man,
    logo: logo,
    title: "“The use of FlexWhere provides us with extra square meters of workspace”",
    company : "P. Persoon, Gemeente Deventer",
    moreText : "Read more customers stories"
  }
