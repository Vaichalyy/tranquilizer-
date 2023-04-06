import React from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Breadcrumbs = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>What is Agoraphobia </strong>
          </CCardHeader>
          <CCardBody>
          <p className="text-medium-emphasis small">
          Agoraphobia is a type of anxiety disorder characterized by a fear or avoidance of situations 
          or places that may be difficult to escape or where help may not be readily available in the event 
          of a panic attack or other intense symptoms of anxiety. Agoraphobia can lead to avoidance of 
          social situations, public places, or even leaving the house altogether.
          </p>

          <p className="text-medium-emphasis small">
          Agoraphobia can develop as a result of a past traumatic event, or it may occur without an obvious cause. 
          It often occurs alongside panic disorder, as individuals with panic disorder may fear experiencing panic 
          attacks in situations where they feel they may not be able to escape or get help.
          </p>

          <p className="text-medium-emphasis small">
          Symptoms of agoraphobia can include:
          </p>

          <p className="text-medium-emphasis small">
          <strong>1.</strong> Avoidance of certain situations or places, such as crowds, public transportation, or open spaces
          </p>

          <p className="text-medium-emphasis small">
          <strong>2.</strong> Fear of being alone in public places or away from home
          </p>

          <p className="text-medium-emphasis small">
          <strong>3.</strong>Fear of losing control in a public place or experiencing a panic attack
          </p>

          <p className="text-medium-emphasis small">
          <strong>4.</strong> Physical symptoms such as sweating, trembling, rapid heartbeat, or nausea when faced with a feared situation
          </p>

          <p className="text-medium-emphasis small">
          <strong>5.</strong> Difficulty leaving home or being alone
          </p>

          <p className="text-medium-emphasis small">
          Treatment for agoraphobia can involve cognitive-behavioral therapy (CBT), exposure therapy, and medications 
          such as antidepressants or anti-anxiety medications. With appropriate treatment, many people with agoraphobia 
          can learn to manage their symptoms and lead fulfilling lives.
          </p>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>How to prevent agoraphobia?</strong>
          </CCardHeader>
          <CCardBody>
          <p className="text-medium-emphasis small">
          It may not always be possible to prevent agoraphobia, as it can arise from a variety of factors 
          such as genetics, past experiences, or learned behaviors. However, there are some steps that may 
          help reduce the risk of developing agoraphobia:
          </p>

          <p className="text-medium-emphasis small">
          Manage anxiety: Managing anxiety can help reduce the risk of developing agoraphobia. Practicing 
          relaxation techniques such as deep breathing, meditation, and progressive muscle relaxation can 
          help reduce anxiety and stress
          </p>

          <p className="text-medium-emphasis small">
          Gradual exposure: Gradual exposure to new situations and experiences can help build tolerance and 
          reduce the risk of developing agoraphobia. Starting with small steps and gradually increasing exposure can 
          help build confidence and resilience.
          </p>

          <p className="text-medium-emphasis small">
          Address past traumas: Addressing past traumas, such as loss or anxiety-provoking experiences, 
          can help reduce the risk of developing agoraphobia. Seeking professional help to address past traumas 
          can provide support and strategies to manage anxiety.
          </p>

          <p className="text-medium-emphasis small">
          Seek treatment for anxiety: Early treatment for anxiety disorders, such as generalized anxiety disorder or 
          panic disorder, can help reduce the risk of developing agoraphobia.
          </p>

          <p className="text-medium-emphasis small">
          Seek professional help: If you or a loved one is experiencing symptoms of anxiety or agoraphobia, it is important 
          to seek professional help from a mental health professional who can provide appropriate treatment and support.
          </p>
         
          </CCardBody>
        </CCard>
      </CCol>
      {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Breadcrumb</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              What is the Agoraphobia.. */}
              {/* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before">
                {' '}
                <code>::before</code>
              </a>{' '}
              and{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content">
                {' '}
                <code>content</code>
              </a>
              . */}
            {/* </p>
            <DocsExample href="components/breadcrumb">
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink href="#">Home</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>Library</CBreadcrumbItem>
              </CBreadcrumb>
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink href="#">Home</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink href="#">Library</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>Data</CBreadcrumbItem>
              </CBreadcrumb>
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink href="#">Home</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink href="#">Library</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink href="#">Data</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>Bootstrap</CBreadcrumbItem>
              </CBreadcrumb>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow> */}
    </CRow>
  )
}

export default Breadcrumbs
