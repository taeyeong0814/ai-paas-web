import { useOutletContext, Navigate } from "react-router";

export default function HomePage() {
  const { accessToken } = useOutletContext<{ accessToken: string }>();

  if (accessToken) {
    return <Navigate to="/service" />;
  }

  return <Navigate to="/login" />;
}
