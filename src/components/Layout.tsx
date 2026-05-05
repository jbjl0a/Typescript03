import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Header } from "./Header"

interface LayoutProps {
  children: ReactNode
}

// Layout base da aplicacao.
// Ele reaproveita o Header e renderiza a pagina atual via children.
export const Layout = ({ children }: LayoutProps) => {
  return(
    <Box minHeight='100vh' backgroundColor='#3a7cb2' >
      <Header />
      {/* A pagina atual e inserida aqui pelo React Router. */}
      { children }
    </Box>
  )
}
