import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import PresentationSection from './components/PresentationSection';
import DownloadSection from './components/DownloadSection';
import UpdateNews from './components/UpdateNews';
import { initialTestimonialList } from './data/initialTestimonialList';
import { initialNewsList } from './data/initialNewsList';
import Footer from './components/Footer';


function App() {

  const [ testimonialList, setTestimonialList ] = useState(initialTestimonialList)

  const [ news, setNews ] = useState(initialNewsList)

  return (
    <div>
     <Header/>
     <HomeSection/>
     <PresentationSection testimonialList={testimonialList}/>
     <DownloadSection/>
     <UpdateNews news={news}/>
     <Footer/>
    </div>
  );
}

export default App;
