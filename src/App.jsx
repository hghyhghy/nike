
import Nav from "./components/Nav"
import { 
  Hero,
  Footer,
  Popularproducts,
  Services,
  Specialoffer,
  Subscribe,
  Superquality,
  Customereviews
} from "./sections"

const App = () => (

// () for immediate return
    <main className="relative ">

      <Nav/>

      <section className= " xl:padding-l wide:padding-r padding-b">
          <Hero/>
      </section>

      <section className=" padding">

        <Popularproducts/> 


      </section>
      <section className=" padding">


         <Superquality/> 


        </section>
        <section className="py-10 padding-x">

        <Services/> 


        </section> 
        <section className=" padding">

        <Specialoffer/>


        </section>

        <section className=" padding bg-pale-blue">

          <Customereviews/>


          </section>
          <section className="w-full py-16 padding-x sm:py-32">

           <Subscribe/>


        </section>
        <section className="pb-8 bg-black padding-x padding-t">

        <Footer/>


        </section>

          

    </main>

)

export default App