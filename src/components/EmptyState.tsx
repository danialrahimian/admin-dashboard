import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
};

export default function EmptyState({
  title,
  description,
  icon,
}: EmptyStateProps) {
  return (
    <Box
      border="2px dashed var(--border-color)"
      borderRadius="16px"
      padding="32px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      gap={2}
      minHeight="200px"
    >
      {icon}
      <Typography
        variant="h6"
        component="h2"
        fontFamily="var(--font-family)"
        fontWeight={600}
      >
        {title}
      </Typography>
      {description ? (
        <Typography color="text.secondary" fontFamily="var(--font-family)">
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}
