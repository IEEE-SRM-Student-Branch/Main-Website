import {
  getComsoc,
  getCorp,
  getIas,
  getMnc,
  getPublicity,
  getSponsorship,
  getWad,
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
        about="The Web and App Development team is responsible for the development and maintenance of the official website of the club. The team is also responsible for the development of the official app of the club. The team is also responsible for the smooth conduction of the events and workshops."
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
        about="The Publicity team is responsible for the smooth conduction of the events and workshops. The team is also responsible for the development of the official app of the club. The team is also responsible for the smooth conduction of the events and workshops."
        data={publicity}
      />
      <Domain
        slogan="EAT . SLEEP . CODE . REPEAT"
        domainTitle="Media and Content"
        about="The Media and Content team is responsible for the smooth conduction of the events and workshops. The team is also responsible for the development of the official app of the club. The team is also responsible for the smooth conduction of the events and workshops."
        data={mnc}
      />
      <Domain
        slogan="EAT . SLEEP . CODE . REPEAT"
        domainTitle="Sponsorship"
        about="The Sponsorship team is responsible for the smooth conduction of the events and workshops. The team is also responsible for the development of the official app of the club. The team is also responsible for the smooth conduction of the events and workshops."
        data={sponsership}
      />
      <Domain
        slogan="EAT . SLEEP . CODE . REPEAT"
        domainTitle="IAS"
        about="The IAS team is responsible for the smooth conduction of the events and workshops. The team is also responsible for the development of the official app of the club. The team is also responsible for the smooth conduction of the events and workshops."
        data={ias}
      />
    </>
  );
}
