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

const privacyPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Privacy Policy' />
      {/* Modals */}
      <ModalWithTabs content={content['authentication']} reverse />
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['advertisement']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='4' />
      <Divider space='5' />
      <Container variant=''>
      <h1>Privacy Policy</h1>
	<p>Welcome to the Biga Technologies Ltd website. Your privacy is important to us. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our website.</p>

	<h2>Personal Information We Collect</h2>
	<p>We may collect personal information from you when you:</p>
	<ul>
		<li>Register an account with us</li>
		<li>Submit a contact form</li>
		<li>Sign up for our newsletter</li>
		<li>Make a purchase on our website</li>
	</ul>
	<p>The personal information we may collect includes:</p>
	<ul>
		<li>Name</li>
		<li>Email address</li>
		<li>Phone number</li>
		<li>Mailing address</li>
		<li>Payment information</li>
	</ul>

	<h2>How We Use Your Personal Information</h2>
	<p>We may use your personal information to:</p>
	<ul>
		<li>Process and fulfill your orders</li>
		<li>Communicate with you about our products and services</li>
		<li>Send you promotional emails and newsletters</li>
		<li>Improve our website and services</li>
		<li>Comply with legal obligations</li>
	</ul>

	<h2>Sharing Your Personal Information</h2>
	<p>We do not sell or rent your personal information to third parties. We may share your personal information with:</p>
	<ul>
		<li>Third-party service providers who perform services on our behalf, such as payment processing and shipping</li>
		<li>Law enforcement or other government entities, as required by law or to protect our rights and property</li>
		<li>Other companies within the Biga Technologies Ltd group of companies</li>
	</ul>

	<h2>Cookies and Other Tracking Technologies</h2>
	<p>We use cookies and other tracking technologies to improve your experience on our website and to analyze how our website is used. You can choose to disable cookies through your browser settings, but this may affect your ability to use some features of our website.</p>

	<h2>Security of Your Personal Information</h2>
	<p>We take reasonable measures to protect your personal information from unauthorized access, use, and disclosure. However, no method of transmission over the Internet or method of electronic storage is completely secure, so we cannot guarantee absolute security.</p>

	<h2>Changes to This Privacy Policy</h2>
	<p>We reserve the right to change this Privacy Policy at any time without notice. Your continued use of our website after any changes to this Privacy Policy constitutes your acceptance of the new Privacy Policy.</p>

	<h2>Contact Us</h2>
	<p>If you have any questions about this Privacy Policy or our website, please contact us at privacy@bigapay.com.</p>
      </Container>
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query privacySiteBlockContent {
    allBlockContent(filter: { page: { in: ["homepage/fintech", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default privacyPage

