import React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo';
import { PageHeader, Banner, Section, Title, InfoWrapper } from '../utils';
import aboutBcg from '../images/bcg/aboutBcg.jpg';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader img={aboutBcg}>
      <Banner title='about us' subtitle='time to face reality'></Banner>
    </PageHeader>
    <Section>
      <Title title='our mission' message='behold - this is' />
      <InfoWrapper>
        <p className='text'>Celiac farm-to-table subway tile ut tousled excepteur. Tumeric hammock retro commodo, cliche drinking vinegar tousled fixie deep v master cleanse excepteur iPhone narwhal twee. XOXO portland tofu, deserunt tousled shaman asymmetrical eiusmod listicle typewriter bitters freegan. Sartorial gochujang selvage echo park cold-pressed deserunt, excepteur tilde meggings air plant taiyaki kogi lo-fi. Live-edge non quis commodo squid adipisicing taiyaki in man braid sustainable drinking vinegar mixtape. Non poke fixie, quis paleo migas four dollar toast humblebrag single-origin coffee consequat qui knausgaard.</p>
        <p className='text'>Jianbing nostrud ex taiyaki pickled YOLO enim wayfarers freegan. Tofu artisan selfies selvage eiusmod plaid hell of kogi flannel whatever kitsch. Commodo skateboard pitchfork consectetur. Bespoke blog labore unicorn. 8-bit lorem 90's celiac raclette food truck.</p>
        <p className='text'>Ullamco farm-to-table lorem cillum, biodiesel disrupt reprehenderit freegan. Hella fugiat in chartreuse aute, skateboard nostrud letterpress tumeric shoreditch hashtag butcher sustainable laboris. Neutra kinfolk street art ut kale chips roof party nostrud non quinoa. Adaptogen deep v woke intelligentsia tumeric semiotics in culpa scenester. Intelligentsia dreamcatcher palo santo, thundercats YOLO poke man bun reprehenderit pitchfork kinfolk laborum pop-up cillum fanny pack. Poutine tattooed waistcoat, meditation health goth narwhal twee voluptate lumbersexual wolf gluten-free lomo. Lorem XOXO in typewriter do, farm-to-table waistcoat cardigan green juice blog bushwick.</p>
      </InfoWrapper>
    </Section>

  </Layout>
)

export default AboutPage
