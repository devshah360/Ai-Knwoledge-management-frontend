function RoleGuard({
  role,
  children
}) {

  const currentRole =
    localStorage.getItem(
      "role"
    );

  if (
    currentRole !== role
  ) {

    return (
      <div>

        Access Denied

      </div>
    );

  }

  return children;
}

export default RoleGuard;