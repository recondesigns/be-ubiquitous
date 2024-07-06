import React from 'react'
import styled from '@emotion/styled'

const ActionsWrapper = styled('div')({
  padding: '12px 24px 24px 24px',
})

type ActionsProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export default function CardActions({ children, ...otherProps }: ActionsProps) {
  return <ActionsWrapper {...otherProps}>{children}</ActionsWrapper>
}
