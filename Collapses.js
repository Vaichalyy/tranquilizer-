import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const Collapses = () => {
  const [visible, setVisible] = useState(false)
  const [visibleHorizontal, setVisibleHorizontal] = useState(false)
  const [visibleA, setVisibleA] = useState(false)
  const [visibleB, setVisibleB] = useState(false)

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>What is specific phobias</strong>
          </CCardHeader>
          <CCardBody>
          <p className="text-medium-emphasis small">
          Specific phobias, also known as simple phobias, are a type of anxiety disorder characterized by an excessive 
          and persistent fear of a specific object, situation, or activity that poses little or no actual danger. The fear is 
          typically disproportionate to the actual level of threat posed by the phobic stimulus and can significantly interfere with 
          a person's daily life.

          </p>

          <p className="text-medium-emphasis small">
          Some common types of specific phobias include fear of animals (such as spiders or snakes), fear of heights, fear of enclosed 
          spaces (such as elevators), fear of flying, fear of needles or blood, fear of certain foods or textures, and fear of thunderstorms.

          </p>

          <p className="text-medium-emphasis small">
          The symptoms of specific phobias can include intense fear or panic, avoidance of the phobic stimulus, physical symptoms such as 
          rapid heartbeat, sweating, trembling, and nausea, and a significant impact on a person's social, occupational, or academic functioning.

          </p>

          <p className="text-medium-emphasis small">
          Treatment for specific phobias can involve cognitive-behavioral therapy (CBT), exposure therapy, and medications such as antidepressants 
          or beta-blockers. With appropriate treatment, many people with specific phobias can learn to manage their fears and live more fulfilling 
          lives.
          </p>

          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>How to Prevent specific phobias?</strong>
          </CCardHeader>
          <CCardBody>
          <p className="text-medium-emphasis small">
          It is not always possible to prevent specific phobias, as they can arise from a variety of factors such as genetics, traumatic
           experiences, or learned behaviors. However, there are some steps that may help reduce the risk of developing specific phobias:
          </p>

          <p className="text-medium-emphasis small">
          Encourage a supportive environment: Growing up in a supportive and safe environment can help reduce the risk of developing 
          specific phobias. It is important to foster a nurturing environment that encourages open communication, trust, and positive 
          reinforcement.
          </p>

          <p className="text-medium-emphasis small">
          Exposure to new experiences: Encourage children to try new experiences and face their fears in a safe and supportive environment. 
          Gradual exposure to new experiences can help build confidence and reduce the risk of developing specific phobias.
          </p>

          <p className="text-medium-emphasis small">
          Seek treatment for anxiety: Early treatment for anxiety disorders, such as generalized anxiety disorder, can help reduce the risk of 
          developing specific phobias.
          </p>

          <p className="text-medium-emphasis small">
          Address trauma: Trauma can be a significant factor in the development of specific phobias. Addressing and treating trauma as soon as 
          possible can help reduce the risk of developing specific phobias
          </p>

          <p className="text-medium-emphasis small">
          Practice relaxation techniques: Encouraging the practice of relaxation techniques such as deep breathing, meditation, and 
          progressive muscle relaxation can help reduce anxiety and stress, which can reduce the risk of developing specific phobias.

          </p>

          <p className="text-medium-emphasis small">
          Seek professional help: If you are experiencing symptoms of anxiety or specific phobias, it is important to seek professional 
          help from a mental health professional who can provide appropriate treatment and support.
          </p>
          
          </CCardBody>
        </CCard>
      </CCol>
      {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Collapse</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">You can use a link or a button component.</p>
            <DocsExample href="components/collapse">
              <CButton
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setVisible(!visible)
                }}
              >
                Link
              </CButton>
              <CButton onClick={() => setVisible(!visible)}>Button</CButton>
              <CCollapse visible={visible}>
                <CCard className="mt-3">
                  <CCardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                    anderson cred nesciunt sapiente ea proident.
                  </CCardBody>
                </CCard>
              </CCollapse>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Collapse</strong> <small> Horizontal</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">You can use a link or a button component.</p>
            <DocsExample href="components/collapse#horizontal">
              <CButton
                className="mb-3"
                onClick={() => setVisibleHorizontal(!visibleHorizontal)}
                aria-expanded={visibleHorizontal}
                aria-controls="collapseWidthExample"
              >
                Button
              </CButton>
              <div style={{ minHeight: '120px' }}>
                <CCollapse id="collapseWidthExample" horizontal visible={visibleHorizontal}>
                  <CCard style={{ width: '300px' }}>
                    <CCardBody>
                      This is some placeholder content for a horizontal collapse. It&#39;s hidden by
                      default and shown when triggered.
                    </CCardBody>
                  </CCard>
                </CCollapse>
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Collapse</strong> <small> multi target</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              A <code>&lt;CButton&gt;</code> can show and hide multiple elements.
            </p>
            <DocsExample href="components/collapse#multiple-targets">
              <CButton onClick={() => setVisibleA(!visibleA)}>Toggle first element</CButton>
              <CButton onClick={() => setVisibleB(!visibleB)}>Toggle second element</CButton>
              <CButton
                onClick={() => {
                  setVisibleA(!visibleA)
                  setVisibleB(!visibleB)
                }}
              >
                Toggle both elements
              </CButton>
              <CRow>
                <CCol xs={6}>
                  <CCollapse visible={visibleA}>
                    <CCard className="mt-3">
                      <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident.
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
                <CCol xs={6}>
                  <CCollapse visible={visibleB}>
                    <CCard className="mt-3">
                      <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident.
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}
    </CRow>
  )
}

export default Collapses
