import React from 'react'
import {
  CAlert,
  CAlertHeading,
  CAlertLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Alerts = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>ABOUT US</strong>
          </CCardHeader>
          <CCardBody>
            <p >
            We are second year students of IIT. This website was created for the Software Development Group Project module related to the
             second year. For that we are doing this project as a group.</p>
             <p>
             This project is done by Vaichalya, Smithy, Minura, Pankaja. Through this site you can check your enthusiasm level while playing 
             the game.
             </p>
             <p>
             As a result, TeamNotFound proposed a 
              system to implement with the help of these technologies. TRANQUILIZER's website includes ML 
              and DL. The TRANQUILIZER website helps the people who are suffering from this issue by 
              analyzing their anxiety and displaying their anxiety level with the game they play, tracking dayto-day improvements in 
              their anxiety, and providing an online meditation tool, games, and mindrelaxing exercises. TRANQUILIZER hopes to find an 
              efficient way to overcome this problem.
             </p>
          </CCardBody>
        </CCard>
      </CCol>
      {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Alert</strong> <small>Link color</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Use the <code>&lt;CAlertLink&gt;</code> component to immediately give matching colored
              links inside any alert.
            </p>
            <DocsExample href="components/alert#link-color">
              <CAlert color="primary">
                A simple primary alert with <CAlertLink href="#">an example link</CAlertLink>. Give
                it a click if you like.
              </CAlert>
              <CAlert color="secondary">
                A simple secondary alert with <CAlertLink href="#">an example link</CAlertLink>.
                Give it a click if you like.
              </CAlert>
              <CAlert color="success">
                A simple success alert with <CAlertLink href="#">an example link</CAlertLink>. Give
                it a click if you like.
              </CAlert>
              <CAlert color="danger">
                A simple danger alert with <CAlertLink href="#">an example link</CAlertLink>. Give
                it a click if you like.
              </CAlert>
              <CAlert color="warning">
                A simple warning alert with <CAlertLink href="#">an example link</CAlertLink>. Give
                it a click if you like.
              </CAlert>
              <CAlert color="info">
                A simple info alert with <CAlertLink href="#">an example link</CAlertLink>. Give it
                a click if you like.
              </CAlert>
              <CAlert color="light">
                A simple light alert with <CAlertLink href="#">an example link</CAlertLink>. Give it
                a click if you like.
              </CAlert>
              <CAlert color="dark">
                A simple dark alert with <CAlertLink href="#">an example link</CAlertLink>. Give it
                a click if you like.
              </CAlert>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Alert</strong> <small>Additional content</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Alert can also incorporate supplementary components &amp; elements like heading,
              paragraph, and divider.
            </p>
            <DocsExample href="components/alert#additional-content">
              <CAlert color="success">
                <CAlertHeading tag="h4">Well done!</CAlertHeading>
                <p>
                  Aww yeah, you successfully read this important alert message. This example text is
                  going to run a bit longer so that you can see how spacing within an alert works
                  with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep things nice and
                  tidy.
                </p>
              </CAlert>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Alert</strong> <small>Dismissing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Alerts can also be easily dismissed. Just add the <code>dismissible</code> prop.
            </p>
            <DocsExample href="components/alert#dismissing">
              <CAlert
                color="warning"
                dismissible
                onClose={() => {
                  alert('👋 Well, hi there! Thanks for dismissing me.')
                }}
              >
                <strong>Go right ahead</strong> and click that dimiss over there on the right.
              </CAlert>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}
    </CRow>
  )
}

export default Alerts
