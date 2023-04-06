import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CFormSelect, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const Select = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>What are the Disadvantages to Play Vedio Games </strong>
          </CCardHeader>
          <CCardBody>
          <p className="text-medium-emphasis small">
          It's difficult to provide an exhaustive list of disadvantages of playing video games as different individuals may experience
           different negative effects. However, here are some common disadvantages associated with excessive or inappropriate video game use:
          </p>

          <p className="text-medium-emphasis small">
          <strong>1.</strong> Addiction or excessive use leading to neglect of other important activities or responsibilities.
          </p>

          <p className="text-medium-emphasis small">
          <strong>2.</strong> Increased aggression or violent behavior, particularly in younger players.
          </p>

          <p className="text-medium-emphasis small">
          <strong>3.</strong> Increased risk of obesity and associated health problems due to prolonged sitting and lack of physical activity.
          </p>

          <p className="text-medium-emphasis small">
          <strong>4.</strong> Negative effects on sleep patterns and quality, leading to fatigue and other health issues.
          </p>

          <p className="text-medium-emphasis small">
          <strong>5.</strong> Reduced social interaction and communication skills due to isolation or prioritizing online relationships 
          over face-to-face interaction.
          </p>

          <p className="text-medium-emphasis small">
          <strong>6.</strong> Exposure to inappropriate or violent content, particularly in games rated for mature audiences.
          </p>

          <p className="text-medium-emphasis small">
          <strong>7.</strong> Development of negative attitudes and stereotypes towards certain groups of people portrayed in video games.
          </p>

          <p className="text-medium-emphasis small">
          <strong>8.</strong> Increased risk of seizures in people with epilepsy due to flashing lights or other visual stimuli.
          </p>

          <p className="text-medium-emphasis small">
          <strong>9.</strong> Eye strain, headaches, and other physical discomforts due to prolonged screen time.</p>

          <p className="text-medium-emphasis small">
          <strong>10.</strong> Negative impact on academic performance due to distraction or excessive use.
          </p>

          <p className="text-medium-emphasis small">
          <strong>11.</strong> Increased risk of depression and anxiety, particularly in those who use video games as a coping mechanism or escape.
          </p>

          <p className="text-medium-emphasis small">
          <strong>12.</strong> Risk of online harassment or cyberbullying.
          </p>

          <p className="text-medium-emphasis small">
          <strong>13.</strong> Exposure to addictive gambling mechanics and microtransactions in some games.
          </p>

          <p className="text-medium-emphasis small">
          <strong>14.</strong> Increased risk of carpal tunnel syndrome or other repetitive strain injuries.
          </p>

          <p className="text-medium-emphasis small">
          <strong>15.</strong> Development of unhealthy or unrealistic expectations or attitudes towards romance and relationships.
          </p>

          <p className="text-medium-emphasis small">
          <strong>16.</strong> Exposure to gender or racial stereotypes and discrimination.</p>

          <p className="text-medium-emphasis small">
          <strong>17.</strong> Desensitization to violence or other negative content.
          </p>

          <p className="text-medium-emphasis small">
          <strong>18.</strong> Risk of motion sickness or nausea in some players.
          </p>

          <p className="text-medium-emphasis small">
          <strong>19.</strong> Development of poor time management and planning skills due to excessive gaming.</p>

          <p className="text-medium-emphasis small">
          <strong>20.</strong> Increased risk of addiction to drugs or alcohol in some players who use video games as a coping mechanism.
          </p>

          </CCardBody>
        </CCard>
      </CCol>
      {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Select</strong> <small>Default</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/select">
              <CFormSelect aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Select</strong> <small>Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              You may also choose from small and large custom selects to match our similarly sized
              text inputs.
            </p>
            <DocsExample href="forms/select#sizing">
              <CFormSelect size="lg" className="mb-3" aria-label="Large select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
              <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
            <p className="text-medium-emphasis small">
              The <code>multiple</code> attribute is also supported:
            </p>
            <DocsExample href="forms/select#sizing">
              <CFormSelect size="lg" multiple aria-label="Multiple select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
            <p className="text-medium-emphasis small">
              As is the <code>htmlSize</code> property:
            </p>
            <DocsExample href="forms/select#sizing">
              <CFormSelect size="lg" multiple aria-label="Multiple select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Select</strong> <small>Disabled</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add the <code>disabled</code> boolean attribute on a select to give it a grayed out
              appearance and remove pointer events.
            </p>
            <DocsExample href="forms/select#disabled">
              <CFormSelect aria-label="Disabled select example" disabled>
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}
    </CRow>
  )
}

export default Select
