import React from 'react'
import { Link as GLink } from 'gatsby'
import { Container, Box, Flex } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import PoweredByGatsby from '@solid-ui-components/PoweredByGatsby'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import './styles.css'

const styles = {
  wrapper: {
    position: `relative`,
    bg: `footerBg`
  },
  footer: {
    flexDirection: [`column-reverse`, `row`],
    justifyContent: `space-between`,
    alignItems: [`center`, `flex-start`],
    py: 5
  }


}

const FooterBlock01 = ({ content: { images, collection } }) => {
  return (
    <Box sx={styles.wrapper}>
      <Container px='4'>
        <Flex sx={styles.footer}>
         
          {collection?.map(
            ({ text, buttons }, index) =>
              buttons && (
                <Box key={`item-${index}`} mb='3'>
                  <ContentText
                    content={text?.[0]}
                    variant='h5'
                    sx={{ display: [`none`, `block`] }}
                  />
                  <ContentButtons
                    content={buttons}
                    variant='vertical'
                    wrapperStyles={{
                      flexDirection: [null, `column`],
                      flexWrap: `wrap`,
                      justifyContent: `center`
                    }}
                  />
                </Box>
              )
          )}
        </Flex>
      </Container>
      <Container px='4'  className={`footer_bottom`}>
        <Flex sx={styles.footer} className={`foot-padd`}>
          <div>Copyright © All Rights Reserved By Biga Technologies Ltd.</div>
          <div>
          <GLink to='/privacy-policy' className={`footer_link`}>Privacy Policy</GLink>
          <GLink to='/legal'  className={`footer_link`}>Legal agreement</GLink>
          {/* <a href="#">Terms & Conditions</a> */}
          </div>
      </Flex>
      </Container>
    </Box>
  )
  
}

FooterBlock01.defaultProps = {
  menuJustify: `flex-end`
}

export default WithDefaultContent(FooterBlock01)
