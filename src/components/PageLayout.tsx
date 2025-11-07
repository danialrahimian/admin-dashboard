import { Box, Container, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

type PageLayoutProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  children?: ReactNode;
};

/**
 * Reusable page layout that provides consistent spacing, header, and optional actions.
 */
export default function PageLayout({
  title,
  description,
  actions,
  children,
}: PageLayoutProps) {
  return (
    <Container>
      <Stack spacing={4} mt={5}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          flexDirection={{ xs: "column", md: "row" }}
          gap={2}
        >
          <Box>
            <Typography
              variant="h4"
              component="h1"
              fontFamily="var(--font-family)"
              fontWeight={600}
            >
              {title}
            </Typography>
            {description ? (
              <Typography
                mt={1}
                color="text.secondary"
                fontFamily="var(--font-family)"
              >
                {description}
              </Typography>
            ) : null}
          </Box>
          {actions ? <Box display="flex" gap={2}>{actions}</Box> : null}
        </Box>
        {children}
      </Stack>
    </Container>
  );
}
