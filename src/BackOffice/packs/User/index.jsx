import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

import { styled } from '@mui/material/styles'
import {
  Card, Container, Stack, Typography,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Page from '@components/Page'
import { FormProvider, RHFCheckbox, RHFTextField } from '@components/hook-form'

import useUser from '@hooks/useUser'

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}))

function User(){
  const navigate = useNavigate()

  const UserSchema = Yup.object().shape({
    name: Yup.string().required('Name required'),
    company: Yup.string().required('Company required'),
    role: Yup.string().required('Role'),
    verified: Yup.bool().required('Required'),
    status: Yup.string().required('Status is required'),
  })

  const defaultValues = {
    name: '',
    company: '',
    role: '',
    verified: false,
    status: '',
  }

  const methods = useForm({
    resolver: yupResolver(UserSchema),
    defaultValues,
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods

  const {
    callbacks: {
      createUser: createFn,
    },
  } = useUser()

  const onSubmit = async (data) => {
    createFn(data).then(({ success, errors }) => {
      if (!success && errors){
        console.log('failed')
        return
      }

      navigate('/dashboard/user', { replace: true })
    })
  }

  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Add User
          </Typography>
        </Stack>
        <Card>
          <Container>
            <ContentStyle>
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                  <RHFTextField name="name" label="Name" />
                  <RHFTextField name="company" label="Company" />
                  <RHFTextField name="role" label="Role" />
                  <RHFCheckbox name="verified" label="Verify" />
                  <RHFTextField name="status" label="Status" />
                  <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                    Create
                  </LoadingButton>
                </Stack>
              </FormProvider>
            </ContentStyle>
          </Container>
        </Card>
      </Container>
    </Page>
  )
}

export default User
