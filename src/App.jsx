import './App.css'
import Animation from './component/animation/Animation';
import Footer from './component/footer/Footer';
import Nav from './component/nav/Nav';
import Pages from './component/pages/Pages';
import Question from './component/question/Question';
import Route from './component/routes/Route';
import Section1 from './component/section1/Section1';
import Section2 from './component/section2/Section2';
import Section3 from './component/section3/Section3';
import Section4 from './component/section4/Section4';
import Section5 from './component/section5/Section5';
import Section6 from './component/section6/Section6';
import Section7 from './component/section7/Section7';
import Section8 from './component/section8/Section8';
import Sidebar from './component/sidebar/Sidebar';


function App() {

  return (
    <>
      <Sidebar/>
      <Nav/>
      <Pages/>
      <Route/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Question/>
      <Animation/>
      <Footer/>
    </>
  )
}

export default App;
 