import React from 'react'
import { Container, Typography } from '@mui/material'

import Page from '../components/Page'

export default function DashboardApp(){
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome!
        </Typography>
      </Container>
    </Page>
  )
}
