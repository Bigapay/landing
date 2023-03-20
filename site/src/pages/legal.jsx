import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import FeatureThree from '@solid-ui-blocks/FeaturesWithPhoto/Block03'
import FeatureThreeMore from '@solid-ui-blocks/Features/Block06'
import Blog from '@solid-ui-blocks/Blog/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import theme from './_theme'
import styles from './_styles'

const termsPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Terms and Conditions' />
      {/* Modals */}
      <ModalWithTabs content={content['authentication']} reverse />
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['advertisement']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='4' />
      <Divider space='5' />
      <Container variant=''>
      <h1>Terms and Conditions</h1>
	<p>Welcome to the Biga Technologies Ltd website. By using our website, you agree to be bound by these terms and conditions.</p>

	<h2>Use of the Website</h2>
	<p>You may use our website only for lawful purposes and in accordance with these terms and conditions. You agree not to use our website:</p>
	<ul>
		<li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
		<li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
		<li>To impersonate or attempt to impersonate Biga Technologies Ltd, a Biga Technologies Ltd employee, another user, or any other person or entity.</li>
		<li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website, or which, as determined by us, may harm Biga Technologies Ltd or users of the website or expose them to liability.</li>
	</ul>

	<h2>Intellectual Property</h2>
	<p>The content, features, and functionality of our website are owned by Biga Technologies Ltd and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as follows:</p>
	<ul>
		<li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
		<li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
	</ul>

	<h2>Disclaimer of Warranties</h2>
	<p>Biga Technologies Ltd makes no representations or warranties about the accuracy, completeness, or suitability of the information contained on our website. All information is provided "as is" without warranty of any kind. You use the information and content on our website at your own risk.</p>

	<h2>Limitation of Liability</h2>
	<p>Biga Technologies Ltd will not be liable for any damages of any kind arising from the use of our website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.</p>

	<h2>Changes to These Terms and Conditions</h2>
	<p>We reserve the right to change these terms and conditions at any time without notice. Your continued use of our website after any changes to these terms and conditions constitutes your acceptance of the new terms and conditions.</p>

	<h2>Contact Us</h2>
	<p>If you have any questions about these terms and conditions or our website, please contact us at info@bigapay.com.</p>
      </Container>
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query termsSiteBlockContent {
    allBlockContent(filter: { page: { in: ["homepage/fintech", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default termsPage

