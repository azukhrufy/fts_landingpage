import Head from "next/head";
import Image from "next/image";
import TopHeader from "@/components/Navbar/TopHeader";
import Ellipse from "../../public/icons/ellips.svg";
import Rectangle from "../../public/icons/rectangle.png";
import Dots from "../../public/icons/dot.svg";
import Google from "../../public/images/Google Logo.png";
import Amazon from "../../public/images/Amazon Logo.png";
import Uber from "../../public/images/Uber Eats Logo.png";
import Airbnb from "../../public/images/Airbnb Logo.png";
import TextContainer from "@/components/TextContainer/TextContainer";
import Jumbotron from "@/components/Jumbotron/Jumbotron";
import Card from "@/components/Card/Card";
import SearchIcon from "../../public/images/searchbox.svg";
import DevIcon from "../../public/images/coding.svg";
import WalletIcon from "../../public/images/wallet.svg";
import ChartIcon from "../../public/images/chart.svg";
import ServiceBg from "../../public/images/service-bg.svg";
import Rect25 from '../../public/images/Rectangle 25.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Future Technology Solution</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Allerta"
        />
      </Head>
      <main>
        <div className="top-content">
          <TopHeader
            content={
              <>
                <p>Home</p>
                <p>What We Do</p>
                <p>Services</p>
                <p>Project</p>
                <p>Blog</p>
                <p>Contact</p>
              </>
            }
          />
          <Jumbotron
            leftContent={
              <>
                <TextContainer
                  gap="gap-10"
                  title="FTS Software Agency"
                  subtitle="Leading digital agency with solid design and development
                    expertise. We build readymade websites, mobile applications,
                    and elaborate online business services."
                />
                <div className="btn-container">
                  <button>Learn More</button>
                </div>
                <div className="dot-container">
                  <img src={Dots.src} />
                </div>
              </>
            }
            rightContent={
              <>
                <div className="icon-ellipse">
                  <img src={Ellipse.src} />
                </div>
                <div className="icon-rect">
                  <img src={Rectangle.src} />
                </div>
                <img
                  src="/images/illustrate.jpg"
                  alt="img"
                />
              </>
            }
          />
        </div>
        <div className="client-section">
          <TextContainer
            gap="gap-4"
            title="Our Clients"
            subtitle="Several selected clients, who already believe in our service."
          />
          <div className="img-container">
            <img src={Google.src} />
            <img src={Amazon.src} />
            <img src={Uber.src} />
            <img src={Airbnb.src} />
          </div>
        </div>
        <div className="services-section">
          <div className="bg-service">
            <img src={ServiceBg.src} />
          </div>
          <div className="hidden xl:absolute xl:flex xl:left-28 xl:bottom-28">
            <img src={Dots.src} />
          </div>
          <div className="hidden xl:absolute xl:flex xl:left-10 xl:top-64">
            <img src={Rect25.src} />
          </div>
          <TextContainer
            gap="gap-8"
            title="How can we help your Business?"
            subtitle="We build readymade websites, mobile applications, and elaborate online business services."
          />
          <div className="card-container">
            <Card icon={SearchIcon.src} color="#F1F7FF">
              <TextContainer
                gap="gap-8"
                title="Business Idea Planning"
                subtitle="We present you a proposal and discuss niffty-gritty like"
              />
            </Card>
            <Card icon={DevIcon.src} color="#FFF2F8">
              <TextContainer
                gap="gap-8"
                title="Development Website and App"
                subtitle="Communication protocols apart from engagement models"
              />
            </Card>
            <Card icon={WalletIcon.src} color="#FFF7E3">
              <TextContainer
                gap="gap-8"
                title="Financial Planning System"
                subtitle="Protocols apart from aengage models, pricing billing"
              />
            </Card>
            <Card icon={ChartIcon.src} color="#DEFFEE">
              <TextContainer
                gap="gap-8"
                title="Market Analysis Project"
                subtitle="Protocols apart from aengage models, pricing billing"
              />
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
