import React from "react"
import styled from "@emotion/styled"

type TextProps = {
  hasError?: boolean
} & React.HTMLAttributes<HTMLParagraphElement>

const Text = styled.p<TextProps>(
  {
    marginTop: "8px",
    fontFamily: "sans-serif",
    fontSize: "14px",
    lineHeight: "20px",
    textAlign: "left",
  },
  ({ theme, hasError }) => ({
    color: hasError ? theme.palette.error.main : "black",
  })
)

type HelperTextProps = {
  hasError?: boolean
  children: string
}

export default function HelperText({
  hasError,
  children,
  ...otherProps
}: HelperTextProps) {
  return (
    <Text hasError={hasError} {...otherProps}>
      {children}
    </Text>
  )
}
