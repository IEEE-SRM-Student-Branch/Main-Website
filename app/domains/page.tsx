import {
  getAlumini,
  getComsoc,
  getCorp,
  getIas,
  getMnc,
  getPels,
  getPublicity,
  getRnd,
  getSponsorship,
  getWad,
  getWie,
} from "@/sanity/utils/fetchData";
import Domain from "./Domain";

export default async function Domains() {
  const corps = await getCorp();
  const wads = await getWad();
  const comsoc = await getComsoc();
  const publicity = await getPublicity();
  const mnc = await getMnc();
  const sponsership = await getSponsorship();
  const ias = await getIas();
  const rnd = await getRnd();
  const pels = await getPels();
  const wie = await getWie();
  const alumini = await getAlumini();

  return (
    <>
      <Domain
        slogan="EAT . SLEEP . CODE . REPEAT"
        domainTitle="Corporate Relations"
        about="The Corporate Relations team is responsible for establishing and maintaining a strong relationship with the industry. The team is responsible for the sponsorship of the events and the overall functioning of the club. The team is also responsible for the smooth conduction of the events and workshops."
        data={corps}
      />
      <Domain
        slogan="EAT . SLEEP . CODE . REPEAT"
        domainTitle="Web & App Development"
        about="We, the Full Stack Developers at IEEE, aim to deliver value to our users by incorporating high-end technologies with the team's skills to provide cognitive solutions. We assist our members to bring about advancements in technical skills and facilitate innovativeness. We also manage all the social media handles of IEEE SRM keeping it new-fangled and fresh along with furtherance across various interfaces. This domain is a juvenile team of the quick-witted at IEEE SRM SB, founded this very year, 2020."
        data={wads}
      />
      <Domain
        slogan="EAT . SLEEP . CODE . REPEAT"
        domainTitle="Computer Society"
        about="The Computer Society team is responsible for the smooth conduction of the events and workshops. The team is also responsible for the development of the official app of the club. The team is also responsible for the smooth conduction of the events and workshops."
        data={comsoc}
      />
      <Domain
        slogan="EAT . SLEEP . CODE . REPEAT"
        domainTitle="Publicity"
        about="Publicity Team at IEEE SRM is the brain of IEEE. The team provides optimistic strategies and plans the implementation for all other domains with it's creative ideas. With the modern growing world, the team shapes new plans for the upcoming campaigns and events happening at IEEE and also works in publicizing the events to connect our resources to young minds who are getting ready to shape the world with new technologies."
        data={publicity}
      />
      <Domain
        slogan="EAT . SLEEP . CODE . REPEAT"
        domainTitle="Media and Content"
        about="Media and Content Team at IEEE SRM also known as the face of IEEE. The team comprises of the most outwit Content Writers and can amuse you with their remarkable use of word power. Along with them, we have the best in class Designers, who can put down an inconceivable idea onto your digital screen with the use of some sophisticated software or you may call it a Magic Wand."
        data={mnc}
      />
      <Domain
        slogan="EAT . SLEEP . CODE . REPEAT"
        domainTitle="Sponsorship"
        about="Sponsorship and marketing at IEEE SRM focuses on the powerful marketing strategy which helps in bringing up meaningful access to our event audience ,creates positive public relations ,allow you to be more creative about how your objectives can be met and raise awareness of the organization as a whole."
        data={sponsership}
      />
      <Domain
        slogan="EAT . SLEEP . CODE . REPEAT"
        domainTitle="IAS"
        about="The Industry Applications Society, as a transnational organization, is interested in advancement of the theory and practice of electrical and electronic engineering in the development, design, manufacture and application of electrical systems, apparatus, devices and controls to the processes and equipment of industry and commerce; promotion of safe, reliable and economic installations."
        data={ias}
      />
      <Domain
        slogan="EAT . SLEEP . CODE . REPEAT"
        domainTitle="Research and Development"
        about="Research and Development at IEEE SRM aims to inculcate in its members the desire to find and solve the diverse problems around us, and empowers them with the skill to do so, taking humanity forward, towards a better and more advanced future. We build what we dream.."
        data={rnd}
      />
      <Domain
        slogan="EAT . SLEEP . CODE . REPEAT"
        domainTitle="Power Electronics Society "
        about="The Power Electronics Society's main aim is to provide scientific and engineering information on electric power and enery to benefit society and to help the members to be an element of professional development. We are dedicated to upholding the vital scientific and educational aspects of power electronics and its applications."
        data={pels}
      />
      <Domain
        slogan="EAT . SLEEP . CODE . REPEAT"
        domainTitle="Women in Engineering"
        about="Women in Engineering (WIE) at IEEE SRM is dedicated to promoting women engineers and inspiring girls to follow their academic interests to a career in engineering by encouraging them, guiding them and celebrating their achievements. IEEE WIE members make lifelong friendships, acquire influential mentors, and make a difference for the benefit of humanity."
        data={wie}
      />
      <Domain
        slogan="EAT . SLEEP . CODE . REPEAT"
        domainTitle="Alumini, Legends of the IEEE"
        about="Alumini"
        data={alumini}
      />
    </>
  );
}
