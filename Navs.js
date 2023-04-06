import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Navs = () => {
  return (
    <CRow>
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Why Anxiety Occurs..  </strong>
          </CCardHeader>
          <CCardBody>
          <p className="text-medium-emphasis small">
          Anxiety is a natural response to stress or a perceived threat. It is a feeling of worry, unease, 
          or apprehension about what may happen in the future. Anxiety can be caused by a variety of factors, including:
          </p>

          <p className="text-medium-emphasis small">
          <strong>1.</strong> Genetics: Research has shown that anxiety disorders can run in families, suggesting that there 
          may be a genetic component to anxiety.
          </p>

          <p className="text-medium-emphasis small">
          <strong>2.</strong> Environmental factors: Traumatic or stressful life events, such as abuse, neglect, or the 
          death of a loved one, can trigger anxiety.
          </p>

          <p className="text-medium-emphasis small">
          <strong>3.</strong> Brain chemistry: Imbalances in the levels of neurotransmitters such as serotonin and dopamine can 
          contribute to anxiety.
          </p>

          <p className="text-medium-emphasis small">
          <strong>4.</strong> Medical conditions: Certain medical conditions, such as thyroid disorders, heart disease, 
          or chronic pain, can cause or worsen anxiety.
          </p>

          <p className="text-medium-emphasis small">
          <strong>5.</strong> Substance abuse: Alcohol and drug abuse can cause anxiety and may also be used to cope with anxiety.
          </p>

          <p className="text-medium-emphasis small">
          <strong>6.</strong> Personality traits: People who are highly sensitive or have a tendency to worry may be more prone to anxiety.
          </p>

          <p className="text-medium-emphasis small">
          It is important to note that everyone experiences anxiety from time to time, and not all anxiety is a disorder. However, 
          when anxiety becomes excessive or interferes with daily life, it may be a sign of an anxiety disorder and should be evaluated 
          by a mental health professional.
          </p>

          </CCardBody>
        </CCard>
      </CCol>
      {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Base navs</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              The base <code>.nav</code> component is built with flexbox and provide a strong
              foundation for building all types of navigation components. It includes some style
              overrides (for working with lists), some link padding for larger hit areas, and basic
              disabled styling.
            </p>
            <DocsExample href="components/nav#base-nav">
              <CNav>
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
            <p className="text-medium-emphasis small">
              Classes are used throughout, so your markup can be super flexible. Use{' '}
              <code>&lt;ul&gt;</code>s like above, <code>&lt;ol&gt;</code> if the order of your
              items is important, or roll your own with a <code>&lt;nav&gt;</code> element. Because
              the .nav uses display: flex, the nav links behave the same as nav items would, but
              without the extra markup.
            </p>
            <DocsExample href="components/nav#base-nav">
              <CNav component="nav">
                <CNavLink href="#" active>
                  Active
                </CNavLink>
                <CNavLink href="#">Link</CNavLink>
                <CNavLink href="#">Link</CNavLink>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Horizontal alignment</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Change the horizontal alignment of your nav with{' '}
              <a href="https://coreui.io/docs/layout/grid/#horizontal-alignment">
                flexbox utilities
              </a>
              . By default, navs are left-aligned, but you can easily change them to center or right
              aligned.
            </p>
            <p className="text-medium-emphasis small">
              Centered with <code>.justify-content-center</code>:
            </p>
            <DocsExample href="components/nav#horizontal-alignment">
              <CNav className="justify-content-center">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
            <p className="text-medium-emphasis small">
              Right-aligned with <code>.justify-content-end</code>:
            </p>
            <DocsExample href="components/nav#base-nav">
              <CNav className="justify-content-end">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Vertical</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Stack your navigation by changing the flex item direction with the{' '}
              <code>.flex-column</code> utility. Need to stack them on some viewports but not
              others? Use the responsive versions (e.g., <code>.flex-sm-column</code>).
            </p>
            <DocsExample href="components/nav#vertical">
              <CNav className="flex-column">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Tabs</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Takes the basic nav from above and adds the <code>variant=&#34;tabs&#34;</code> class
              to generate a tabbed interface
            </p>
            <DocsExample href="components/nav#tabs">
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Pills</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Take that same HTML, but use <code>variant=&#34;pills&#34;</code> instead:
            </p>
            <DocsExample href="components/nav#pills">
              <CNav variant="pills">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Fill and justify</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Force your <code>.nav</code>&#39;s contents to extend the full available width one of
              two modifier classes. To proportionately fill all available space with your{' '}
              <code>.nav-item</code>s, use <code>layout=&#34;fill&#34;</code>. Notice that all
              horizontal space is occupied, but not every nav item has the same width.
            </p>
            <DocsExample href="components/nav#fill-and-justify">
              <CNav variant="pills" layout="fill">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
            <p className="text-medium-emphasis small">
              For equal-width elements, use <code>layout=&#34;justified&#34;</code>. All horizontal
              space will be occupied by nav links, but unlike the .nav-fill above, every nav item
              will be the same width.
            </p>
            <DocsExample href="components/nav#fill-and-justify">
              <CNav variant="pills" layout="justified">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Working with flex utilities</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              If you need responsive nav variations, consider using a series of{' '}
              <a href="https://coreui.io/docs/utilities/flex">flexbox utilities</a>. While more
              verbose, these utilities offer greater customization across responsive breakpoints. In
              the example below, our nav will be stacked on the lowest breakpoint, then adapt to a
              horizontal layout that fills the available width starting from the small breakpoint.
            </p>
            <DocsExample href="components/nav#working-with-flex-utilities">
              <CNav component="nav" variant="pills" className="flex-column flex-sm-row">
                <CNavLink href="#" active>
                  Active
                </CNavLink>
                <CNavLink href="#">Link</CNavLink>
                <CNavLink href="#">Link</CNavLink>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Tabs with dropdowns</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/nav#tabs-with-dropdowns">
              <CNav>
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CDropdown variant="nav-item">
                  <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Pills with dropdowns</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/nav#pills-with-dropdowns">
              <CNav variant="pills">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CDropdown variant="nav-item">
                  <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}
    </CRow>
  )
}

export default Navs
