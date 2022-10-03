import React, {useState} from 'react';
import { Button, Img } from "./Styled"
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
     
     <Img src="assets/topo-pag.svg" onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}}/>
     
    </Button>
  );
}
  
export default ScrollButton;