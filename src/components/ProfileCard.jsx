function ProfileCard({ user }) {

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold">
        {user.name}
      </h2>

      <p>{user.email}</p>

      <p>
        Role:
        {" "}
        {user.role}
      </p>

    </div>

  );
}

export default ProfileCard;