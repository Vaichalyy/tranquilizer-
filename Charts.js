import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>

<CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Video Game Addiction Statistics 2022 – How Many Addicted Gamers Are There? </strong>
          </CCardHeader>
          <CCardBody>
          <p className="text-medium-emphasis small">
          Video game addiction is a growing problem in modern society. While some people are not aware of it, others call 
          video games “the new drug.”
          </p>

          </CCardBody>
        </CCard>
      </CCol>
      
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader><strong>Based on survey of 40000 Americans conducted in Feb 2022.</strong></CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Under 18', '18 - 34', '35 - 54', '55 - 64', '65+'],
                datasets: [
                  {
                    label: 'Play Video Games',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader><strong>Hart Rate Variability(RMSSD)</strong></CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Baseline', 'Pre Game', '0-5m game play', '0-10m game play', '10-15m game play', 'JPost game'],
                datasets: [
                  {
                    label: 'Puzzle',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(74, 230, 0, 0.8)',
                    pointBackgroundColor: 'rgba(230, 0, 119, 0.8)',
                    pointBorderColor: '#fff',
                    data: [40, 38, 33, 31, 30, 42, ],
                  },
                  {
                    label: 'Fighting',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(0, 13, 255, 0.8)',
                    pointBorderColor: '#fff',
                    data: [40, 38, 39, 37, 38, 42, ],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader><strong>Favorite Video Game Genres</strong></CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['Action', 'Shooter', 'Sport', 'Fighind','Racing','Adventure'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16','#36A2EB','#FFCE56'],
                    data: [50, 20, 15, 7,5,3],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      {/* <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Pie Chart</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Red', 'Green', 'Yellow'],
                datasets: [
                  {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Polar Area Chart</CCardHeader>
          <CCardBody>
            <CChartPolarArea
              data={{
                labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
                datasets: [
                  {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Radar Chart</CCardHeader>
          <CCardBody>
            <CChartRadar
              data={{
                labels: [
                  'Eating',
                  'Drinking',
                  'Sleeping',
                  'Designing',
                  'Coding',
                  'Cycling',
                  'Running',
                ],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [65, 59, 90, 81, 56, 55, 40],
                  },
                  {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                    data: [28, 48, 40, 19, 96, 27, 100],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol> */}
    </CRow>
  )
}

export default Charts
