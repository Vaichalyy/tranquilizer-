import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

import AngularImg from 'src/assets/images/angular.jpg'
import ReactImg from 'src/assets/images/react.jpg'
import VueImg from 'src/assets/images/vue.jpg'

// const slidesLight = [
//   'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23AAA%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23F5F5F5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//   'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23BBB%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23EEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//   'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23E5E5E5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
// ]

const Carousels = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>What is Panic Disorder </strong>
          </CCardHeader>
          <CCardBody>
          <p className="text-medium-emphasis small">
          Panic disorder is a type of anxiety disorder characterized by unexpected and recurrent 
          panic attacks. A panic attack is an intense and sudden onset of fear or discomfort that 
          peaks within minutes, and includes symptoms such as rapid heartbeat, sweating, trembling, 
          chest pain, shortness of breath, dizziness, and a sense of impending doom or loss of control.
          </p>

          <p className="text-medium-emphasis small">
          People with panic disorder often experience persistent worry about having future panic attacks 
          and may change their behavior to avoid situations or places that they fear may trigger a panic 
          attack. This avoidance can interfere with their daily activities and relationships, and can lead 
          to depression or other mental health problems.
          </p>

          <p className="text-medium-emphasis small">
          Panic disorder is treatable with a combination of medications and psychotherapy, and people with 
          this condition can lead fulfilling and productive lives with proper management of their symptoms
          </p>
         
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>How to Prevent Panic Disorder</strong>
          </CCardHeader>
          <CCardBody>
          <p className="text-medium-emphasis small">
          There are several ways to prevent panic disorder or reduce the frequency and intensity of panic attacks:
          </p>

          <p className="text-medium-emphasis small">
          <strong>1.</strong> Practice relaxation techniques: Deep breathing, progressive muscle relaxation, meditation, and yoga are effective 
          relaxation techniques that can help reduce stress and anxiety
          </p>

          <p className="text-medium-emphasis small">
          <strong>2.</strong> Exercise regularly: Physical activity can improve your overall health and help you manage stress and anxiety. 
          Aim for at least 30 minutes of moderate-intensity exercise most days of the week.</p>

          <p className="text-medium-emphasis small">
          <strong>3.</strong> Avoid caffeine, alcohol, and nicotine: These substances can trigger panic attacks in some people, so it's 
          best to limit or avoid them altogether.
          </p>

          <p className="text-medium-emphasis small">
          <strong>4.</strong> Get enough sleep: Lack of sleep can increase stress and anxiety levels, so it's important to get enough 
          sleep each night. Aim for 7-8 hours of sleep per night.
          </p>

          <p className="text-medium-emphasis small">
          <strong>5.</strong> Eat a healthy diet: A balanced diet with plenty of fruits, vegetables, whole grains, and lean protein can 
          help reduce stress and anxiety.
          </p>

          <p className="text-medium-emphasis small">
          <strong>6.</strong> Seek support: If you are experiencing panic attacks or anxiety, talk to a trusted friend or family member, 
          or seek professional help from a therapist or counselor.
          </p>

          <p className="text-medium-emphasis small">
          <strong>7.</strong> Learn stress management techniques: Stress can trigger panic attacks, so it's important to learn stress management 
          techniques like time management, prioritization, and relaxation techniques.
          </p>


         
          </CCardBody>
        </CCard>
      </CCol>

          
            {/* <DocsExample href="components/carousel">
              <CCarousel>
                <CCarouselItem>
                  <img className="d-block w-100" src={ReactImg} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={AngularImg} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={VueImg} alt="slide 3" />
                </CCarouselItem>
              </CCarousel>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Carousel</strong> <small>With controls</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Adding in the previous and next controls by <code>controls</code> property.
            </p>
            <DocsExample href="components/carousel/#with-controls">
              <CCarousel controls>
                <CCarouselItem>
                  <img className="d-block w-100" src={ReactImg} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={AngularImg} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={VueImg} alt="slide 3" />
                </CCarouselItem>
              </CCarousel>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Carousel</strong> <small>With indicators</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              You can attach the indicators to the carousel, lengthwise the controls, too.
            </p>
            <DocsExample href="components/carousel/#with-indicators">
              <CCarousel controls indicators>
                <CCarouselItem>
                  <img className="d-block w-100" src={ReactImg} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={AngularImg} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={VueImg} alt="slide 3" />
                </CCarouselItem>
              </CCarousel>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Carousel</strong> <small>With captions</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              You can add captions to slides with the <code>&lt;CCarouselCaption&gt;</code> element
              within any <code>&lt;CCarouselItem&gt;</code>. They can be immediately hidden on
              smaller viewports, as shown below, with optional{' '}
              <a href="https://coreui.io/4.0/utilities/display">display utilities</a>. We hide them
              with <code>.d-none</code> and draw them back on medium-sized devices with{' '}
              <code>.d-md-block</code>.
            </p>
            <DocsExample href="components/carousel/#with-captions">
              <CCarousel controls indicators>
                <CCarouselItem>
                  <img className="d-block w-100" src={ReactImg} alt="slide 1" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={AngularImg} alt="slide 2" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={VueImg} alt="slide 3" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
              </CCarousel>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Carousel</strong> <small>Crossfade</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add <code>transition=&#34;crossfade&#34;</code> to your carousel to animate slides
              with a fade transition instead of a slide.
            </p>
            <DocsExample href="components/carousel/#crossfade">
              <CCarousel controls transition="crossfade">
                <CCarouselItem>
                  <img className="d-block w-100" src={ReactImg} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={AngularImg} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={VueImg} alt="slide 3" />
                </CCarouselItem>
              </CCarousel>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Carousel</strong> <small>Dark variant</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add <code>dark</code> property to the <code>CCarousel</code> for darker controls,
              indicators, and captions. Controls have been inverted from their default white fill
              with the <code>filter</code> CSS property. Captions and controls have additional Sass
              variables that customize the <code>color</code> and <code>background-color</code>.
            </p>
            <DocsExample href="components/carousel/#dark-variant">
              <CCarousel controls indicators dark>
                <CCarouselItem>
                  <img className="d-block w-100" src={slidesLight[0]} alt="slide 1" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slidesLight[1]} alt="slide 2" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slidesLight[2]} alt="slide 3" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
              </CCarousel>
            </DocsExample> */}
          {/* </CCardBody> */}
    {/* //     </CCard> */}
     {/* </CCol> */}
     </CRow>
  )
}

export default Carousels
