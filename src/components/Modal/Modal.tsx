import React from "react"
import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"
import ModalDialog from "./ModalDialog"
import { defaultTheme } from "../emotionTheme"

type ModalWrapperProps = {
  isOpen?: boolean
}

const ModalWrapper = styled("div")<ModalWrapperProps>(
  {
    boxSizing: "border-box",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // border: '2px solid orange'
  },
  ({ isOpen }) => ({
    display: !isOpen ? "none" : "block",
  })
)

const ModalScrim = styled("div")({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.15)",
  // border: '3px solid red'
})

export type ModalProps = {
  // shouldCloseOnEsc?: boolean
  isOpen?: boolean
  children: React.ReactElement | React.ReactElement[]
}

export default function Modal({ isOpen = false, children }: ModalProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalWrapper isOpen={isOpen}>
        <ModalScrim>
          <ModalDialog>{children}</ModalDialog>
        </ModalScrim>
      </ModalWrapper>
    </ThemeProvider>
  )
}
