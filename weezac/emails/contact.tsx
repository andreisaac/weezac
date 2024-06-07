import React from 'react'
import { Html, Text, Body, Head, Container, Preview, Tailwind, Img, Section, Link } from '@react-email/components'

type emailProps = {
  name: string,
  organization: string,
}

const email: React.FC<emailProps> = ({name, organization}) => (
  <Html>
      <Head>
      </Head>
      <Preview>Hello {name}, Our team is currently reviewing your quote request.</Preview>
      <Tailwind>
        <Body className="bg-slate-800 font-sans py-8 px-2">
          <Container className="bg-slate-900 rounded-xl text-slate-300" style={{border: "1px solid #64748b"}}>
            <Text className="p-8" style={{fontSize: "24px", lineHeight: "30px"}}>Hello {name}!</Text>
            <Section className='p-8 bg-slate-950 text-slate-300'>
              <Text style={{fontSize: "16px", lineHeight: "26px"}}>Our team is currently reviewing your request and will be in touch shortly to discuss your requirements in more detail. In the meantime, if you have any additional questions or need further information, please do not hesitate to contact us at <Link href="mailto:info@weezac.pt">info@weezac.pt</Link>.</Text>
              <Text style={{fontSize: "16px", lineHeight: "26px"}}>At Weezac, we strive to provide exceptional service and solutions tailored to meet the unique needs of our clients. We are committed to ensuring your satisfaction and exceeding your expectations.</Text>
              <Text style={{fontSize: "16px", lineHeight: "26px"}}>We look forward to the possibility of collaborating with you and contributing to the success of {organization}.</Text>
            </Section>
            <Section className='bg-slate-900 p-8 rounded-xl'>
              <Text style={{fontSize: "16px", lineHeight: "26px"}}>Kind regards,</Text>
              <Text className='my-2' style={{fontSize: "16px", lineHeight: "26px"}}><Link href="weezac.pt" className="text-slate-300">Weezac</Link></Text>
              <Text className='my-0'>André Isaac</Text>
              <Text className='my-0'><Link href="tel:+351914273678" className="text-slate-300">+351914273678</Link></Text>
              <Text className='my-0'><Link href="mailto:andredisaac@weezac.pt" className="text-slate-300">andredisaac@weezac.pt</Link></Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
);

export default  email;