import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Accordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>What is Social Anxiety Disorder </strong>
          </CCardHeader>
          <CCardBody>
          <p className="text-medium-emphasis small">
          Social anxiety disorder (SAD), also known as social phobia, is a mental health condition characterized by 
          intense fear or anxiety of social situations where the individual may be evaluated, judged, or scrutinized by 
          others. People with social anxiety disorder may worry excessively about doing or saying something embarrassing, 
          or fear being humiliated or rejected by others. This fear can be so strong that it interferes with their daily 
          life, making it difficult to attend social events, speak up in meetings, or even leave their house.
          </p>

          <p className="text-medium-emphasis small">
          There are several ways to prevent panic disorder or reduce the frequency and intensity of panic attacks:
          </p>

          <p className="text-medium-emphasis small">
          <strong>1.</strong> Excessive sweating, blushing, or trembling
          </p>

          <p className="text-medium-emphasis small">
          <strong>2.</strong> Rapid heartbeat or palpitations
          </p>

          <p className="text-medium-emphasis small">
          <strong>3.</strong> Difficulty speaking or making eye contact
          </p>

          <p className="text-medium-emphasis small">
          <strong>4.</strong> Avoiding social situations or events
          </p>

          <p className="text-medium-emphasis small">
          <strong>5.</strong> Worrying for days or weeks before a social event
          </p>

          <p className="text-medium-emphasis small">
          <strong>6.</strong> Panic attacks
          </p>

          
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>How to Prevent Social Anxiety Disorder? </strong>
          </CCardHeader>
          <CCardBody>
          <p className="text-medium-emphasis small">
          Social anxiety disorder can be a debilitating condition, but it is treatable with therapy, 
          medication, or a combination of both. It's important to seek help from a mental health professional 
          if you're experiencing symptoms of social anxiety disorder
          </p>

          <p className="text-medium-emphasis small">
          <strong>1.</strong> Challenge negative thoughts: Learn to identify and challenge negative thoughts that contribute to 
          feelings of anxiety or fear. Practice positive self-talk and focus on your strengths and successes rather than dwelling on 
          perceived weaknesses or failures.
          </p>

          <p className="text-medium-emphasis small">
          <strong>2.</strong> Exercise regularly: Physical exercise is known to reduce stress, anxiety, and depression. Incorporate 
          regular exercise into your routine to improve your mood and overall wellbeing.
          </p>

          <p className="text-medium-emphasis small">
          <strong>3.</strong> Practice relaxation techniques: Learn and practice relaxation techniques such as deep breathing, 
          meditation, or yoga to reduce stress and anxiety.
          </p>

          <p className="text-medium-emphasis small">
          <strong>4.</strong> Seek professional help: If you have a family history of anxiety or depression, or if you are experiencing 
          symptoms of social anxiety disorder, seek professional help from a mental health professional. Early intervention and treatment 
          can prevent the condition from worsening.
          </p>

          <p className="text-medium-emphasis small">
          Remember, social anxiety disorder is a treatable condition. Don't hesitate to seek help if you're experiencing symptoms that 
          interfere with your daily life.
          </p>
         
         
          </CCardBody>
        </CCard>
      </CCol>
      {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Social Anxiety Disorder</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Click the accordions below to expand/collapse the accordion content.
            </p>
            <DocsExample href="components/accordion">
              <CAccordion activeItemKey={2}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong> <small>Flush</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add <code>flush</code> to remove the default <code>background-color</code>, some
              borders, and some rounded corners to render accordions edge-to-edge with their parent
              container.
            </p>
            <DocsExample href="components/accordion#flush">
              <CAccordion flush>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong> <small>Always open</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add <code>alwaysOpen</code> property to make accordion items stay open when another
              item is opened.
            </p>
            <DocsExample href="components/accordion#flush">
              <CAccordion alwaysOpen>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}
    </CRow>
  )
}

export default Accordion
