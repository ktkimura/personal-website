import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ProjectsSection from "components/ProjectsSection";

const homeSectionStyle =
  "h-screen flex flex-col justify-center items-center snap-start p-8";
const regSectionStyle =
  "h-screen flex flex-col justify-flex-start pt-5 items-center snap-start p-8";
const sectionDivStyle = "w-full md:w-1/2";

export default function Home() {
  return (
    <div className="flex flex-col h-screen font-semibold">
      <Navbar />
      <main className="overflow-auto snap-y snap-mandatory h-screen w-full">
        <section className={`${homeSectionStyle}`}>
          <div className={`text-center ${sectionDivStyle} relative`}>
            <img
              src="/images/koi_duocolor.png"
              alt="Top Right Decoration"
              className="absolute top-0 right-0 w-24 h-24 object-contain pointer-events-none select-none rotate-160 scale-200 hidden md:block"
              style={{ transform: "translate(-50%, 25%)" }}
            ></img>
            <h1 className="text-5xl md:text-7xl mb-6 font-semibold">
              Working to build digital interfaces where no user is left out or
              left behind.
            </h1>
            <p className="font-medium text-md md:text-xl">
              Hi there! My name is Katie Kimura, a 4th year computer science
              student at Oregon State University and advocate for user
              experience. I am passionate about coding, designing, and improving
              others' experiences with technology, no matter how small of an
              impact.
            </p>
            <img
              src="/images/koi_tricolor.png"
              alt="Bottom Left Decoration"
              className="absolute bottom-0 left-0 w-24 h-24 object-contain pointer-events-none select-none scale-200 hidden md:block"
              style={{ transform: "translate(-50%, 25%)" }}
            ></img>
          </div>
        </section>
        <section id="projects" className={`${regSectionStyle}`}>
          <div className={`${sectionDivStyle} pt-10`}>
            <h1 className="text-center text-4xl mb-6">Projects</h1>
            <ProjectsSection />
          </div>
        </section>
        {/* <section id="about" className={`${regSectionStyle}`}>
          <div className={`${sectionDivStyle} pt-15`}>
            <h1 className="text-center text-4xl mb-6">About</h1>
            <img
              src="/images/katieKimuraHeadshot2025.jpg"
              alt="Katie Kimura"
              className="rounded-full w-48 h-48 mx-auto mb-6 object-cover"
            ></img>
            <p></p>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
