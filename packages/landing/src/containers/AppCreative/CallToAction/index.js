import React from 'react';

import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Link from 'next/link';
import illustration from 'common/assets/image/appCreative/shapeLeft1.png';
import illustration2 from 'common/assets/image/appCreative/shapeRight1.png';
import SectionWrapper, {
  Content,
  ButtonWrap,
  ContentWrap,
} from './callToAction.style';

const CallToAction = () => {
  return (
    <SectionWrapper>
      <Container>
        <Content>
          <img src={illustration?.src} alt="shape" />
          <img src={illustration2?.src} alt="shape" />
          <ContentWrap>
            <Heading
              as="h3"
              content="Does your Enterprise need more features and support?"
            />
            <Link href="/contact-sales">
            <a className="">
            <ButtonWrap>
                  <Button title="Contact Sales" />
            </ButtonWrap>
             </a>
             </Link>
          </ContentWrap>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default CallToAction;
